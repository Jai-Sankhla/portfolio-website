"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

interface CircuitCardProps {
  project: CaseStudy;
  index?: number;
}

const circuitColors = [
  { track: "#E10600", secondary: "#FFD700" },
  { track: "#E10600", secondary: "#B0B0C0" },
  { track: "#E10600", secondary: "#ffffff" },
  { track: "#E10600", secondary: "#FFD700" },
  { track: "#E10600", secondary: "#B0B0C0" },
  { track: "#E10600", secondary: "#ffffff" },
];

function MiniCircuit({ color, secondary }: { color: string; secondary: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-16 mb-3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 60 L10 20 Q10 10 20 10 L70 10 Q80 10 80 20 L80 30 Q80 40 70 40 L40 40 Q30 40 30 50 L30 60 Q30 70 40 70 L90 70 Q100 70 100 60 L100 40 Q100 30 110 30 L110 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <circle cx="10" cy="60" r="2" fill={secondary} />
      <circle cx="110" cy="20" r="2" fill={color} />
      <path
        d="M10 60 L15 55 L15 65 Z"
        fill={color}
        opacity="0.6"
      />
    </svg>
  );
}

export default function CircuitCard({ project, index = 0 }: CircuitCardProps) {
  const colors = circuitColors[index % circuitColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#ffffff] dark:bg-[#1A1A28] mb-4 border border-[#cacacb] dark:border-[#2a2a2a] group-hover:border-[#E10600] transition-colors duration-500">
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-white bg-[#E10600] px-3 py-1.5 rounded-full">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6 L6 2 L10 6 L6 10 Z" fill="white" opacity="0.5" />
                <path d="M1 6 L3 4 L5 6 L3 8 Z" fill="white" transform="translate(6,2)" opacity="0.3" />
              </svg>
              View case study &rarr;
            </span>
          </div>
        </div>

        <MiniCircuit color={colors.track} secondary={colors.secondary} />

        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-[#E10600] font-medium uppercase tracking-wider">
            {project.client}
          </span>
          <span className="text-[#cacacb] dark:text-[#333333]">/</span>
          <span className="text-xs text-[#8B8B9E]">{project.industry}</span>
        </div>

        <h3 className="text-base font-[family-name:var(--font-display)] font-semibold tracking-tight mb-1.5 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-[#8B8B9E] leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {project.metric && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] text-[#8B8B9E] tabular-nums font-medium uppercase tracking-wider">
              BEST LAP
            </span>
            <span className="text-xs font-medium text-[#E10600] bg-[#E10600]/10 dark:bg-[#E10600]/15 px-2.5 py-0.5 rounded-full tabular-nums">
              {project.metric.value}
            </span>
            <span className="text-[10px] text-[#8B8B9E]">
              {project.metric.label}
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
