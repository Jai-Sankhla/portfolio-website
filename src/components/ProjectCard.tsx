"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

interface ProjectCardProps {
  project: CaseStudy;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative w-full overflow-hidden rounded-xl bg-[#f5f5f5] dark:bg-[#151515] mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              width={0}
              height={0}
              className="w-full h-auto brightness-[0.95] group-hover:brightness-100 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
            <span className="inline-block text-xs text-white bg-[#1151ff] px-3 py-1 rounded-full">
              View case study
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-[#1151ff] font-medium uppercase tracking-wider">
            {project.client}
          </span>
          <span className="text-[#cacacb] dark:text-[#333333]">/</span>
          <span className="text-xs text-[#707072]">{project.industry}</span>
        </div>

        <h3 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-1.5">
          {project.title}
        </h3>

        <p className="text-sm text-[#707072] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {project.metric && (
          <div className="mt-3 inline-block text-xs font-medium text-[#111111] dark:text-[#f5f5f5] bg-[#f5f5f5] dark:bg-[#151515] px-3 py-1 rounded-full">
            {project.metric.value} &mdash; {project.metric.label}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
