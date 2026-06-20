"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";

const SECTION_HEIGHT = 160;
const OVERLAP = 0;
const CARD_HEIGHT = 100;
const STICKY_GAP = CARD_HEIGHT - OVERLAP;
const MARGIN_TOP = -(SECTION_HEIGHT - STICKY_GAP);
const EXIT_START = CARD_HEIGHT / SECTION_HEIGHT;
const EXIT_RANGE = 1 - EXIT_START;
const MID_O = EXIT_START + EXIT_RANGE * 0.5;
const MID_S = EXIT_START + EXIT_RANGE * 0.6;
const MID_Y = EXIT_START + EXIT_RANGE * 0.7;

function StackedCard({
  project,
  index,
  total,
}: {
  project: CaseStudy;
  index: number;
  total: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [EXIT_START, MID_S, 1],
    [1, 0.97, 0.93]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [EXIT_START, MID_O, 1],
    [0, 0.08, 0.15]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [EXIT_START, MID_O, 1],
    [1, 0.6, 0]
  );

  const cardY = useTransform(
    scrollYProgress,
    [EXIT_START, MID_Y, 1],
    [0, -15, -40]
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
            className="absolute -inset-2 rounded-3xl bg-black/15 dark:bg-black/50 blur-xl pointer-events-none"
            style={{ opacity: shadowOpacity }}
          />
          <Link href={`/work/${project.slug}`} className="group block relative z-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#f5f5f5] dark:bg-[#151515] mb-6">
              <motion.div className="w-full h-full">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover brightness-[0.95] group-hover:brightness-100 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute bottom-6 left-6 pointer-events-none">
                <span className="inline-flex items-center gap-2 text-sm text-white bg-[#1151ff]/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
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

            <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#1151ff] font-medium uppercase tracking-wider">
                    {project.client}
                  </span>
                  <span className="text-[#cacacb] dark:text-[#333333]">/</span>
                  <span className="text-xs text-[#707072]">{project.industry}</span>
                </div>
                {project.metric && (
                  <div className="inline-block text-xs font-medium text-[#111111] dark:text-[#f5f5f5] bg-[#f5f5f5] dark:bg-[#151515] px-3 py-1 rounded-full">
                    {project.metric.value} &mdash; {project.metric.label}
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3">
                  {project.title}
                </h2>
                <p className="text-sm text-[#707072] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
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
        <StackedCard
          key={project.slug}
          project={project}
          index={i}
          total={total}
        />
      ))}
    </div>
  );
}
