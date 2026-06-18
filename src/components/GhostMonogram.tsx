"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function GhostMonogram() {
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<{ px: number; py: number; phase: number }[]>([]);
  const { scrollY } = useScroll();
  const { theme } = useTheme();

  const jMX = useMotionValue(0);
  const jMY = useMotionValue(0);
  const sMX = useMotionValue(0);
  const sMY = useMotionValue(0);

  const springJX = useSpring(jMX, { stiffness: 60, damping: 15 });
  const springJY = useSpring(jMY, { stiffness: 60, damping: 15 });
  const springSX = useSpring(sMX, { stiffness: 60, damping: 15 });
  const springSY = useSpring(sMY, { stiffness: 60, damping: 15 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

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

  // Generate star positions
  useEffect(() => {
    const generate = () => {
      const count = 8;
      const stars: { px: number; py: number; phase: number }[] = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          px: 0.1 + Math.random() * 0.8,
          py: 0.1 + Math.random() * 0.7,
          phase: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    };
    generate();
    window.addEventListener("resize", generate);
    return () => window.removeEventListener("resize", generate);
  }, []);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;
      const sy = scrollY.get();

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // J position: ~12vw, ~20vh
      const jBaseX = vw * 0.12;
      const jBaseY = vh * 0.20;
      // S position: ~88vw, ~80vh
      const sBaseX = vw * 0.88;
      const sBaseY = vh * 0.80;

      // Scroll drift: J moves right-down, S moves left-up
      const scrollDrift = sy * 0.03;
      const jTargetX = 0 + scrollDrift * 0.5;
      const jTargetY = 0 + scrollDrift;
      const sTargetX = 0 - scrollDrift * 0.5;
      const sTargetY = 0 - scrollDrift;

      // Mouse repulsion
      const radius = 220;

      const applyRepulsion = (baseX: number, baseY: number, driftX: number, driftY: number) => {
        const dx = mx - baseX;
        const dy = my - baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius && dist > 0) {
          const force = Math.pow((radius - dist) / radius, 1.5) * 100;
          return { x: driftX - (dx / dist) * force, y: driftY - (dy / dist) * force };
        }
        return { x: driftX, y: driftY };
      };

      const jFinal = applyRepulsion(jBaseX, jBaseY, jTargetX, jTargetY);
      const sFinal = applyRepulsion(sBaseX, sBaseY, sTargetX, sTargetY);

      jMX.set(jFinal.x);
      jMY.set(jFinal.y);
      sMX.set(sFinal.x);
      sMY.set(sFinal.y);

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

          // Fixed grid lines at low opacity
          const gridAlpha = currentIsDark ? 0.12 : 0.08;
          const lineColor = currentIsDark
            ? `rgba(51, 51, 51, ${gridAlpha})`
            : `rgba(202, 202, 203, ${gridAlpha})`;
          ctx.strokeStyle = lineColor;
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

          // Constellation mouse
          const time = performance.now() / 1000;
          const connectRadius = 200;
          const stars = starsRef.current;

          for (const star of stars) {
            const sx = star.px * w;
            const sy = star.py * h;
            const dist = Math.sqrt((mx - sx) ** 2 + (my - sy) ** 2);
            const isNear = mx >= 0 && dist < connectRadius;
            const distanceAlpha = isNear ? Math.max(0, 1 - dist / connectRadius) : 0;

            // Twinkle
            const twinkle = (Math.sin(time * 1.2 + star.phase) + 1) / 2;
            let starBrightness = 0.15 + twinkle * 0.25;
            if (isNear) {
              starBrightness = Math.max(starBrightness, 0.3 + distanceAlpha * 0.4);
            }

            // Connection line
            if (isNear && dist > 5) {
              ctx.strokeStyle = `rgba(17, 81, 255, ${distanceAlpha * 0.12})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(sx, sy);
              ctx.lineTo(mx, my);
              ctx.stroke();
            }

            // Star dot
            const starSize = isNear ? 1.5 + distanceAlpha * 1.5 : 1.5;
            ctx.fillStyle = currentIsDark
              ? `rgba(245, 245, 245, ${starBrightness})`
              : `rgba(17, 17, 17, ${starBrightness})`;
            ctx.beginPath();
            ctx.arc(sx, sy, starSize, 0, Math.PI * 2);
            ctx.fill();
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
