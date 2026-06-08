"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10 mb-8">
            <motion.div variants={fadeUp} className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight leading-tight">
                Have a project?
                <br />
                <span className="text-gradient">Let&apos;s talk.</span>
              </h2>
              <p className="text-sm text-[#A3A3A3] max-w-md">
                Whether you need a product designer, UX consultant, or just want to
                bounce ideas — I&apos;m always up for a conversation.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-2">
                  Email
                </p>
                <a
                  href="mailto:jaisankhla0771@gmail.com"
                  className="text-sm text-white hover:text-[#A3A3A3] transition-colors"
                >
                  jaisankhla0771@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#737373] mb-2">
                  Social
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/jaisankhla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/JaiSankhla2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    X / Twitter
                  </a>
                  <a
                    href="https://dribbble.com/jaisankhla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    Dribbble
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-6">
              <a href="#home" className="text-xs text-[#737373] hover:text-white transition-colors">Home</a>
              <a href="#work" className="text-xs text-[#737373] hover:text-white transition-colors">Work</a>
              <a href="#experience" className="text-xs text-[#737373] hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-xs text-[#737373] hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs text-[#737373]">
                &copy; {new Date().getFullYear()} Jai Sankhla
              </p>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white"
                aria-label="Scroll to top"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 pointer-events-none select-none overflow-hidden">
        <p
          className="text-[clamp(60px,15vw,180px)] text-white/[0.02] font-[family-name:var(--font-dm-sans)] font-medium leading-none tracking-tight whitespace-nowrap text-center"
          style={{ letterSpacing: "-0.03em" }}
        >
          JAISANKHLA
        </p>
      </div>
    </footer>
  );
}
