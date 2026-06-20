"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/60 dark:bg-[#000000]/60 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-[family-name:var(--font-display)] font-semibold tracking-tight text-[#111111] dark:text-[#f5f5f5]"
        >
          {site.initials}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <LayoutGroup>
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-hover relative ${
                  pathname === link.href
                    ? "text-[#111111] dark:text-[#f5f5f5] font-medium"
                    : "text-[#9e9ea0] hover:text-[#111111] dark:hover:text-[#f5f5f5]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1151ff]"
                  />
                )}
              </Link>
            ))}
          </LayoutGroup>
          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#111111] dark:text-[#f5f5f5] transition-colors"
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
            className="md:hidden bg-[#ffffff] dark:bg-[#151515] border-t border-[#cacacb] dark:border-[#2a2a2a]"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                className={`px-4 py-3 text-sm rounded-lg tracking-hover ${
                  pathname === link.href
                    ? "bg-[#cacacb] dark:bg-[#2a2a2a] text-[#111111] dark:text-[#f5f5f5] font-medium"
                    : "text-[#9e9ea0] hover:text-[#111111] dark:hover:text-[#f5f5f5]"
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
