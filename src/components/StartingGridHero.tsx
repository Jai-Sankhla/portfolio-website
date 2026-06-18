"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function StartingGridHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let rafId: number;

    const lines: { x: number; y: number; speed: number; opacity: number; length: number }[] = [];
    for (let i = 0; i < 30; i++) {
      lines.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: 0.5 + Math.random() * 2,
        opacity: 0.02 + Math.random() * 0.06,
        length: 20 + Math.random() * 80,
      });
    }

    const tick = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      const ctx = canvas!.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      for (const l of lines) {
        l.x -= l.speed;
        if (l.x + l.length < 0) {
          l.x = w + l.length;
          l.y = Math.random() * h;
        }
        ctx.strokeStyle = `rgba(225, 6, 0, ${l.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + l.length, l.y);
        ctx.stroke();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 md:pb-0 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm text-[#E10600] font-medium mb-4 tracking-wider uppercase"
          >
            {site.name} &mdash; {site.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-race)] font-bold tracking-tighter leading-[0.9] uppercase text-balance"
          >
            Jai Sankhla
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#8B8B9E] dark:text-[#8B8B9E] mt-4 font-[family-name:var(--font-race)] tracking-widest uppercase"
          >
            Product Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#8B8B9E] dark:text-[#8B8B9E] mt-6 leading-relaxed max-w-md text-sm"
          >
            I help teams simplify workflows, scale products, and deliver
            real-world solutions through thoughtful, user-centered design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="/work"
              className="inline-flex px-6 py-3 bg-[#E10600] text-white text-sm font-medium rounded-full hover:bg-[#B00500] transition-colors"
            >
              View my work
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex px-6 py-3 text-sm font-medium rounded-full border border-[#cacacb] dark:border-[#333333] hover:border-[#E10600] dark:hover:border-[#E10600] transition-colors"
            >
              Download resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Starting grid positions decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none overflow-hidden">
        <div className="flex justify-center gap-4 md:gap-8 opacity-[0.03] dark:opacity-[0.05]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 border-2 border-[#E10600] rounded-sm"
              style={{
                transform: `translateY(${i % 2 === 0 ? 0 : 8}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
