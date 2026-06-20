"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={() => {
        toggle();
        const btn = document.activeElement as HTMLElement;
        if (btn) btn.style.transform = "scale(0.85)";
        setTimeout(() => {
          if (btn) btn.style.transform = "";
        }, 150);
      }}
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-[#9e9ea0] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors active:scale-90"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  );
}
