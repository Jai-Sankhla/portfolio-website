"use client";

import { motion } from "framer-motion";
import ParticleCanvas from "@/components/ParticleCanvas";
import { site } from "@/data/site";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const headline = "Designing products that people love to use.";

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 md:pb-0">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={wordReveal}
              className="text-sm text-[#1151ff] font-medium mb-4"
            >
              {site.name} &mdash; {site.role}
            </motion.p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-[family-name:var(--font-display)] font-semibold tracking-tight text-balance">
              {headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={wordReveal}
              className="text-[#707072] dark:text-[#707072] mt-6 leading-relaxed max-w-md"
            >
              I help teams simplify workflows, scale products, and deliver
              real-world solutions through thoughtful, user-centered design.
            </motion.p>

            <motion.div
              variants={wordReveal}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href="/work"
                className="inline-flex px-6 py-3 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors"
              >
                View my work
              </a>
              <a
                href={site.resume}
                download
                className="inline-flex px-6 py-3 text-sm font-medium rounded-full border border-[#cacacb] dark:border-[#333333] hover:border-[#111111] dark:hover:border-[#f5f5f5] transition-colors"
              >
                Download resume
              </a>
            </motion.div>
          </motion.div>

          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-[#f5f5f5] dark:bg-[#151515]">
            <ParticleCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
