"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/case-studies";
import { caseStudies } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
import CaseStudyTOC from "@/components/CaseStudyTOC";
import AnimatedCounter from "@/components/AnimatedCounter";
import { calculateReadingTime } from "@/lib/reading-time";
import SectionRenderer from "@/components/layouts/SectionRenderer";
import CaseStudyFooter from "@/components/layouts/CaseStudyFooter";

const ACCENT = "#1151ff";
const IMAGE_SIZES = "(max-width: 768px) 100vw, 1024px";

interface Props {
  caseStudy: CaseStudy;
}

export default function OptionB({ caseStudy }: Props) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const readingTime = calculateReadingTime(caseStudy);
  const accentColor = caseStudy.accentColor || ACCENT;
  const metricValue = parseInt(caseStudy.metric.value.replace(/[^0-9]/g, ""));
  const isNumericMetric = !isNaN(metricValue);

  const tagsLine = [
    caseStudy.industry?.split(" &")[0] || caseStudy.industry,
    ...caseStudy.tags.slice(0, 2),
  ].filter(Boolean).join(" \u2022 ");

  return (
    <div className="pt-28 pb-12 md:pb-20" style={{ "--accent": accentColor } as React.CSSProperties}>
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/work" className="text-sm text-[#707072] tracking-hover inline-flex items-center gap-1 mb-8 hover:text-[#111111] transition-colors">
          &larr; Back
        </Link>

        <div className="relative w-full rounded-xl overflow-hidden mb-12 md:mb-16">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-medium tracking-wider uppercase mb-2 text-white/80"
              style={{ color: accentColor }}
            >
              {caseStudy.client}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight leading-tight text-white mb-2"
            >
              {caseStudy.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-white/70"
            >
              {tagsLine}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 rounded-xl bg-[#f5f5f5]/50">
          <div>
            <span className="text-xs text-[#707072] block mb-0.5">Role</span>
            <span className="text-sm font-medium">{caseStudy.role}</span>
          </div>
          <div>
            <span className="text-xs text-[#707072] block mb-0.5">Timeline</span>
            <span className="text-sm font-medium">{caseStudy.timeline}</span>
          </div>
          <div>
            <span className="text-xs text-[#707072] block mb-0.5">Platform</span>
            <span className="text-sm font-medium">{caseStudy.platform}</span>
          </div>
          <div>
            <span className="text-xs text-[#707072] block mb-0.5">Team</span>
            <span className="text-sm font-medium">{caseStudy.client}</span>
          </div>
        </div>

        <div className="max-w-[65ch] mx-auto mb-8">
          <p className="text-[#707072] leading-relaxed">{caseStudy.description}</p>
        </div>

        {caseStudy.metric && (
          <div className="max-w-[65ch] mx-auto mb-10">
            <div className="bg-white border border-[#e8e8e8] rounded-xl p-5 shadow-sm">
              <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold" style={{ color: accentColor }}>
                {isNumericMetric ? <><AnimatedCounter to={metricValue} />{caseStudy.metric.value.replace(/[0-9]/g, "")}</> : caseStudy.metric.value}
              </p>
              <p className="text-sm text-[#707072] mt-1 leading-snug">{caseStudy.metric.label}</p>
            </div>
          </div>
        )}

        <div className="text-xs text-[#707072] mb-8 text-center">{readingTime}</div>
        <CaseStudyTOC caseStudy={caseStudy} />

        <div className="space-y-16 md:space-y-20 mt-12 md:mt-16">
          {caseStudy.sections.map((section, i) => (
            <section key={i}>
              <ScrollReveal>
                <h2 data-section-index={i} className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-8">
                  {section.heading}
                </h2>
              </ScrollReveal>
              <div className="space-y-8">
                {section.items.map((item, j) => (
                  <ScrollReveal key={j} delay={Math.min(j * 0.05, 0.2)}>
                    <SectionRenderer item={item} accentColor={accentColor} imageSizes={IMAGE_SIZES} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        <CaseStudyFooter prev={prev} next={next} />
      </div>
    </div>
  );
}
