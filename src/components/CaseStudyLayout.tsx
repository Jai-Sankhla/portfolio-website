"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, CaseStudySection } from "@/data/case-studies";
import { caseStudies } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import AnimatedCounter from "@/components/AnimatedCounter";
import { site } from "@/data/site";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyLayout({ caseStudy }: Props) {
  const currentIndex = caseStudies.findIndex((c) => c.slug === caseStudy.slug);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  const metricValue = parseInt(caseStudy.metric.value.replace(/[^0-9]/g, ""));
  const isNumericMetric = !isNaN(metricValue);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/work"
          className="text-sm text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors inline-flex items-center gap-1 mb-8"
        >
          &larr; Back to work
        </Link>

        <ScrollReveal>
          <ParallaxWrapper className="w-full rounded-xl bg-[#f5f5f5] dark:bg-[#151515] mb-8">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-xl"
              priority
            />
          </ParallaxWrapper>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#707072] border border-[#cacacb] dark:border-[#333333] px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-3">
            {caseStudy.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[#707072] leading-relaxed mb-8">
            {caseStudy.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 p-6 rounded-xl bg-[#f5f5f5]/50 dark:bg-[#151515]/50">
            <div>
              <span className="text-xs text-[#707072] block mb-0.5">
                Client
              </span>
              <span className="text-sm font-medium">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-xs text-[#707072] block mb-0.5">
                My Role
              </span>
              <span className="text-sm font-medium">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-xs text-[#707072] block mb-0.5">
                Industry
              </span>
              <span className="text-sm font-medium">{caseStudy.industry}</span>
            </div>
            <div>
              <span className="text-xs text-[#707072] block mb-0.5">
                Platform
              </span>
              <span className="text-sm font-medium">{caseStudy.platform}</span>
            </div>
            <div>
              <span className="text-xs text-[#707072] block mb-0.5">
                Timeline
              </span>
              <span className="text-sm font-medium">{caseStudy.timeline}</span>
            </div>
          </div>
        </ScrollReveal>

        {caseStudy.metric && (
          <ScrollReveal delay={0.3}>
            <div className="mb-10 p-8 rounded-xl bg-[#1151ff]/10 dark:bg-[#1151ff]/5 border border-[#1151ff]/20">
              <p className="text-xs text-[#707072] mb-2">
                Key Impact
              </p>
              <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[#1151ff]">
                {isNumericMetric ? (
                  <>
                    <AnimatedCounter to={metricValue} />
                    {caseStudy.metric.value.replace(/[0-9]/g, "")}
                  </>
                ) : (
                  caseStudy.metric.value
                )}
              </p>
              <p className="text-sm text-[#707072] mt-1">
                {caseStudy.metric.label}
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className="space-y-16">
          {caseStudy.sections.map((section, i) => (
            <section key={i}>
              <ScrollReveal>
                <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6">
                  {section.heading}
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {section.items.map((item, j) => (
                  <ScrollReveal key={j} delay={Math.min(j * 0.05, 0.2)}>
                    <SectionRenderer item={item} />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-[#f5f5f5] dark:border-[#2a2a2a]">
          <div className="flex justify-between items-center">
            <div>
              {prev && (
                <Link
                  href={`/work/${prev.slug}`}
                  className="group text-left"
                >
                  <span className="text-xs text-[#707072]">
                    Previous project
                  </span>
                  <p className="text-sm font-medium group-hover:text-[#1151ff] transition-colors">
                    {prev.title}
                  </p>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link
                  href={`/work/${next.slug}`}
                  className="group text-right"
                >
                  <span className="text-xs text-[#707072]">
                    Next project
                  </span>
                  <p className="text-sm font-medium group-hover:text-[#1151ff] transition-colors">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#f5f5f5] dark:border-[#2a2a2a] text-center">
          <p className="text-[#707072] mb-4">
            Interested in working together?
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex px-6 py-3 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionRenderer({ item }: { item: CaseStudySection }) {
  switch (item.type) {
    case "text":
      return <p className="text-[#707072] leading-relaxed">{item.content}</p>;

    case "image":
      return (
        <div>
          <ParallaxWrapper className="w-full rounded-lg bg-[#f5f5f5] dark:bg-[#151515]">
            <Image
              src={item.image!.src}
              alt={item.image!.alt}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto rounded-lg"
            />
          </ParallaxWrapper>
          {item.image?.caption && (
            <p className="text-xs text-[#707072] mt-2 leading-relaxed">
              {item.image.caption}
            </p>
          )}
        </div>
      );

    case "image-grid":
      return (
        <div className="space-y-4">
          {item.images?.map((img, k) => (
            <div key={k}>
              <ParallaxWrapper className="w-full rounded-lg bg-[#f5f5f5] dark:bg-[#151515]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full h-auto rounded-lg"
                />
              </ParallaxWrapper>
              {img.caption && (
                <p className="text-xs text-[#707072] mt-2 leading-relaxed">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-[#1151ff] pl-5">
          <p className="text-[#111111] dark:text-[#f5f5f5] italic leading-relaxed">
            {item.quote}
          </p>
          {item.author && (
            <footer className="text-sm text-[#707072] mt-2">
              &mdash; {item.author}
            </footer>
          )}
        </blockquote>
      );

    case "metrics":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {item.metrics?.map((m, k) => (
            <div
              key={k}
              className="p-5 rounded-xl bg-[#f5f5f5]/50 dark:bg-[#151515]/50"
            >
              <p className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold">
                {m.value}
              </p>
              <p className="text-xs text-[#707072] mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      );

    case "embed":
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#f5f5f5] dark:bg-[#151515]">
          <iframe
            src={item.embed!.url}
            title={item.embed!.title}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="autoplay; fullscreen"
          />
        </div>
      );

    default:
      return null;
  }
}
