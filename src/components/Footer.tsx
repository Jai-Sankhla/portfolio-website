"use client";

import { motion } from "framer-motion";

function DribbbleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.8 2.027c.283.374 2.145 2.944 3.85 6.002 3.64-1.368 5.18-3.448 5.4-3.71-1.49-1.306-3.47-2.11-5.65-2.11-1.2 0-2.34.232-3.6.818zM17.93 4.97c-.235.27-1.892 2.45-5.665 3.925.235.48.47.98.702 1.495.07.158.14.316.207.474 2.22-.146 6.892.21 7.21.23-.16-2.42-.94-4.6-2.454-6.124z" />
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

const staggerChildren = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const socialVariant = {
  hidden: { opacity: 0, x: 15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-b border-[#828282] pb-12 mb-8"
        >
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center flex-wrap gap-3">
              <motion.h2
                variants={childVariant}
                className="text-4xl md:text-6xl text-white font-[family-name:var(--font-dm-sans)] font-medium tracking-tight"
              >
                Let&apos;s
              </motion.h2>
              <motion.span
                variants={childVariant}
                className="text-4xl md:text-6xl text-white font-[family-name:var(--font-dm-sans)] font-medium tracking-tight"
              >
                design
              </motion.span>
            </div>
            <motion.p
              variants={childVariant}
              className="text-4xl md:text-6xl text-[#828282] font-[family-name:var(--font-dm-sans)] font-medium tracking-tight"
            >
              incredible work together.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10">
            <motion.div variants={childVariant}>
              <p className="text-sm text-[#828282] mb-2">Email</p>
              <a
                href="mailto:jaisankhla0771@gmail.com"
                className="text-lg md:text-xl text-white hover:opacity-70 transition-opacity"
              >
                jaisankhla0771@gmail.com
              </a>
            </motion.div>

            <motion.div variants={childVariant}>
              <p className="text-sm text-[#828282] mb-3">Social</p>
              <div className="flex items-center gap-3">
                <motion.a
                  custom={0}
                  variants={socialVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  href="https://dribbble.com/jaisankhla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition-all backdrop-blur"
                  aria-label="Dribbble"
                >
                  <DribbbleIcon size={18} />
                </motion.a>
                <motion.a
                  custom={1}
                  variants={socialVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  href="https://www.linkedin.com/in/jaisankhla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition-all backdrop-blur"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-xs text-[#828282]">Menu</p>
            <div className="flex items-center gap-4">
              <a href="#home" className="text-xs text-white hover:opacity-70 transition-opacity">Work</a>
              <a href="#projects" className="text-xs text-white hover:opacity-70 transition-opacity">Projects</a>
              <a href="#experience" className="text-xs text-white hover:opacity-70 transition-opacity">Experience</a>
              <a href="#contact" className="text-xs text-white hover:opacity-70 transition-opacity">Contact</a>
            </div>
          </div>
          <p className="text-xs text-[#828282] font-semibold">
            &copy; {new Date().getFullYear()} Jai Sankhla
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 pointer-events-none select-none overflow-hidden">
        <p
          className="text-[clamp(80px,20vw,200px)] text-white/5 font-[family-name:var(--font-dm-sans)] font-medium leading-none tracking-tight whitespace-nowrap text-center"
          style={{ letterSpacing: "-0.03em" }}
        >
          JAISANKHLA
        </p>
      </div>
    </footer>
  );
}
