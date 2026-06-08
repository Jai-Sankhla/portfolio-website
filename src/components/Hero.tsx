"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ArrowRight } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div className="absolute inset-0 bg-glow-right pointer-events-none" />

      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#EC4899]/5 to-[#6366F1]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          <motion.div variants={fadeUp} className="relative shrink-0 order-2 md:order-1">
            <div className="relative">
              <div className="w-44 h-52 md:w-56 md:h-64 rounded-2xl overflow-hidden border-2 border-white/80 shadow-elevated relative z-10">
                <Image
                  src="/images/avatar.jpg"
                  alt="Jai Sankhla"
                  width={400}
                  height={480}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/20 blur-xl -z-10" />
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl border border-[#DEDEDE] -z-10" />
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left order-1 md:order-2">
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse-glow" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#0A0A0A] mb-5 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight"
            >
              Crafting digital{" "}
              <span className="text-gradient">experiences</span>
              <br />
              that drive growth
            </motion.h1>

            <motion.p
              variants={fadeUpSlow}
              className="text-base md:text-lg text-[#737373] leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              University Gold Medalist & Product Designer specializing in
              UX strategy, design systems, and conversion optimization.
              I turn complex problems into elegant, measurable solutions.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 mt-8 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white text-sm font-medium rounded-full hover:bg-[#0A0A0A]/90 transition-all hover:scale-105 active:scale-95 shadow-elevated"
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
                <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>

              <a
                href="mailto:jaisankhla0771@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#E5E5E5] bg-white text-[#404040] text-sm font-medium rounded-full hover:border-[#6366F1]/30 hover:text-[#0A0A0A] hover:shadow-sm transition-all"
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-5 mt-8 text-[#A3A3A3] justify-center md:justify-start"
            >
              <span className="text-[11px] font-medium uppercase tracking-widest text-[#A3A3A3]">
                Social
              </span>
              <span className="w-px h-4 bg-[#E5E5E5]" />
              {[
                { Icon: InstagramIcon, href: "https://www.instagram.com/jai_sankhla_", label: "Instagram" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/jaisankhla", label: "LinkedIn" },
                { Icon: XIcon, href: "https://x.com/JaiSankhla2", label: "X / Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A3A3A3] hover:text-[#0A0A0A] transition-all hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a
            href="#work"
            className="flex flex-col items-center gap-2 text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
