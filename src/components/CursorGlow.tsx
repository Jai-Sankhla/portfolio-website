"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Confetto {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  life: number;
  maxLife: number;
  color: string;
  wobbleSpeed: number;
  wobblePhase: number;
  wobbleAmount: number;
  fadeOut?: number;
}

const COLORS = [
  "#93c5fd",
  "#fcd34d",
  "#f9a8d4",
  "#c4b5fd",
  "#fca5a5",
  "#a7f3d0",
  "#fed7aa",
  "#ffffff",
];

const MAX = 150;

function drawConfetto(ctx: CanvasRenderingContext2D, c: Confetto) {
  const progress = c.life / c.maxLife;
  const opacity = (1 - progress * progress) * (c.fadeOut ?? 1);

  ctx.save();
  ctx.translate(c.x, c.y);
  ctx.rotate(c.rotation);
  ctx.globalAlpha = Math.max(opacity, 0);
  ctx.fillStyle = c.color;
  ctx.fillRect(-c.width / 2, -c.height / 2, c.width, c.height);
  ctx.restore();
}

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default function SparkleTrail() {
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<Confetto[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, prevX: -100, prevY: -100, lastActiveTime: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    if (isCaseStudy) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const m = mouseRef.current;
      m.prevX = m.x;
      m.prevY = m.y;
      m.x = e.clientX;
      m.y = e.clientY;
      m.lastActiveTime = performance.now();
    };

    const handleClick = (e: MouseEvent) => {
      const count = 20 + Math.floor(Math.random() * 16);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        confettiRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed * (0.5 + Math.random() * 0.5),
          vy: Math.sin(angle) * speed * (0.5 + Math.random() * 0.5) - 0.5,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          width: Math.random() * 6 + 6,
          height: Math.random() * 4 + 4,
          life: 0,
          maxLife: 100 + Math.random() * 60,
          color: randomColor(),
          wobbleSpeed: 0.02 + Math.random() * 0.02,
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleAmount: Math.random() * 0.2 + 0.1,
        });
      }

      if (confettiRef.current.length > MAX) {
        confettiRef.current = confettiRef.current.slice(-MAX);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick);

    const spawn = (dx: number, dy: number, speed: number) => {
      if (speed < 0.5) return;
      const m = mouseRef.current;
      const count = Math.min(Math.floor(speed / 2) + 1, 4);
      const angle = Math.atan2(dy, dx);

      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * Math.PI * 0.6;
        const dir = angle + Math.PI + spread;
        const launchSpeed = Math.random() * 0.6 + 0.3;

        confettiRef.current.push({
          x: m.x + (Math.random() - 0.5) * 4,
          y: m.y + (Math.random() - 0.5) * 4,
          vx: Math.cos(dir) * launchSpeed,
          vy: Math.sin(dir) * launchSpeed * 0.6 + 0.2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          width: Math.random() * 6 + 6,
          height: Math.random() * 4 + 4,
          life: 0,
          maxLife: 90 + Math.random() * 50,
          color: randomColor(),
          wobbleSpeed: 0.02 + Math.random() * 0.02,
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleAmount: Math.random() * 0.2 + 0.1,
        });
      }

      if (confettiRef.current.length > MAX) {
        confettiRef.current = confettiRef.current.slice(-MAX);
      }
    };

    let lastSpawn = 0;
    let frame = 0;

    const animate = (time: number) => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      const m = mouseRef.current;
      const dx = m.x - m.prevX;
      const dy = m.y - m.prevY;
      m.prevX = m.x;
      m.prevY = m.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const timeSinceMove = time - m.lastActiveTime;

      if (timeSinceMove < 200 && time - lastSpawn > 25) {
        spawn(dx, dy, speed);
        lastSpawn = time;
      }

      const confetti = confettiRef.current;

      if (timeSinceMove >= 200) {
        for (let i = 0; i < confetti.length; i++) {
          const c = confetti[i];
          if (c.fadeOut === undefined) c.fadeOut = 1;
        }
      }

      for (let i = confetti.length - 1; i >= 0; i--) {
        const c = confetti[i];
        c.life++;

        c.vy += 0.0015;
        c.vx +=
          Math.sin(frame * c.wobbleSpeed + c.wobblePhase) *
          c.wobbleAmount *
          0.03;
        c.rotation += c.rotationSpeed;
        c.x += c.vx;
        c.y += c.vy;

        if (c.fadeOut !== undefined) {
          c.fadeOut -= 0.008;
          if (c.fadeOut <= 0) {
            confetti.splice(i, 1);
            continue;
          }
        }

        if (c.life >= c.maxLife) {
          confetti.splice(i, 1);
          continue;
        }

        drawConfetto(ctx!, c);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isCaseStudy]);

  if (isCaseStudy) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
    />
  );
}
