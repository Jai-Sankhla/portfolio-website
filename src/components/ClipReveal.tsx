"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ClipReveal({ children, className = "" }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0, 0]);
  const clipPath = useTransform(clipProgress, (v) => `inset(0 0 ${v * 100}% 0)`);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ clipPath }}>
        {children}
      </motion.div>
    </div>
  );
}
