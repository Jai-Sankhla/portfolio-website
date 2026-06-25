"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/80 backdrop-blur-lg border-b border-[#f0f0f0] md:hidden flex items-center justify-between px-6"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#111111]"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-sm font-semibold tracking-tight text-[#111111]">
            JS
          </Link>
        </div>
        <a
          href={site.resume}
          download
          className="text-[#707072] hover:text-[#111111] transition-colors"
          aria-label="Download resume"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </motion.div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 md:top-24 left-1/2 -translate-x-1/2 z-50 h-14 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] hidden md:flex items-center gap-6 px-4"
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

        <div className="flex items-center gap-1.5">
          <LayoutGroup>
            {site.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-sm tracking-hover transition-colors ${
                  pathname === link.href
                    ? "text-white font-medium"
                    : "text-[#707072] hover:text-[#111111]"
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

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            download
            className="text-sm text-[#707072] hover:text-[#111111] tracking-hover transition-colors flex items-center gap-1.5"
          >
            Resume
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center gap-3 px-6 pt-16 pb-4">
                <Image
                  src="/images/avatar.jpg"
                  alt={site.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{site.name}</p>
                  <p className="text-xs text-[#707072]">{site.role}</p>
                </div>
              </div>

              <hr className="border-[#f0f0f0] mx-6" />

              <div className="flex flex-col gap-1 px-3 py-4 flex-1">
                {site.nav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-3 text-sm rounded-lg transition-colors ${
                      pathname === link.href
                        ? "bg-[#1151ff] text-white font-medium"
                        : "text-[#707072] hover:text-[#111111] hover:bg-[#f5f5f5]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <hr className="border-[#f0f0f0] mx-6" />

              <div className="px-3 py-4">
                <a
                  href={site.resume}
                  download
                  className="flex items-center gap-2 px-3 py-3 text-sm rounded-lg text-[#707072] hover:text-[#111111] hover:bg-[#f5f5f5] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume
                </a>
              </div>

              <hr className="border-[#f0f0f0] mx-6" />

              <div className="px-3 pt-4 pb-8">
                <button
                  onClick={() => { navigator.clipboard.writeText(site.email); }}
                  className="flex items-center gap-2 px-3 py-3 text-sm rounded-lg text-[#707072] hover:text-[#111111] hover:bg-[#f5f5f5] transition-colors w-full text-left"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 7L2 7" />
                  </svg>
                  {site.email}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
