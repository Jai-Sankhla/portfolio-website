"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Timeline from "@/components/Timeline";
import MagneticWrapper from "@/components/MagneticWrapper";
import AboutGallery from "@/components/AboutGallery";
import { recommendations } from "@/data/recommendations";
import { site } from "@/data/site";
import { BLUR_DATA_URL } from "@/lib/images";

const tools = [
  "Figma", "Miro", "Photoshop", "Notion", "Framer",
  "Marvel", "Lovable", "Jitter", "Whimsical", "Uizard",
  "Maze", "Hotjar", "FigJam", "Replit",
];

const capabilities = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Information Architecture",
  "Responsive Design",
  "UX Strategy",
  "Conversion Optimization",
  "Visual Design",
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6">
            About me
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-[240px_1fr] gap-8 mb-12">
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-square w-full max-w-[240px] rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#151515]">
              <Image
                src="/images/avatar.jpg"
                alt={site.name}
                fill
                className="object-cover"
                sizes="240px"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.15}>
              <p className="text-[#707072] leading-relaxed mb-4">
                I&apos;m a Product Designer based in India, specializing in
                creating impactful, user-centered experiences. With a background
                in interior design and digital design, I balance form and
                function while bringing a unique perspective to every project.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[#707072] leading-relaxed mb-4">
                Though UX is my primary focus, my practice goes beyond the
                screens — exploring strategy, systems thinking, and physical
                spaces.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <MagneticWrapper>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-[#111111] dark:text-[#f5f5f5] underline underline-offset-4 decoration-[#cacacb] dark:decoration-[#333333] hover:decoration-[#1151ff] transition-all tracking-hover"
                >
                  {site.email}
                </a>
              </MagneticWrapper>
            </ScrollReveal>
          </div>
        </div>

        <div className="mb-12">
          <ScrollReveal delay={0.3}>
            <AboutGallery />
          </ScrollReveal>
        </div>

        <section className="mb-16">
          <ScrollReveal>
            <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-8">
              Experience
            </h2>
          </ScrollReveal>
          <Timeline />
        </section>

        <section className="mb-16 pt-12 border-t border-[#f5f5f5] dark:border-[#2a2a2a]">
          <ScrollReveal>
            <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6">
              Tools &amp; toolkit
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool} delay={i * 0.03}>
                <span className="text-sm px-3 py-1.5 rounded-full bg-[#f5f5f5]/50 dark:bg-[#151515]/50 border border-[#cacacb] dark:border-[#333333] hover:border-[#1151ff] dark:hover:border-[#1151ff] transition-colors inline-flex items-center gap-2">
                  <img
                    src={`/images/tool-${tool.toLowerCase()}.svg`}
                    alt=""
                    className="w-4 h-4"
                  />
                  {tool}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#f5f5f5] dark:border-[#2a2a2a]">
          <ScrollReveal>
            <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6">
              Capabilities
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap} delay={i * 0.05}>
                <div className="p-4 rounded-xl bg-[#f5f5f5]/50 dark:bg-[#151515]/50 border border-[#cacacb] dark:border-[#333333] hover:border-[#1151ff] dark:hover:border-[#1151ff] transition-colors">
                  <p className="text-sm font-medium mb-1">{cap}</p>
                  <p className="text-xs text-[#707072]">
                    {cap === "User Research" && "Uncover user needs to shape better decisions."}
                    {cap === "Wireframing" && "Visualize structure and key interactions."}
                    {cap === "Prototyping" && "Test ideas with realistic, interactive experiences."}
                    {cap === "Design System" && "Build unified languages for consistency."}
                    {cap === "Information Architecture" && "Organize content for effortless findability."}
                    {cap === "Responsive Design" && "Ensure quality across every device."}
                    {cap === "UX Strategy" && "Align design with business goals and user needs."}
                    {cap === "Conversion Optimization" && "Design data-driven interfaces that perform."}
                    {cap === "Visual Design" && "Create polished, engaging interfaces."}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="pt-12 border-t border-[#f5f5f5] dark:border-[#2a2a2a]">
          <ScrollReveal>
            <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-8">
              Recommendations
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {recommendations.map((rec, i) => (
              <RecommendationCard key={rec.name} rec={rec} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function RecommendationCard({
  rec,
  index,
}: {
  rec: { name: string; company: string; role: string; avatar: string; text: string };
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="p-6 rounded-xl bg-[#f5f5f5]/50 dark:bg-[#151515]/50 border border-[#cacacb] dark:border-[#333333] hover:border-[#1151ff] dark:hover:border-[#1151ff] transition-colors">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#cacacb] dark:bg-[#333333]">
            <Image
              src={rec.avatar}
              alt={rec.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold">{rec.name}</h3>
            <p className="text-xs text-[#707072]">
              {rec.role} &middot; {rec.company}
            </p>
          </div>
        </div>
        <div
          className={`text-sm text-[#707072] leading-relaxed whitespace-pre-line ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {rec.text}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-[#1151ff] font-medium mt-2 hover:opacity-70 transition-opacity"
        >
          {expanded ? "View less" : "View more"}
        </button>
      </div>
    </ScrollReveal>
  );
}
