"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Beyond() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <span className="text-sm text-[#F4A259] font-medium">Beyond</span>
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mt-3 mb-6">
            Things I do beyond the screen
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-[#8A8680] leading-relaxed mb-6">
            While I spend most of my time designing digital experiences, I also
            enjoy working on side projects, exploring new tools, and staying
            curious about how things work.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-[#8A8680] leading-relaxed mb-6">
            Whether it&apos;s prototyping ideas, experimenting with design
            systems, or learning about AI-assisted workflows, I enjoy bringing
            ideas to life in ways that go beyond the screen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[#8A8680] leading-relaxed">
            I&apos;m always exploring — from physical prototyping to
            understanding how design intersects with business strategy.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
