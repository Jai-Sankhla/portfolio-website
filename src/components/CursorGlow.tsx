"use client";

import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div className="w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1151ff] opacity-[0.04] dark:opacity-[0.06]" />
    </motion.div>
  );
}
