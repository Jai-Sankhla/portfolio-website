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

  /* ---- doodle drawing functions ---- */
  const doodleDefs = [
    // 0. Cursor arrow
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - s * 0.4, y + s);
      ctx.lineTo(x - s * 0.15, y + s * 0.4);
      ctx.lineTo(x - s * 0.9, y + s * 1.2);
      ctx.stroke();
    },
    // 1. Pen nib
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - s * 0.6);
      ctx.lineTo(x + s * 0.5, y + s * 0.4);
      ctx.lineTo(x, y + s * 0.6);
      ctx.lineTo(x - s * 0.5, y + s * 0.4);
      ctx.closePath();
      ctx.stroke();
    },
    // 2. Selection marquee
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.strokeRect(x - s * 0.5, y - s * 0.5, s, s);
    },
    // 3. Move cross
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.lineTo(x, y + s);
      ctx.moveTo(x - s, y);
      ctx.lineTo(x + s, y);
      ctx.stroke();
    },
    // 4. Magnifier
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.arc(x - s * 0.1, y - s * 0.1, s * 0.4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + s * 0.2, y + s * 0.2);
      ctx.lineTo(x + s * 0.6, y + s * 0.6);
      ctx.stroke();
    },
    // 5. Text cursor
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x - s * 0.12, y - s);
      ctx.lineTo(x + s * 0.12, y - s);
      ctx.moveTo(x, y - s);
      ctx.lineTo(x, y + s);
      ctx.moveTo(x - s * 0.12, y + s);
      ctx.lineTo(x + s * 0.12, y + s);
      ctx.stroke();
    },
    // 6. Star
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const px = x + Math.cos(angle) * s;
        const py = y + Math.sin(angle) * s;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    },
    // 7. Diamond
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y - s);
      ctx.lineTo(x + s, y);
      ctx.lineTo(x, y + s);
      ctx.lineTo(x - s, y);
      ctx.closePath();
      ctx.stroke();
    },
    // 8. Squiggle
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x - s, y - s * 0.3);
      ctx.bezierCurveTo(x - s * 0.5, y + s * 0.5, x + s * 0.2, y - s * 0.8, x + s * 0.7, y - s * 0.1);
      ctx.bezierCurveTo(x + s, y + s * 0.3, x + s * 0.3, y + s * 0.7, x - s * 0.5, y + s * 0.5);
      ctx.stroke();
    },
    // 9. Heart
    (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.3);
      ctx.bezierCurveTo(x - s, y - s * 0.4, x - s * 0.3, y - s, x, y - s * 0.3);
      ctx.bezierCurveTo(x + s * 0.3, y - s, x + s, y - s * 0.4, x, y + s * 0.3);
      ctx.stroke();
    },
  ];

  useEffect(() => {
    // Initialize doodles
    const doodles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      rotation: number;
      rotSpeed: number;
      phase: number;
      size: number;
      type: number;
    }[] = [];

    const initDoodles = () => {
      doodles.length = 0;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = 10;
      for (let i = 0; i < count; i++) {
        doodles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.005,
          phase: Math.random() * Math.PI * 2,
          size: 10 + Math.random() * 18,
          type: Math.floor(Math.random() * doodleDefs.length),
        });
      }
    };

    initDoodles();
    window.addEventListener("resize", initDoodles);

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

          // Floating doodles
          const time = performance.now() / 1000;
          for (const d of doodles) {
            // Cursor nudge
            if (mx >= 0 && my >= 0) {
              const dx = mx - d.x;
              const dy = my - d.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 200 && dist > 0) {
                const force = ((200 - dist) / 200) * 0.05;
                d.vx += (dx / dist) * force;
                d.vy += (dy / dist) * force;
              }
            }

            d.vx *= 0.98;
            d.vy *= 0.98;
            d.x += d.vx;
            d.y += d.vy;
            d.rotation += d.rotSpeed;

            const fade = (Math.sin(time * 0.3 + d.phase) + 1) / 2;
            const opacity = 0.15 + fade * 0.3;

            if (d.x < -100) d.x = w + 50;
            if (d.x > w + 100) d.x = -50;
            if (d.y < -100) d.y = h + 50;
            if (d.y > h + 100) d.y = -50;

            ctx.save();
            ctx.translate(d.x, d.y);
            ctx.rotate(d.rotation);
            ctx.strokeStyle = currentIsDark
              ? `rgba(245, 245, 245, ${opacity})`
              : `rgba(17, 17, 17, ${opacity})`;
            ctx.lineWidth = 1.5;
            doodleDefs[d.type](ctx, 0, 0, d.size);
            ctx.restore();
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
