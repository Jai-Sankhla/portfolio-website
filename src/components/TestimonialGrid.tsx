"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { recommendations } from "@/data/recommendations";
import { BLUR_DATA_URL } from "@/lib/images";

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
      className="p-6 rounded-xl bg-[#f5f5f5]/50 border border-[#f0f0f0] hover:border-[#1151ff] transition-colors select-none"
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

export default function TestimonialGrid() {
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
    <section className="pb-9 md:pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="text-sm text-[#1151ff] font-medium">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mt-2">
            What people say
          </h2>
        </motion.div>

        {/* Desktop: unchanged grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <RecommendationCard key={rec.name} rec={rec} index={i} />
          ))}
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <div className="md:hidden relative">
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
            className="flex overflow-x-auto snap-x snap-proximity gap-4 no-scrollbar pb-2 [touch-action:pan-x] [overscroll-behavior-x:none]"
          >
            {recommendations.map((rec, i) => (
              <div key={rec.name} className="snap-center w-[85vw] shrink-0 first:ml-0 last:mr-0">
                <RecommendationCard rec={rec} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
