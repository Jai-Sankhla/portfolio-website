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
          const lineColor = currentIsDark ? "rgba(51, 51, 51, 0.25)" : "rgba(202, 202, 203, 0.35)";

          ctx.clearRect(0, 0, w, h);

          // Draw colorful confetti cell highlights under cursor
          if (mx >= 0 && my >= 0) {
            const col = Math.floor(mx / cellSize);
            const row = Math.floor(my / cellSize);
            const glowRadius = 4;

            for (let r = row - glowRadius; r <= row + glowRadius; r++) {
              for (let c = col - glowRadius; c <= col + glowRadius; c++) {
                const cx = c * cellSize;
                const cy = r * cellSize;
                const dist = Math.sqrt((c - col) ** 2 + (r - row) ** 2);
                if (dist > glowRadius) continue;

                // Seeded pseudo-random for scattered pattern
                const seed = (c * 73856093 + r * 19349663) & 0x7fffffff;
                const rand = ((seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
                if (rand > 0.45) continue;

                // Color: angle from cursor determines hue (blue → purple → pink → magenta)
                const cellCenterX = cx + cellSize / 2;
                const cellCenterY = cy + cellSize / 2;
                const angle = Math.atan2(cellCenterY - my, cellCenterX - mx);
                const degrees = ((angle * 180) / Math.PI + 360) % 360;
                const hue = 200 + (degrees / 360) * 140;
                const hueJitter = rand * 40 - 20;
                const finalHue = ((hue + hueJitter) % 360 + 360) % 360;

                const alpha = currentIsDark ? 0.22 : 0.14;
                ctx.fillStyle = `hsla(${finalHue}, 80%, ${currentIsDark ? 65 : 50}%, ${alpha})`;
                ctx.fillRect(cx, cy, cellSize, cellSize);
              }
            }
          }

          // Draw grid lines
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
    <div className="fixed inset-0 pointer-events-none z-[-1] hidden md:block overflow-hidden">
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
