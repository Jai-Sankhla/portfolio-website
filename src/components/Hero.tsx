"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

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

const staggerItem = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0"
          >
            <div className="w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden border-2 border-white shadow-multi">
              <Image
                src="/images/avatar.jpg"
                alt="Jai Sankhla"
                width={300}
                height={360}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.div variants={staggerItem(0.2)} initial="hidden" animate="visible" className="mb-3">
              <span className="inline-block px-4 py-1.5 border border-[#DEDEDE] text-xs font-semibold rounded-full text-[#545454]">
                Product Designer
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem(0.3)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl leading-tight text-black mb-4 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight"
            >
              Hi ✦ I&apos;m Jai
            </motion.h1>

            <motion.p
              variants={staggerItem(0.4)}
              initial="hidden"
              animate="visible"
              className="text-[#545454] text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              University Gold Medalist Product Designer Always curious how things can work better.
            </motion.p>

            <motion.div
              variants={staggerItem(0.5)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 mt-8 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/90 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={16} />
                Download Resume
              </a>

              <a
                href="mailto:jaisankhla0771@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#DEDEDE] bg-white text-[#545454] text-sm font-medium rounded-full hover:border-black/20 hover:text-black transition-all"
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>

            <motion.div
              variants={staggerItem(0.6)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 mt-6 text-[#828282] justify-center md:justify-start"
            >
              <a
                href="https://www.instagram.com/jai_sankhla_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors hover:scale-110 inline-block"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaisankhla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors hover:scale-110 inline-block"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://x.com/JaiSankhla2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors hover:scale-110 inline-block"
                aria-label="X / Twitter"
              >
                <XIcon size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
