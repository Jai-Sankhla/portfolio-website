"use client";

import HeroSection from "@/components/HeroSection";
import ProjectStack from "@/components/ProjectStack";
import TestimonialGrid from "@/components/TestimonialGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectStack />
      <TestimonialGrid />
      <section className="py-8 md:py-14">
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
                className="inline-flex px-8 py-3 bg-[#111111] text-[#ffffff] text-sm font-medium rounded-full hover:bg-[#1151ff] hover:text-white transition-colors"
              >
                {site.email}
              </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
