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
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#E8E4DE] dark:bg-[#2A2826] mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover brightness-[0.95] group-hover:brightness-100 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="inline-block text-xs text-white bg-[#F4A259] px-3 py-1 rounded-full">
              View case study
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-[#F4A259] font-medium uppercase tracking-wider">
            {project.client}
          </span>
          <span className="text-[#D4D0CA] dark:text-[#3A3836]">/</span>
          <span className="text-xs text-[#8A8680]">{project.industry}</span>
        </div>

        <h3 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-1.5">
          {project.title}
        </h3>

        <p className="text-sm text-[#8A8680] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {project.metric && (
          <div className="mt-3 inline-block text-xs font-medium text-[#2D2D2D] dark:text-[#F0EDE8] bg-[#E8E4DE] dark:bg-[#2A2826] px-3 py-1 rounded-full">
            {project.metric.value} &mdash; {project.metric.label}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
