"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy, CaseStudySection } from "@/data/case-studies";
import { caseStudies } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
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
          className="text-sm text-[#8A8680] hover:text-[#2D2D2D] dark:hover:text-[#F0EDE8] transition-colors inline-flex items-center gap-1 mb-8"
        >
          &larr; Back to work
        </Link>

        <ScrollReveal>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl bg-[#E8E4DE] dark:bg-[#2A2826] mb-8">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#8A8680] border border-[#D4D0CA] dark:border-[#3A3836] px-2.5 py-0.5 rounded-full"
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
          <p className="text-[#8A8680] leading-relaxed mb-8">
            {caseStudy.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 p-6 rounded-xl bg-[#E8E4DE]/50 dark:bg-[#2A2826]/50">
            <div>
              <span className="text-xs text-[#8A8680] block mb-0.5">
                Client
              </span>
              <span className="text-sm font-medium">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-xs text-[#8A8680] block mb-0.5">
                My Role
              </span>
              <span className="text-sm font-medium">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-xs text-[#8A8680] block mb-0.5">
                Industry
              </span>
              <span className="text-sm font-medium">{caseStudy.industry}</span>
            </div>
            <div>
              <span className="text-xs text-[#8A8680] block mb-0.5">
                Platform
              </span>
              <span className="text-sm font-medium">{caseStudy.platform}</span>
            </div>
            <div>
              <span className="text-xs text-[#8A8680] block mb-0.5">
                Timeline
              </span>
              <span className="text-sm font-medium">{caseStudy.timeline}</span>
            </div>
          </div>
        </ScrollReveal>

        {caseStudy.metric && (
          <ScrollReveal delay={0.3}>
            <div className="mb-10 p-8 rounded-xl bg-[#F4A259]/10 dark:bg-[#F4A259]/5 border border-[#F4A259]/20">
              <p className="text-xs text-[#8A8680] mb-2">
                Key Impact
              </p>
              <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[#F4A259]">
                {isNumericMetric ? (
                  <>
                    <AnimatedCounter to={metricValue} />
                    {caseStudy.metric.value.replace(/[0-9]/g, "")}
                  </>
                ) : (
                  caseStudy.metric.value
                )}
              </p>
              <p className="text-sm text-[#8A8680] mt-1">
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

        <div className="mt-16 pt-12 border-t border-[#E8E4DE] dark:border-[#2A2826]">
          <div className="flex justify-between items-center">
            <div>
              {prev && (
                <Link
                  href={`/work/${prev.slug}`}
                  className="group text-left"
                >
                  <span className="text-xs text-[#8A8680]">
                    Previous project
                  </span>
                  <p className="text-sm font-medium group-hover:text-[#F4A259] transition-colors">
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
                  <span className="text-xs text-[#8A8680]">
                    Next project
                  </span>
                  <p className="text-sm font-medium group-hover:text-[#F4A259] transition-colors">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#E8E4DE] dark:border-[#2A2826] text-center">
          <p className="text-[#8A8680] mb-4">
            Interested in working together?
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex px-6 py-3 bg-[#2D2D2D] dark:bg-[#F0EDE8] text-[#FAF8F5] dark:text-[#1A1A1A] text-sm font-medium rounded-full hover:bg-[#F4A259] dark:hover:bg-[#F4A259] transition-colors"
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
      return <p className="text-[#8A8680] leading-relaxed">{item.content}</p>;

    case "image":
      return (
        <div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#E8E4DE] dark:bg-[#2A2826]">
            <Image
              src={item.image!.src}
              alt={item.image!.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          {item.image?.caption && (
            <p className="text-xs text-[#8A8680] mt-2 leading-relaxed">
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
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#E8E4DE] dark:bg-[#2A2826]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              {img.caption && (
                <p className="text-xs text-[#8A8680] mt-2 leading-relaxed">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-[#F4A259] pl-5">
          <p className="text-[#2D2D2D] dark:text-[#F0EDE8] italic leading-relaxed">
            {item.quote}
          </p>
          {item.author && (
            <footer className="text-sm text-[#8A8680] mt-2">
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
              className="p-5 rounded-xl bg-[#E8E4DE]/50 dark:bg-[#2A2826]/50"
            >
              <p className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold">
                {m.value}
              </p>
              <p className="text-xs text-[#8A8680] mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      );

    case "embed":
      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#E8E4DE] dark:bg-[#2A2826]">
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
