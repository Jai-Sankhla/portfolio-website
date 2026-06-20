"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";
import { BLUR_DATA_URL } from "@/lib/images";

const SECTION_HEIGHT = 160;
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [EXIT_START, 0.85, 0.95],
    [1, 0.95, 0.9]
  );

  const shadowOpacity = useTransform(
    scrollYProgress,
    [EXIT_START, 0.85, 1],
    [0, 0.1, 0.2]
  );

  const cardOpacity = useTransform(
    scrollYProgress,
    [EXIT_START, 0.78, 0.88],
    [1, 0.4, 0]
  );

  const cardY = useTransform(
    scrollYProgress,
    [EXIT_START, 0.85, 1],
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
            className="absolute -inset-2 rounded-3xl bg-black/15 dark:bg-black/50 blur-xl pointer-events-none"
            style={{ opacity: shadowOpacity }}
          />
          <Link href={`/work/${project.slug}`} className="group block relative z-10">
            <div className="relative h-[75vh] min-h-[460px] max-h-[680px] w-full overflow-hidden rounded-2xl bg-[#f5f5f5] dark:bg-[#151515]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 80vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />

              <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/10 transition-all duration-700" />

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111]/80 via-[#111111]/30 to-transparent pointer-events-none" />

              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-white/90 bg-[#111111]/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {project.client}
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-white/60">{project.industry}</span>
                </span>
              </div>

              {project.metric && (
                <div className="absolute top-5 right-5">
                  <span className="inline-block text-xs font-medium text-white/90 bg-[#111111]/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {project.metric.value} &mdash; {project.metric.label}
                  </span>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="max-w-xl">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed line-clamp-2 max-w-lg">
                    {project.description}
                  </p>
                  <div className="mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-2 text-sm text-white bg-[#1151ff] px-4 py-2 rounded-full">
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
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
        >
          <StackedCard project={project} index={i} total={total} />
        </motion.div>
      ))}
    </div>
  );
}
