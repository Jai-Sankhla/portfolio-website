"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";
import { BLUR_DATA_URL } from "@/lib/images";
import { useMousePosition } from "@/hooks/useMousePosition";

const tools = [
  "Figma", "Miro", "Photoshop", "Notion", "Framer",
  "Marvel", "Lovable", "Jitter", "Whimsical", "Uizard",
  "Maze", "Hotjar", "FigJam", "Replit",
];

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
  const mouse = useMousePosition();
  const cx = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const cy = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const dx = mouse.x - cx;
  const dy = mouse.y - cy;

  const badgeDepth = [0.02, 0.04, 0.03, 0.05];

  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center pt-20 md:pt-48 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #111111 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-[22%] left-6 hidden lg:block"
      >
        <motion.div
          className="flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-[#f0f0f0] shadow-sm"
          style={{ x: dx * badgeDepth[0], y: dy * badgeDepth[0] }}
        >
          <span className="text-[#707072]">📍 Based in India</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute bottom-[25%] left-8 hidden lg:block"
      >
        <motion.div
          className="flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-[#f0f0f0] shadow-sm"
          style={{ x: dx * badgeDepth[1], y: dy * badgeDepth[1] }}
        >
          <span className="font-medium text-[#111111]">💼 3 Years</span>
          <span className="text-[#707072]">of Experience</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute top-[22%] right-6 hidden lg:block"
      >
        <motion.div
          className="flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-full border border-[#f0f0f0] shadow-sm"
          style={{ x: dx * badgeDepth[2], y: dy * badgeDepth[2] }}
        >
          <span className="text-[#707072]">🎓 10kdesigners Cohort</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-[25%] right-8 hidden lg:block"
      >
        <motion.div
          className="flex items-center gap-1.5 text-xs bg-[#059669]/10 px-3 py-1.5 rounded-full border border-[#059669]/30 shadow-sm"
          style={{ x: dx * badgeDepth[3], y: dy * badgeDepth[3] }}
        >
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="font-medium text-[#059669]">Open for new roles and projects</span>
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
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
              className="text-[#707072] mt-6 leading-relaxed max-w-md"
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
                className="inline-flex px-6 py-3 bg-[#111111] text-[#ffffff] text-sm font-medium rounded-full hover:bg-[#1151ff] hover:text-white transition-colors"
              >
                View my work
              </a>
              <a
                href={site.resume}
                  download
                  className="inline-flex px-6 py-3 text-sm font-medium rounded-full border border-[#cacacb] hover:border-[#111111] transition-colors"
                >
                  Download resume
                </a>
            </motion.div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-[320px] sm:w-[400px] -rotate-2 bg-white p-3 pb-8 rounded-sm shadow-xl"
            >
              <div className="aspect-square w-full overflow-hidden rounded-sm bg-[#f5f5f5]">
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
            </motion.div>
          </div>
        </div>

        {/* Tool marquee */}
        <div className="mt-10 md:mt-16 overflow-hidden">
          <div className="flex items-center gap-2 text-xs text-[#707072] mb-3">
            <span className="font-medium text-[#111111]">The good stuff</span>
            <span className="w-1 h-1 rounded-full bg-[#cacacb]" />
            <span>Always adding more</span>
          </div>
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...tools, ...tools].map((tool, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm text-[#707072] whitespace-nowrap">
                <img src={`/images/tool-${tool.toLowerCase()}.svg`} alt="" className="w-4 h-4" />
                {tool}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="flex flex-col items-center gap-2 mt-6 md:mt-12"
        >
          <span className="text-xs text-[#707072]">Scroll to explore</span>
          <div className="h-8 flex items-center">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-[#707072]">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <motion.rect
                x="6" y="6" width="4" height="4" rx="2" fill="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
