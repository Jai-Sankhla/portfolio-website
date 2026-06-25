"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Timeline from "@/components/Timeline";
import AboutGallery from "@/components/AboutGallery";
import { recommendations } from "@/data/recommendations";
import { site } from "@/data/site";
import { BLUR_DATA_URL } from "@/lib/images";

const tools = [
  "Figma", "Miro", "Photoshop", "Notion", "Framer",
  "Marvel", "Lovable", "Jitter", "Whimsical", "Uizard",
  "Maze", "Hotjar", "FigJam", "Replit",
];

const phases = [
  {
    phase: "Research",
    color: "#1151ff",
    items: [
      { name: "User Research", desc: "Uncover user needs to shape better decisions." },
      { name: "UX Strategy", desc: "Align design with business goals and user needs." },
      { name: "Information Architecture", desc: "Organize content for effortless findability." },
    ],
  },
  {
    phase: "Design",
    color: "#059669",
    items: [
      { name: "Wireframing", desc: "Visualize structure and key interactions." },
      { name: "Prototyping", desc: "Test ideas with realistic, interactive experiences." },
      { name: "Visual Design", desc: "Create polished, engaging interfaces." },
    ],
  },
  {
    phase: "Build",
    color: "#8b5cf6",
    items: [
      { name: "Design System", desc: "Build unified languages for cross-product consistency." },
      { name: "Responsive Design", desc: "Ensure quality across every device." },
      { name: "Vibe Coding", desc: "Blend design intuition with AI-assisted rapid prototyping." },
    ],
  },
  {
    phase: "Ship",
    color: "#d97706",
    items: [
      { name: "Conversion Optimization", desc: "Design data-driven interfaces that perform." },
      { name: "Analytics & Iteration", desc: "Monitor, measure, and refine products post-launch." },
      { name: "Production Environments", desc: "Design within engineering constraints — accessible, performant, scalable." },
    ],
  },
];

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateScroll, 400);
  };

  return (
    <div className="pt-28 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6">
            About me
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-[240px_1fr] gap-8 mb-12">
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-square w-full max-w-[240px] rounded-xl overflow-hidden bg-[#f5f5f5]">
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
                What started as a curiosity for design slowly turned into a
                career built around solving real problems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[#707072] leading-relaxed mb-4">
                From graduating as a University Gold Medalist to leading
                product design for startups and global brands, I&apos;ve spent
                the last few years designing experiences across healthcare, AI,
                and e-commerce. Today, I&apos;m most interested in creating
                products that balance business goals with genuine user
                needs — and I&apos;m still learning something new with every
                project.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
                <button
                  onClick={() => { navigator.clipboard.writeText(site.email); }}
                  className="text-sm text-[#111111] underline underline-offset-4 decoration-[#cacacb] hover:decoration-[#1151ff] transition-all tracking-hover cursor-pointer"
                >
                  {site.email}
                </button>
            </ScrollReveal>
          </div>
        </div>

        <div className="mb-9 md:mb-12">
          <ScrollReveal delay={0.3}>
            <AboutGallery />
          </ScrollReveal>
        </div>

        <section className="mb-9 md:mb-12">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-8">
              Experience
            </h2>
          </ScrollReveal>
          <Timeline />
        </section>

        <section className="mb-9 md:mb-12 pt-12 border-t border-[#f5f5f5]">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6">
              Tools &amp; toolkit
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool} delay={i * 0.03}>
                <span className="text-sm px-3 py-1.5 rounded-full bg-[#f5f5f5]/50 border border-[#cacacb] hover:border-[#1151ff] transition-colors inline-flex items-center gap-2">
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

        <section className="mb-9 md:mb-12 pt-12 border-t border-[#f5f5f5]">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-2">
              Capabilities
            </h2>
            <p className="text-sm text-[#707072] mb-8">
              End-to-end product building — from research through shipping and beyond.
            </p>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-3">
            {phases.map((phase, pi) => (
              <div key={phase.phase} className="flex-1 flex flex-col">
                <ScrollReveal delay={pi * 0.1} className="flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: phase.color }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: phase.color }}>
                      {phase.phase}
                    </span>
                    {pi < phases.length - 1 && (
                      <span className="hidden md:block text-[#cacacb] flex-1 text-right text-lg font-light">→</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    {phase.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex-1 p-3 rounded-lg bg-[#f5f5f5]/50 border border-[#cacacb] hover:border-[#1151ff] transition-colors"
                      >
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-[#707072] mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-12 border-t border-[#f5f5f5]">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-8">
              Recommendations
            </h2>
          </ScrollReveal>

          {/* Mobile: horizontal scroll with chevrons */}
          <div className="relative md:hidden">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                aria-label="Scroll left"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center"
                aria-label="Scroll right"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
            <div
              ref={scrollRef}
              onScroll={updateScroll}
              className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
            >
              {recommendations.map((rec, i) => (
                <div key={rec.name} className="min-w-[85vw] snap-center">
                  <RecommendationCard rec={rec} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 2-column grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="p-6 rounded-xl bg-[#f5f5f5]/50 border border-[#cacacb] hover:border-[#1151ff] transition-colors"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#cacacb]">
          <Image
            src={rec.avatar}
            alt={rec.name}
            width={44}
            height={44}
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
    </motion.div>
  );
}
