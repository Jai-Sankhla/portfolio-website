"use client";

import HeroSection from "@/components/HeroSection";
import ProjectStack from "@/components/ProjectStack";
import TestimonialGrid from "@/components/TestimonialGrid";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticWrapper from "@/components/MagneticWrapper";
import PageTOC from "@/components/PageTOC";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectStack />
      <div data-section-index="5">
        <TestimonialGrid />
      </div>
      <section data-section-index="6" className="py-16 md:py-20">
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
            <MagneticWrapper>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex px-8 py-3 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors"
              >
                {site.email}
              </a>
            </MagneticWrapper>
          </ScrollReveal>
        </div>
      </section>
      <PageTOC sections={[
        ...caseStudies.map(cs => ({ id: cs.slug, label: cs.title })),
        { id: "testimonials", label: "Testimonials" },
        { id: "contact", label: "Contact" },
      ]} />
    </>
  );
}
