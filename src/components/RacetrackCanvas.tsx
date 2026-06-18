"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const waypoints = [
  { x: 0.10, y: 0.82 },
  { x: 0.10, y: 0.22 },
  { x: 0.72, y: 0.18 },
  { x: 0.88, y: 0.34 },
  { x: 0.84, y: 0.66 },
  { x: 0.68, y: 0.72 },
  { x: 0.56, y: 0.60 },
  { x: 0.34, y: 0.60 },
  { x: 0.10, y: 0.82 },
];

function getSegmentLengths(pts: { x: number; y: number }[]) {
  const lens: number[] = [];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i + 1].x - pts[i].x;
    const dy = pts[i + 1].y - pts[i].y;
    const l = Math.sqrt(dx * dx + dy * dy);
    lens.push(l);
    total += l;
  }
  return { lens, total };
}

function getTrackPos(
  progress: number,
  pts: { x: number; y: number }[],
  lens: number[],
  total: number,
  w: number,
  h: number
) {
  const target = progress * total;
  let acc = 0;
  for (let i = 0; i < lens.length; i++) {
    if (acc + lens[i] >= target) {
      const t = (target - acc) / lens[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const angle = Math.atan2((p2.y - p1.y) * h, (p2.x - p1.x) * w);
      return {
        x: (p1.x + (p2.x - p1.x) * t) * w,
        y: (p1.y + (p2.y - p1.y) * t) * h,
        angle,
      };
    }
    acc += lens[i];
  }
  return { x: pts[0].x * w, y: pts[0].y * h, angle: 0 };
}

export default function RacetrackCanvas() {
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
    const { lens, total } = getSegmentLengths(waypoints);

    let rafId: number;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }[] = [];

    const tick = () => {
      const sy = scrollY.get();
      const progress = scrollYProgress.get();

      jMX.set(sy * 0.015);
      jMY.set(sy * 0.03);
      sMX.set(sy * -0.015);
      sMY.set(sy * -0.03);

      const canvas = canvasRef.current;
      if (!canvas) { rafId = requestAnimationFrame(tick); return; }
      const ctx = canvas.getContext("2d");
      if (!ctx) { rafId = requestAnimationFrame(tick); return; }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const isDark = theme === "dark";

      ctx.clearRect(0, 0, w, h);

      // Scale waypoints to viewport
      const pts = waypoints.map((p) => ({ x: p.x * w, y: p.y * h }));

      // --- Track surface ---
      ctx.save();
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
      }
      ctx.closePath();

      const trackColor = isDark ? "rgba(40, 40, 55, 0.35)" : "rgba(0, 0, 0, 0.06)";
      ctx.strokeStyle = trackColor;
      ctx.lineWidth = 56;
      ctx.stroke();

      // Track outer border
      const borderColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.10)";
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Center dashed line
      ctx.setLineDash([12, 16]);
      const centerColor = isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.05)";
      ctx.strokeStyle = centerColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      // --- Curb markings at corners ---
      const cornerIndices = [1, 3, 4, 5];
      for (const ci of cornerIndices) {
        const p = pts[ci];
        const pPrev = pts[ci === 0 ? pts.length - 2 : ci - 1];
        const pNext = pts[ci + 1];
        const angle = Math.atan2(pNext.y - pPrev.y, pNext.x - pPrev.x);
        const perpAngle = angle + Math.PI / 2;

        for (let j = -2; j <= 2; j++) {
          const offset = j * 8;
          const cx = p.x + Math.cos(perpAngle) * offset;
          const cy = p.y + Math.sin(perpAngle) * offset;
          ctx.fillStyle = j % 2 === 0 ? "#E10600" : "#ffffff";
          ctx.globalAlpha = isDark ? 0.25 : 0.15;
          ctx.fillRect(cx - 3, cy - 5, 6, 10);
        }
      }
      ctx.globalAlpha = 1;

      // --- Start/finish line ---
      const sf = pts[0];
      const sfNext = pts[1];
      const sfAngle = Math.atan2(sfNext.y - sf.y, sfNext.x - sf.x);
      const sfPerp = sfAngle + Math.PI / 2;
      for (let j = -3; j <= 3; j++) {
        const offset = j * 7;
        const sx = sf.x + Math.cos(sfPerp) * offset;
        const sy = sf.y + Math.sin(sfPerp) * offset;
        ctx.fillStyle = j % 2 === 0 ? "#ffffff" : "#111111";
        ctx.globalAlpha = isDark ? 0.30 : 0.12;
        ctx.fillRect(sx - 15, sy - 2, 30, 4);
      }
      ctx.globalAlpha = 1;

      // --- Racing car ---
      const car = getTrackPos(progress, pts, lens, total, w, h);

      // Speed particles from car
      const particleCount = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < particleCount; i++) {
        const spreadAngle = car.angle + Math.PI + (Math.random() - 0.5) * Math.PI * 0.4;
        const speed = 1 + Math.random() * 2;
        particles.push({
          x: car.x + (Math.random() - 0.5) * 10,
          y: car.y + (Math.random() - 0.5) * 10,
          vx: Math.cos(spreadAngle) * speed,
          vy: Math.sin(spreadAngle) * speed,
          life: 0,
          maxLife: 15 + Math.random() * 20,
          size: 1 + Math.random() * 2,
        });
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife) { particles.splice(i, 1); continue; }
        const alpha = 1 - p.life / p.maxLife;
        ctx.fillStyle = isDark
          ? `rgba(255, 60, 50, ${alpha * 0.4})`
          : `rgba(225, 6, 0, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      }

      // Car body
      ctx.save();
      ctx.translate(car.x, car.y);
      ctx.rotate(car.angle);

      // Car shadow
      ctx.fillStyle = isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)";
      ctx.beginPath();
      ctx.ellipse(0, 24, 8, 3, 0, 0, Math.PI * 2);
      ctx.fill();

      // Rear wing
      ctx.fillStyle = "#E10600";
      ctx.globalAlpha = isDark ? 0.7 : 0.6;
      ctx.fillRect(-12, -4, 4, 8);

      // Main body
      ctx.fillStyle = isDark ? "#f5f5f5" : "#111111";
      ctx.globalAlpha = isDark ? 0.5 : 0.3;
      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(-10, -4);
      ctx.lineTo(-10, 4);
      ctx.closePath();
      ctx.fill();

      // Front wing
      ctx.fillStyle = "#E10600";
      ctx.globalAlpha = isDark ? 0.7 : 0.6;
      ctx.fillRect(12, -5, 4, 10);

      // Wheels
      ctx.fillStyle = isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)";
      ctx.beginPath();
      ctx.ellipse(6, -5, 3, 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(6, 5, 3, 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(-4, -5, 3, 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(-4, 5, 3, 2, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.restore();

      // --- Glow ahead on track ---
      const aheadProgress = Math.min(1, progress + 0.04);
      const ahead = getTrackPos(aheadProgress, pts, lens, total, w, h);
      const grad = ctx.createRadialGradient(ahead.x, ahead.y, 0, ahead.x, ahead.y, 60);
      grad.addColorStop(0, isDark ? "rgba(225, 6, 0, 0.08)" : "rgba(225, 6, 0, 0.04)");
      grad.addColorStop(1, "rgba(225, 6, 0, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(ahead.x, ahead.y, 60, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
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
        className="absolute font-[family-name:var(--font-race)] font-bold select-none leading-[0.8] uppercase"
        style={{
          color: textColor,
          fontSize: "clamp(240px, 40vw, 480px)",
          left: "4%",
          top: "6%",
          x: springJX,
          y: springJY,
        }}
      >
        J
      </motion.div>
      <motion.div
        className="absolute font-[family-name:var(--font-race)] font-bold select-none leading-[0.8] uppercase"
        style={{
          color: textColor,
          fontSize: "clamp(240px, 40vw, 480px)",
          right: "4%",
          bottom: "6%",
          x: springSX,
          y: springSY,
        }}
      >
        S
      </motion.div>
    </div>
  );
}
