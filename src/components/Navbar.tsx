"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-24 left-1/2 -translate-x-1/2 z-50 h-14 bg-white dark:bg-[#151515] rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center gap-6 px-4"
      >
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/avatar.jpg"
            alt={site.name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover"
          />
        </Link>

        <div className="hidden md:flex items-center gap-1.5">
          <LayoutGroup>
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm tracking-hover transition-colors ${
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5]"
                }`}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#1151ff]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </LayoutGroup>
        </div>

        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#111111] dark:text-[#f5f5f5] transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[160px] left-1/2 -translate-x-1/2 z-40 w-[240px] bg-white dark:bg-[#151515] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-2 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm rounded-lg tracking-hover transition-colors ${
                    pathname === link.href
                      ? "bg-[#1151ff] text-white font-medium"
                      : "text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2.5">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
