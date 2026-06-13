"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function GhostMonogram() {
  const mousePosRef = useRef({ x: 0, y: 0 });
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

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const isDark = theme === "dark";
  const textColor = isDark ? "rgba(245, 245, 245, 0.055)" : "rgba(17, 17, 17, 0.02)";

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] hidden md:block overflow-hidden">
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
