"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function GhostMonogram() {
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    // Initialize asteroids
    const asteroids: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      tail: { x: number; y: number }[];
    }[] = [];

    const initAsteroids = () => {
      asteroids.length = 0;
      const w = window.innerWidth;
      for (let i = 0; i < 15; i++) {
        asteroids.push({
          x: Math.random() * w,
          y: -Math.random() * 200 - 50,
          vx: (Math.random() - 0.5) * 0.8,
          vy: 0.8 + Math.random() * 1.2,
          size: 2 + Math.random() * 3,
          tail: [],
        });
      }
    };

    initAsteroids();
    window.addEventListener("resize", initAsteroids);

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

          // Falling asteroids
          for (const a of asteroids) {
            // Gravity well toward cursor
            if (mx >= 0 && my >= 0) {
              const dx = mx - a.x;
              const dy = my - a.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 300 && dist > 0) {
                const force = ((300 - dist) / 300) * 0.3;
                a.vx += (dx / dist) * force;
                a.vy += (dy / dist) * force;
              }
            }

            // Damping
            a.vx *= 0.98;
            a.vy *= 0.98;
            a.vy += 0.02;

            a.x += a.vx;
            a.y += a.vy;

            // Update tail
            a.tail.push({ x: a.x, y: a.y });
            if (a.tail.length > 6) a.tail.shift();

            // Wrap around when off-screen
            if (a.y > h + 50) {
              a.x = Math.random() * w;
              a.y = -Math.random() * 100 - 50;
              a.vx = (Math.random() - 0.5) * 0.8;
              a.vy = 0.8 + Math.random() * 1.2;
              a.tail = [];
            }

            // Draw tail as fading line
            if (a.tail.length > 1) {
              for (let i = 1; i < a.tail.length; i++) {
                const progress = i / a.tail.length;
                ctx.strokeStyle = `rgba(17, 81, 255, ${progress * 0.2})`;
                ctx.lineWidth = a.size * progress;
                ctx.beginPath();
                ctx.moveTo(a.tail[i - 1].x, a.tail[i - 1].y);
                ctx.lineTo(a.tail[i].x, a.tail[i].y);
                ctx.stroke();
              }
            }

            // Draw head
            const headAlpha = currentIsDark ? 0.5 : 0.35;
            ctx.fillStyle = `rgba(17, 81, 255, ${headAlpha})`;
            ctx.beginPath();
            ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2);
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
