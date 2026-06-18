"use client";

import HeroSection from "@/components/HeroSection";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HorizontalScroll />

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <ScrollReveal>
              <span className="text-sm text-[#1151ff] font-medium">
                About me
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mt-3 mb-5">
                Turning complex problems into simple, beautiful experiences.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[#707072] leading-relaxed mb-6">
                I&apos;m a Product Designer with experience across fintech,
                health, and e-commerce. I specialize in end-to-end product
                design — from user research and wireframing to polished
                interfaces and design systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="/about"
                className="text-sm text-[#111111] dark:text-[#f5f5f5] underline underline-offset-4 decoration-[#cacacb] dark:decoration-[#333333] hover:decoration-[#1151ff] transition-all"
              >
                More about me &rarr;
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-[#f5f5f5] dark:border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4">
              Let&apos;s work together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#707072] mb-8 max-w-md">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex px-8 py-3 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors"
            >
              {site.email}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
