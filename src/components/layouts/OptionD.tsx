"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, CaseStudySection } from "@/data/case-studies";
import { caseStudies } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import { calculateReadingTime } from "@/lib/reading-time";
import FormattedText from "@/lib/format-text";
import CaseStudyFooter from "@/components/layouts/CaseStudyFooter";

const ACCENT = "#1151ff";
const IMAGE_SIZES = "(max-width: 768px) 100vw, 1024px";

interface Props {
  caseStudy: CaseStudy;
}

export default function OptionD({ caseStudy }: Props) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const accentColor = caseStudy.accentColor || ACCENT;
  const readingTime = calculateReadingTime(caseStudy);
  const metricValue = parseInt(caseStudy.metric.value.replace(/[^0-9]/g, ""));
  const isNumericMetric = !isNaN(metricValue);

  const tagsLine = [
    caseStudy.industry?.split(" &")[0] || caseStudy.industry,
    ...caseStudy.tags.slice(0, 2),
  ].filter(Boolean).join(" \u2022 ");

  const [activeIndex, setActiveIndex] = useState(0);

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
        <Link
          href="/work"
          className="text-sm text-[#707072] tracking-hover inline-flex items-center gap-1 mb-8 hover:text-[#111111] transition-colors"
        >
          &larr; Back
        </Link>

        <div className="w-full mb-8">
          <Image
            src={caseStudy.coverImage}
            alt={caseStudy.title}
            width={1920}
            height={1080}
            sizes={IMAGE_SIZES}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-xs md:text-sm font-medium tracking-wider uppercase mb-3" style={{ color: accentColor }}>
          {caseStudy.client}
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight leading-tight mb-2">
          {caseStudy.title}
        </h1>

        <p className="text-xs md:text-sm text-[#707072] mb-6">{tagsLine}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-[#707072] mb-8 pb-6 border-b border-[#e8e8e8]">
          <span>{caseStudy.role}</span>
          <span className="text-[#cacacb]">/</span>
          <span>{caseStudy.timeline}</span>
          <span className="text-[#cacacb]">/</span>
          <span>{caseStudy.platform}</span>
          <span className="text-[#cacacb]">/</span>
          <span>{caseStudy.client}</span>
          <span className="text-[#cacacb]">&middot;</span>
          <span>{readingTime}</span>
        </div>

        <div className="lg:grid lg:grid-cols-[180px_1fr] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <p className="text-[10px] text-[#707072] uppercase tracking-wider mb-3 font-medium">On this page</p>
              {caseStudy.sections.map((section, i) => (
                <button
                  key={section.heading}
                  onClick={() => {
                    const el = document.getElementById(`section-${i}`);
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
            {caseStudy.metric && (
          <div className="inline-flex items-baseline gap-3 mb-10 p-4 bg-[#f5f5f5]/50 rounded-lg">
            <span className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold" style={{ color: accentColor }}>
              {isNumericMetric ? <><AnimatedCounter to={metricValue} />{caseStudy.metric.value.replace(/[0-9]/g, "")}</> : caseStudy.metric.value}
            </span>
            <span className="text-sm text-[#707072]">{caseStudy.metric.label}</span>
          </div>
        )}

        <div className="space-y-14 pt-10">
          <section>
            <div className="space-y-6">
              {caseStudy.description.split("\n\n").filter(Boolean).map((p, k) => (
                <ScrollReveal key={k} delay={Math.min(k * 0.05, 0.2)}>
                  <p className="text-[#707072] leading-relaxed max-w-[72ch] mx-auto md:text-lg">
                    <FormattedText content={p} />
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </section>
          {caseStudy.sections.map((section, i) => (
            <section id={`section-${i}`} key={i}>
              {section.heading && (
                <ScrollReveal>
                  <h2
                    data-section-index={i}
                    className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6"
                  >
                    {section.heading}
                  </h2>
                </ScrollReveal>
              )}
              <div className="space-y-6">
                {section.items.map((item, j) => (
                  <ScrollReveal key={j} delay={Math.min(j * 0.05, 0.2)}>
                    <GalleryItem item={item} accentColor={accentColor} imageSizes={IMAGE_SIZES} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>
        </div>
        </div>

        <CaseStudyFooter prev={prev} next={next} />
      </div>
    </div>
  );
}

function GalleryItem({
  item,
  accentColor,
  imageSizes,
}: {
  item: CaseStudySection;
  accentColor: string;
  imageSizes: string;
}) {
  switch (item.type) {
    case "text": {
      const paragraphs = item.content!.split("\n\n").filter(Boolean);
      return (
        <>
          {paragraphs.map((p, k) => (
            <p key={k} className="text-[#707072] leading-relaxed max-w-[72ch] mx-auto md:text-lg">
              <FormattedText content={p} />
            </p>
          ))}
        </>
      );
    }

    case "image":
      return (
        <div>
          <Image
            src={item.image!.src}
            alt={item.image!.alt}
            width={1920}
            height={1080}
            sizes={imageSizes}
            className="w-full h-auto"
          />
          {item.image?.caption && (
            <p className="text-xs md:text-sm text-[#707072] mt-2 leading-relaxed">{item.image.caption}</p>
          )}
        </div>
      );

    case "image-grid":
      return (
        <div className="space-y-6">
          {item.images?.map((img, k) => (
            <div key={k}>
              <Image
                src={img.src}
                alt={img.alt}
                width={1920}
                height={1080}
                sizes={imageSizes}
                className="w-full h-auto"
              />
              {img.caption && (
                <p className="text-xs md:text-sm text-[#707072] mt-2 leading-relaxed">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <div className="py-4">
          <div className="w-6 h-0.5 mb-4 rounded-full" style={{ backgroundColor: accentColor }} />
          <blockquote>
            <p className="text-lg md:text-2xl font-[family-name:var(--font-display)] italic leading-relaxed text-[#111111] max-w-[72ch] mx-auto">
              &ldquo;{item.quote}&rdquo;
            </p>
            {item.author && (
              <cite className="text-sm text-[#707072] not-italic mt-3 block">
                &mdash; {item.author}
              </cite>
            )}
          </blockquote>
        </div>
      );

    case "metrics":
      return (
        <div className="flex flex-wrap gap-6">
          {item.metrics?.map((m, k) => {
            const numVal = parseInt(m.value.replace(/[^0-9]/g, ""));
            const isNum = !isNaN(numVal);
            const suffix = m.value.replace(/[0-9]/g, "");
            return (
              <div key={k} className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold" style={{ color: accentColor }}>
                  {isNum ? <><AnimatedCounter to={numVal} />{suffix}</> : m.value}
                </span>
                <span className="text-sm text-[#707072]">{m.label}</span>
              </div>
            );
          })}
        </div>
      );

    case "embed": {
      const isVideo = item.embed!.url.includes("vimeo");
      const embedWidth = item.embed?.width;
      const embedHeight = item.embed?.height;
      return (
        <div style={embedWidth ? { maxWidth: embedWidth, margin: "0 auto" } : undefined}>
          <iframe
            src={item.embed!.url}
            title={item.embed!.title}
            className={`w-full ${!embedHeight && !isVideo ? "h-[900px]" : ""} ${isVideo ? "aspect-video" : ""}`}
            style={embedHeight && !isVideo ? { height: embedHeight } : undefined}
            allowFullScreen
            allow="autoplay; fullscreen"
          />
        </div>
      );
    }

    case "before-after":
      return <BeforeAfterSlider before={item.before!} after={item.after!} />;

    case "gif":
      return (
        <div className="w-full">
          <img
            src={item.gif!.src}
            alt={item.gif!.alt}
            className="w-full h-auto"
          />
        </div>
      );

    default:
      return null;
  }
}
