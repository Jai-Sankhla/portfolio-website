"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function OptionA({ caseStudy }: Props) {
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

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: accentColor }}>
              {caseStudy.client}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight leading-tight mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xs text-[#707072] mb-6">{tagsLine}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              <div>
                <span className="text-[10px] text-[#707072] block mb-0.5 uppercase tracking-wider">Role</span>
                <span className="text-sm font-medium">{caseStudy.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#707072] block mb-0.5 uppercase tracking-wider">Timeline</span>
                <span className="text-sm font-medium">{caseStudy.timeline}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#707072] block mb-0.5 uppercase tracking-wider">Platform</span>
                <span className="text-sm font-medium">{caseStudy.platform}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#707072] block mb-0.5 uppercase tracking-wider">Team</span>
                <span className="text-sm font-medium">{caseStudy.client}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <figure className="rounded-xl border border-[#e8e8e8] bg-white shadow-sm overflow-hidden">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                width={1920}
                height={1080}
                sizes={IMAGE_SIZES}
                className="w-full h-auto"
                priority
              />
            </figure>
            {caseStudy.metric && (
              <div className="bg-white border border-[#e8e8e8] rounded-xl p-5 shadow-sm">
                <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold" style={{ color: accentColor }}>
                  {isNumericMetric ? <><AnimatedCounter to={metricValue} />{caseStudy.metric.value.replace(/[0-9]/g, "")}</> : caseStudy.metric.value}
                </p>
                <p className="text-sm text-[#707072] mt-1 leading-snug">{caseStudy.metric.label}</p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-[65ch] mx-auto mb-12 md:mb-16">
          <p className="text-[#707072] leading-relaxed">{caseStudy.description}</p>
        </div>

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
