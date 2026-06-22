"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";
import { BLUR_DATA_URL } from "@/lib/images";

const SECTION_HEIGHT = 140;
const OVERLAP = 0;
const CARD_HEIGHT = 100;
const STICKY_GAP = CARD_HEIGHT - OVERLAP;
const MARGIN_TOP = -(SECTION_HEIGHT - STICKY_GAP);
const EXIT_START = CARD_HEIGHT / SECTION_HEIGHT;

function StackedCard({
  project,
  index,
}: {
  project: CaseStudy;
  index: number;
  total: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const panelColors = [
    "bg-[#ecfdf5]",  // Budgify — light green
    "bg-[#f0fdfa]",  // Nirva Homepage — light teal
    "bg-[#faf5ff]",  // Nirva Gamification — light purple
    "bg-[#fffbeb]",  // SLC Checkout — light amber
    "bg-[#eef2ff]",  // SLC Category — light indigo
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [EXIT_START, 0.80, 0.92],
    [1, 0.95, 0.9]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [EXIT_START, 0.80, 1],
    [0, 0.1, 0.2]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [EXIT_START, 0.82, 0.90],
    [1, 0.4, 0]
  );

  const cardY = useTransform(
    scrollYProgress,
    [EXIT_START, 0.80, 1],
    [0, -5, -15]
  );

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{
        height: `${SECTION_HEIGHT}vh`,
        marginTop: index === 0 ? 0 : `${MARGIN_TOP}vh`,
      }}
    >
      <div
        className="sticky top-0 h-screen flex items-center justify-center p-4 md:p-6"
        style={{ zIndex: index + 1 }}
      >
        <motion.div
          style={{ scale, y: cardY, opacity: cardOpacity }}
          className="w-full max-w-6xl relative"
        >
          <motion.div
            className="absolute -inset-2 rounded-3xl bg-black/15 blur-xl pointer-events-none"
            style={{ opacity: shadowOpacity }}
          />
          <Link href={`/work/${project.slug}`} className="group block relative z-10">
            <div className="flex flex-col h-[75vh] min-h-[460px] max-h-[680px] w-full rounded-2xl overflow-hidden bg-[#f5f5f5] md:flex-row-reverse">
              <div className="relative h-[35vh] md:h-full md:flex-[3] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-all duration-700" />
              </div>
              <div
                className={`relative md:flex-[2] p-6 md:p-8 lg:p-10 flex flex-col justify-center ${panelColors[index]}`}
              >
                <div className="flex items-center gap-2 text-xs font-medium mb-3" style={{ color: project.accentColor ?? "#1151ff" }}>
                  <span className="uppercase tracking-wider">{project.client}</span>
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: project.accentColor ?? "#1151ff" }} />
                  <span>{project.industry}</span>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-[#111111] mb-3">
                  {project.title}
                </h2>

                <p className="text-sm text-[#707072] leading-relaxed line-clamp-3 mb-6 max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {project.metric && (
                    <span
                      className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: `${project.accentColor ?? "#1151ff"}1A`, color: project.accentColor ?? "#1151ff" }}
                    >
                      {project.metric.value} &mdash; {project.metric.label}
                    </span>
                  )}
                  <div className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span
                      className="inline-flex items-center gap-2 text-sm text-white px-4 py-2 rounded-full"
                      style={{ backgroundColor: project.accentColor ?? "#1151ff" }}
                    >
                      View case study
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M1 11L11 1M11 1H3M11 1V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProjectStack() {
  const total = caseStudies.length;

  return (
    <div className="relative" style={{ height: `${(total - 1) * STICKY_GAP + SECTION_HEIGHT}vh` }}>
      {caseStudies.map((project, i) => (
        <StackedCard key={project.slug} project={project} index={i} total={total} />
      ))}
    </div>
  );
}
