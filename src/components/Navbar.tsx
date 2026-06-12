"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-[family-name:var(--font-display)] font-semibold tracking-tight"
        >
          {site.initials}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#2D2D2D] dark:text-[#F0EDE8] font-medium"
                  : "text-[#8A8680] dark:text-[#8A8680] hover:text-[#2D2D2D] dark:hover:text-[#F0EDE8]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#2D2D2D] dark:text-[#F0EDE8] transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FAF8F5] dark:bg-[#1A1A1A] border-t border-[#E8E4DE] dark:border-[#2A2826]"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-[#E8E4DE] dark:bg-[#2A2826] text-[#2D2D2D] dark:text-[#F0EDE8] font-medium"
                      : "text-[#8A8680] hover:text-[#2D2D2D] dark:hover:text-[#F0EDE8]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
