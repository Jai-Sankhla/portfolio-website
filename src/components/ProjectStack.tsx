"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export default function ProjectStack() {
  return (
    <section className="py-16 md:py-20">
      <div
        className="overflow-x-auto snap-x snap-mandatory no-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-6 px-6 pb-4">
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-[85vw] md:min-w-[65vw] snap-start shrink-0"
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#f5f5f5] dark:bg-[#151515] mb-6">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover brightness-[0.95] group-hover:brightness-100 transition-all duration-700"
                      sizes="(max-width: 768px) 85vw, 65vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
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
          ))}
        </div>
      </div>
    </section>
  );
}
