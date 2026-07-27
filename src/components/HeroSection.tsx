"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { BLUR_DATA_URL } from "@/lib/images";

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
  const polaroidRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heatmapRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = heatmapRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, w, h);

      const g1 = ctx.createRadialGradient(w * 0.72, h * 0.4, 0, w * 0.72, h * 0.4, w * 0.35);
      g1.addColorStop(0, "rgba(255,20,0,0.12)");
      g1.addColorStop(0.25, "rgba(255,150,0,0.06)");
      g1.addColorStop(0.5, "rgba(80,200,255,0.015)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(w * 0.28, h * 0.38, 0, w * 0.28, h * 0.38, w * 0.22);
      g2.addColorStop(0, "rgba(255,80,0,0.08)");
      g2.addColorStop(0.3, "rgba(255,200,80,0.035)");
      g2.addColorStop(0.55, "rgba(100,200,255,0.012)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      const g3 = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.65);
      g3.addColorStop(0, "rgba(30,120,255,0.04)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, w, h);
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const maxTilt = 10;
    setTilt({
      x: -(mouseY / (rect.height / 2)) * maxTilt,
      y: (mouseX / (rect.width / 2)) * maxTilt,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center pt-20 md:pt-48 overflow-hidden">
      {/* Dot grid background + eye-tracking heatmap */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #111111 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
        <canvas ref={heatmapRef} className="absolute inset-0" />
      </div>

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
              className="flex items-center gap-3 mt-8"
            >
              <a
                href="/work"
                className="inline-flex px-4 sm:px-6 py-2.5 sm:py-3 bg-[#111111] text-[#ffffff] text-sm font-medium rounded-full hover:bg-[#1151ff] hover:text-white transition-colors"
              >
                View my work
              </a>
              <a
                href={site.resume}
                  download
                  className="inline-flex px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-medium rounded-full border border-[#cacacb] hover:border-[#111111] transition-colors"
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
            >
              <div
                ref={polaroidRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotate(-2deg)`,
                  transition: "transform 0.15s ease-out",
                }}
                className="relative w-[320px] sm:w-[400px] bg-white p-3 pb-8 rounded-sm shadow-xl cursor-pointer"
              >
                <div className="aspect-square w-full overflow-hidden rounded-sm bg-[#f5f5f5]">
                  <Image
                    src="/images/Jai Hero 1 Image Profile.png"
                    alt={site.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>

                {/* Post-it annotations */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.8 }}
                  className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-[#fbcfe8] rounded-sm shadow-md rotate-[-1.5deg] whitespace-nowrap relative">
                    <div className="h-1 bg-[#f5a5c9] rounded-t-sm" />
                    <div className="px-3 py-2 text-xs text-[#333333] flex items-center gap-1.5 relative">
                      <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#ef4444] ring-1 ring-white shadow-sm" />
                      💼 3 Years of Experience
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.9 }}
                  className="absolute top-1/2 -left-3 sm:-left-4 -translate-y-1/2 z-10"
                >
                  <div className="bg-[#fef08a] rounded-sm shadow-md rotate-[1.5deg] whitespace-nowrap relative">
                    <div className="h-1 bg-[#f5e15f] rounded-t-sm" />
                    <div className="px-3 py-2 text-xs text-[#333333] flex items-center gap-1.5 relative">
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#ef4444] ring-1 ring-white shadow-sm" />
                      📍 Based in India
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18, delay: 1.0 }}
                  className="absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2 z-10"
                >
                  <div className="bg-[#dbeafe] rounded-sm shadow-md rotate-[-1.5deg] whitespace-nowrap relative">
                    <div className="h-1 bg-[#c5d9f0] rounded-t-sm" />
                    <div className="px-3 py-2 text-xs text-[#333333] flex items-center gap-1.5 relative">
                      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-full bg-[#ef4444] ring-1 ring-white shadow-sm" />
                      🎓 10kdesigners Cohort
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18, delay: 1.1 }}
                  className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-[#dcfce7] rounded-sm shadow-md rotate-[1deg] whitespace-nowrap relative">
                    <div className="h-1 bg-[#c4e8cc] rounded-t-sm" />
                    <div className="px-3 py-2 text-xs text-[#059669] flex items-center gap-1.5 relative">
                      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-full bg-[#059669] ring-1 ring-white shadow-sm" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      🟢 Open to new opportunities
                    </div>
                  </div>
                </motion.div>
              </div>
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
