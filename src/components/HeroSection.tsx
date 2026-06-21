"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";
import MagneticWrapper from "@/components/MagneticWrapper";
import { BLUR_DATA_URL } from "@/lib/images";

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
  const { scrollY } = useScroll();
  const cueOpacity = useTransform(scrollY, [0, 100], [1, 0]);

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
              <MagneticWrapper>
                <a
                  href="/work"
                  className="inline-flex px-6 py-3 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors"
                >
                  View my work
                </a>
              </MagneticWrapper>
              <MagneticWrapper>
                <a
                  href={site.resume}
                  download
                  className="inline-flex px-6 py-3 text-sm font-medium rounded-full border border-[#cacacb] dark:border-[#333333] hover:border-[#111111] dark:hover:border-[#f5f5f5] transition-colors"
                >
                  Download resume
                </a>
              </MagneticWrapper>
            </motion.div>
          </motion.div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[320px] sm:w-[400px] -rotate-2 bg-white dark:bg-[#1a1a1a] p-3 pb-8 rounded-sm shadow-xl dark:shadow-[#000]/30">
              <div className="aspect-square w-full overflow-hidden rounded-sm bg-[#f5f5f5] dark:bg-[#151515]">
                <Image
                  src="/images/avatar.jpg"
                  alt={site.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-[family-name:var(--font-caveat)] text-[#707072]">
                {site.name} &mdash; {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#707072]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-[#707072]">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <motion.rect
                x="6" y="6" width="4" height="4" rx="2" fill="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
