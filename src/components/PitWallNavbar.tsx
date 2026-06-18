"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/data/site";

const sectors = [
  { label: "S1", name: "Work" },
  { label: "S2", name: "Profile" },
  { label: "S3", name: "Process" },
  { label: "🏁", name: "Contact" },
];

export default function PitWallNavbar() {
  const [open, setOpen] = useState(false);
  const [currentSector, setCurrentSector] = useState(0);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v < 0.15) setCurrentSector(0);
      else if (v < 0.45) setCurrentSector(1);
      else if (v < 0.70) setCurrentSector(2);
      else setCurrentSector(3);
    });
    return () => unsub();
  }, [scrollYProgress]);

  const isHome = pathname === "/";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5]/80 dark:bg-[#0D0D14]/80 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-base font-[family-name:var(--font-race)] font-semibold tracking-wider text-[#111111] dark:text-[#f5f5f5] uppercase"
        >
          {site.initials}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors relative ${
                pathname === link.href
                  ? "text-[#E10600] dark:text-[#E10600] font-medium"
                  : "text-[#8B8B9E] hover:text-[#111111] dark:hover:text-[#f5f5f5]"
              }`}
            >
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E10600]" />
              )}
              {link.label}
            </Link>
          ))}

          {isHome && (
            <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#8B8B9E] tabular-nums border-l border-[#cacacb] dark:border-[#2a2a2a] pl-6">
              {sectors.map((s, i) => (
                <span
                  key={i}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    i === currentSector
                      ? "text-[#E10600] bg-[#E10600]/10"
                      : ""
                  }`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          )}

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
            className="md:hidden bg-[#F5F5F5] dark:bg-[#1A1A28] border-t border-[#cacacb] dark:border-[#2a2a2a]"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-[#E10600]/10 text-[#E10600] font-medium"
                      : "text-[#8B8B9E] hover:text-[#111111] dark:hover:text-[#f5f5f5]"
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
