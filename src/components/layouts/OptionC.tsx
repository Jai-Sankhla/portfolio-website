"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { caseStudies } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { calculateReadingTime } from "@/lib/reading-time";
import SectionRenderer from "@/components/layouts/SectionRenderer";
import CaseStudyFooter from "@/components/layouts/CaseStudyFooter";

const ACCENT = "#1151ff";
const IMAGE_SIZES = "(max-width: 768px) 100vw, 1024px";

interface Props {
  caseStudy: CaseStudy;
}

export default function OptionC({ caseStudy }: Props) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const [activeIndex, setActiveIndex] = useState(0);
  const accentColor = caseStudy.accentColor || ACCENT;
  const metricValue = parseInt(caseStudy.metric.value.replace(/[^0-9]/g, ""));
  const isNumericMetric = !isNaN(metricValue);
  const readingTime = calculateReadingTime(caseStudy);

  const tagsLine = [
    caseStudy.industry?.split(" &")[0] || caseStudy.industry,
    ...caseStudy.tags.slice(0, 2),
  ].filter(Boolean).join(" \u2022 ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-section-index") || "0", 10);
            setActiveIndex(idx);
          }
        }
      },
      { rootMargin: "-120px 0px -50% 0px", threshold: 0 }
    );

    const headings = document.querySelectorAll("[data-section-index]");
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-28 pb-12 md:pb-20" style={{ "--accent": accentColor } as React.CSSProperties}>
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/work" className="text-sm text-[#707072] tracking-hover inline-flex items-center gap-1 mb-8 hover:text-[#111111] transition-colors">
          &larr; Back
        </Link>

        <figure className="rounded-xl border border-[#e8e8e8] bg-white shadow-sm overflow-hidden mb-10">
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.title}
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </figure>

        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] text-[#707072] uppercase tracking-wider mb-3 font-medium">On this page</p>
              {caseStudy.sections.map((section, i) => (
                <button
                  key={section.heading}
                  onClick={() => {
                    const el = document.querySelector(`[data-section-index="${i}"]`);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block text-left w-full text-xs py-1.5 transition-colors ${
                    i === activeIndex ? "text-[#111111] font-medium" : "text-[#707072] hover:text-[#111111]"
                  }`}
                  style={i === activeIndex ? { color: accentColor } : {}}
                >
                  {section.heading}
                </button>
              ))}
            </div>
          </aside>

          <div>
            <p className="text-xs font-medium tracking-wider uppercase mb-3" style={{ color: accentColor }}>
              {caseStudy.client}
            </p>
            <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight leading-tight mb-3">
              {caseStudy.title}
            </h1>
            <p className="text-xs text-[#707072] mb-4">{tagsLine}</p>
            <div className="text-xs text-[#707072] mb-6">{readingTime}</div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 p-5 rounded-xl bg-[#f5f5f5]/50">
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

            <div className="max-w-[65ch] mb-8">
              <p className="text-[#707072] leading-relaxed">{caseStudy.description}</p>
            </div>

            {caseStudy.metric && (
              <div className="max-w-[65ch] mb-10">
                <div className="bg-white border border-[#e8e8e8] rounded-xl p-5 shadow-sm">
                  <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold" style={{ color: accentColor }}>
                    {isNumericMetric ? <><AnimatedCounter to={metricValue} />{caseStudy.metric.value.replace(/[0-9]/g, "")}</> : caseStudy.metric.value}
                  </p>
                  <p className="text-sm text-[#707072] mt-1 leading-snug">{caseStudy.metric.label}</p>
                </div>
              </div>
            )}

            <div className="space-y-16 md:space-y-20 mt-12">
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
      </div>
    </div>
  );
}
