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

          // Draw constellation pattern
          if (mx >= 0 && my >= 0) {
            // Anchor: snap cursor to nearest grid intersection
            const anchorX = Math.round(mx / cellSize) * cellSize;
            const anchorY = Math.round(my / cellSize) * cellSize;
            const anchorCol = Math.round(mx / cellSize);
            const anchorRow = Math.round(my / cellSize);

            const constColor = currentIsDark ? "rgba(17, 81, 255, 0.20)" : "rgba(17, 81, 255, 0.12)";
            const dotColor = currentIsDark ? "rgba(17, 81, 255, 0.35)" : "rgba(17, 81, 255, 0.20)";

            // Generate candidate intersections within 3-cell radius
            const candidates: { x: number; y: number }[] = [];
            const satRadius = 3;

            for (let r = anchorRow - satRadius; r <= anchorRow + satRadius; r++) {
              for (let c = anchorCol - satRadius; c <= anchorCol + satRadius; c++) {
                if (r === anchorRow && c === anchorCol) continue;
                const dist = Math.sqrt((c - anchorCol) ** 2 + (r - anchorRow) ** 2);
                if (dist > satRadius) continue;

                const seed = (c * 73856093 + r * 19349663 + anchorCol * 13 + anchorRow * 7) & 0x7fffffff;
                const rand = ((seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
                if (rand > 0.35) continue;

                candidates.push({ x: c * cellSize, y: r * cellSize });
              }
            }

            // Pick up to 5
            const selected = candidates.slice(0, 5);

            if (selected.length > 0) {
              // Sort by angle from anchor
              selected.sort((a, b) => {
                const aa = Math.atan2(a.y - anchorY, a.x - anchorX);
                const ab = Math.atan2(b.y - anchorY, b.x - anchorX);
                return aa - ab;
              });

              // Lines from anchor to satellites
              ctx.strokeStyle = constColor;
              ctx.lineWidth = 1;
              for (const sat of selected) {
                ctx.beginPath();
                ctx.moveTo(anchorX, anchorY);
                ctx.lineTo(sat.x, sat.y);
                ctx.stroke();
              }

              // Lines between angularly adjacent satellites
              for (let i = 0; i < selected.length - 1; i++) {
                ctx.beginPath();
                ctx.moveTo(selected[i].x, selected[i].y);
                ctx.lineTo(selected[i + 1].x, selected[i + 1].y);
                ctx.stroke();
              }

              // Satellite dots
              ctx.fillStyle = dotColor;
              for (const sat of selected) {
                ctx.beginPath();
                ctx.arc(sat.x, sat.y, 3, 0, Math.PI * 2);
                ctx.fill();
              }
            }

            // Anchor dot (always drawn)
            ctx.fillStyle = currentIsDark ? "rgba(17, 81, 255, 0.45)" : "rgba(17, 81, 255, 0.30)";
            ctx.beginPath();
            ctx.arc(anchorX, anchorY, 5, 0, Math.PI * 2);
            ctx.fill();
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
