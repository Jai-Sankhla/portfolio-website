"use client";

import { useState } from "react";
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
      className="p-6 rounded-xl bg-[#f5f5f5]/50 dark:bg-[#151515]/50 border border-[#f0f0f0] dark:border-[#222222] hover:border-[#1151ff] dark:hover:border-[#1151ff] transition-colors"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#cacacb] dark:bg-[#333333]">
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
  return (
    <section className="py-16 md:py-20">
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
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <RecommendationCard key={rec.name} rec={rec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
