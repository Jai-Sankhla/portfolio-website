"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#f5f5f5] dark:bg-[#151515] hover:bg-[#cacacb] dark:hover:bg-[#333333] transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </motion.span>
    </button>
  );
}
