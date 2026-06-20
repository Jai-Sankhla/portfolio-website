"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackToTop() {
  const { scrollY } = useScroll();
  const visible = useTransform(scrollY, [400, 600], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] flex items-center justify-center shadow-lg hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors"
      style={{ opacity: visible, pointerEvents: "auto" as const }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 13V3M8 3L3 8M8 3L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  );
}
