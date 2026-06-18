"use client";

import StartingGridHero from "@/components/StartingGridHero";
import CircuitCard from "@/components/CircuitCard";
import TelemetrySection from "@/components/TelemetrySection";
import StrategySection from "@/components/StrategySection";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";
import { caseStudies } from "@/data/case-studies";

export default function Home() {
  return (
    <>
      <StartingGridHero />

      {/* Sector 1: Work */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-[10px] text-[#8B8B9E] font-medium uppercase tracking-[0.2em] flex items-center gap-3 mb-2">
              <span className="text-[#E10600] font-[family-name:var(--font-race)] text-xs">SECTOR 1</span>
              <span className="h-px flex-1 bg-[#cacacb] dark:bg-[#2a2a2a]" />
              <span className="text-[#8B8B9E]">The Garage</span>
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-race)] font-bold tracking-tight mt-2 mb-10 uppercase">
              Case Studies
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.slice(0, 6).map((project, i) => (
              <CircuitCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <a
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-[#E10600] font-medium hover:underline transition-colors"
              >
                View all projects &rarr;
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sector 2: Driver Profile */}
      <section className="border-t border-[#cacacb] dark:border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <span className="text-[10px] text-[#8B8B9E] font-medium uppercase tracking-[0.2em] flex items-center gap-3 pt-6 mb-2">
              <span className="text-[#E10600] font-[family-name:var(--font-race)] text-xs">SECTOR 2</span>
              <span className="h-px flex-1 bg-[#cacacb] dark:bg-[#2a2a2a]" />
              <span className="text-[#8B8B9E]">Driver Data</span>
            </span>
          </ScrollReveal>
        </div>
        <TelemetrySection />
      </section>

      {/* Sector 3: Process */}
      <StrategySection />

      {/* Podium: Contact CTA */}
      <section className="py-24 md:py-32 border-t border-[#cacacb] dark:border-[#2a2a2a] relative overflow-hidden">
        {/* Checkered flag pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-conic-gradient(#E10600 0% 25%, transparent 0% 50%)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-xs text-[#E10600] font-medium uppercase tracking-wider">
                🏆 Podium Position
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-race)] font-bold tracking-tight mt-3 mb-4 uppercase">
                Start Your Engine
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-sm text-[#8B8B9E] mb-8 max-w-md mx-auto">
                Have a project in mind? Let&apos;s take the checkered flag together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E10600] text-white text-sm font-medium rounded-full hover:bg-[#B00500] transition-colors shadow-lg shadow-[#E10600]/20"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1 L10 5 L14 6 L11 9 L12 13 L8 11 L4 13 L5 9 L2 6 L6 5 Z" fill="white" />
                </svg>
                {site.email}
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="text-xs text-[#8B8B9E] mt-4">
                or <a href="/contact" className="text-[#E10600] hover:underline">use the contact form</a>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
