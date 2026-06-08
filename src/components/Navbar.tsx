"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-elevated"
            : "bg-transparent"
        } rounded-2xl px-4`}
      >
        <div className="flex items-center justify-between h-14">
          <a
            href="#home"
            className="relative text-base font-semibold text-[#0A0A0A] tracking-tight"
          >
            <span className="text-gradient-subtle font-[family-name:var(--font-dm-sans)]">
              JS
            </span>
            <span className="ml-1.5 text-sm text-[#737373] font-normal hidden sm:inline">
              — Product Designer
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  active === link.href.replace("#", "")
                    ? "text-[#0A0A0A] font-medium"
                    : "text-[#737373] hover:text-[#0A0A0A]"
                }`}
              >
                {active === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#F5F5F5] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-[#0A0A0A] rounded-full hover:bg-[#0A0A0A]/90 transition-all hover:scale-105"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#0A0A0A] transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden glass-strong shadow-elevated rounded-2xl mt-2 overflow-hidden"
          >
            <div className="p-3 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm rounded-xl transition-colors ${
                    active === link.href.replace("#", "")
                      ? "bg-[#F5F5F5] text-[#0A0A0A] font-medium"
                      : "text-[#737373] hover:text-[#0A0A0A] hover:bg-[#F5F5F5]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="mt-2 px-4 py-3 text-sm font-medium text-center text-white bg-[#0A0A0A] rounded-xl"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
