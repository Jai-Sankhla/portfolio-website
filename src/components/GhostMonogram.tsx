"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function GhostMonogram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const { theme } = useTheme();

  const jMX = useMotionValue(0);
  const jMY = useMotionValue(0);
  const sMX = useMotionValue(0);
  const sMY = useMotionValue(0);

  const springJX = useSpring(jMX, { stiffness: 60, damping: 15 });
  const springJY = useSpring(jMY, { stiffness: 60, damping: 15 });
  const springSX = useSpring(sMX, { stiffness: 60, damping: 15 });
  const springSY = useSpring(sMY, { stiffness: 60, damping: 15 });

  // Canvas resize for DPR
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const sy = scrollY.get();
      const progress = scrollYProgress.get();

      // J scroll drift: move initials as page scrolls
      jMX.set(sy * 0.015);
      jMY.set(sy * 0.03);
      sMX.set(sy * -0.015);
      sMY.set(sy * -0.03);

      // Canvas grid drawing
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const w = window.innerWidth;
          const h = window.innerHeight;
          const cellSize = 80;
          const currentIsDark = theme === "dark";

          ctx.clearRect(0, 0, w, h);

          // Base grid at low fixed opacity
          const baseAlpha = currentIsDark ? 0.12 : 0.08;
          const baseColor = currentIsDark
            ? `rgba(51, 51, 51, ${baseAlpha})`
            : `rgba(202, 202, 203, ${baseAlpha})`;
          ctx.strokeStyle = baseColor;
          ctx.lineWidth = 1;

          for (let x = 0; x <= w; x += cellSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
          }
          for (let y = 0; y <= h; y += cellSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
          }

          // Scroll pulse band
          const bandHeight = h * 0.45;
          const bandCenterY = progress * h;
          const bandHalf = bandHeight / 2;
          const peakAlpha = currentIsDark ? 0.50 : 0.35;
          const yStart = Math.max(0, bandCenterY - bandHalf);
          const yEnd = Math.min(h, bandCenterY + bandHalf);

          // Vertical segments within band
          for (let x = 0; x <= w; x += cellSize) {
            const distFromCenter = Math.abs((yStart + yEnd) / 2 - bandCenterY) / bandHalf;
            const alpha = peakAlpha * (1 - distFromCenter * 0.5);
            ctx.strokeStyle = currentIsDark
              ? `rgba(51, 51, 51, ${alpha})`
              : `rgba(202, 202, 203, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(x, yStart);
            ctx.lineTo(x, yEnd);
            ctx.stroke();
          }

          // Horizontal rows within band
          for (let y = Math.floor(yStart / cellSize) * cellSize; y <= yEnd; y += cellSize) {
            const distFromCenter = Math.abs(y - bandCenterY) / bandHalf;
            const alpha = peakAlpha * (1 - distFromCenter * 0.5);
            ctx.strokeStyle = currentIsDark
              ? `rgba(51, 51, 51, ${alpha})`
              : `rgba(202, 202, 203, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [theme]);

  const isDark = theme === "dark";
  const textColor = isDark ? "rgba(245, 245, 245, 0.055)" : "rgba(17, 17, 17, 0.02)";

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full"
        style={{
          height: "100vh",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent)",
        }}
      />
      <motion.div
        className="absolute font-[family-name:var(--font-display)] font-bold select-none leading-[0.8]"
        style={{
          color: textColor,
          fontSize: "clamp(280px, 45vw, 550px)",
          left: "5%",
          top: "8%",
          x: springJX,
          y: springJY,
        }}
      >
        J
      </motion.div>
      <motion.div
        className="absolute font-[family-name:var(--font-display)] font-bold select-none leading-[0.8]"
        style={{
          color: textColor,
          fontSize: "clamp(280px, 45vw, 550px)",
          right: "5%",
          bottom: "8%",
          x: springSX,
          y: springSY,
        }}
      >
        S
      </motion.div>
    </div>
  );
}
