"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

function AnimatedText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + (wi * 0.08 + ci * 0.03),
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

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

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #224D0F 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -3, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="w-40 h-48 md:w-52 md:h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/avatar.jpg"
                alt="Jai Sankhla"
                width={300}
                height={360}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-[#224D0F]/10 -z-10 rotate-3" />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <span className="inline-block px-3 py-1 bg-[#E2FCCA] text-[#224D0F] text-xs font-semibold rounded-full mb-3">
                Product Designer
              </span>
            </motion.div>

            <h1 className="font-serif text-3xl md:text-5xl leading-tight text-[#060F15] mb-4">
              <AnimatedText
                text="Hey there, I'm Jai"
                className="font-serif"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[#5E6673] text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              <AnimatedText
                text="University Gold Medalist Product Designer Always curious how things can work better."
                className="text-base"
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-4 mt-8 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#224D0F] text-white text-sm font-medium rounded-full hover:bg-[#1a3d0c] transition-all hover:scale-105 active:scale-95"
              >
                <Download size={16} />
                Download Resume
              </a>

              <a
                href="mailto:jaisankhla0771@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#e5e5e2] text-[#5E6673] text-sm font-medium rounded-full hover:bg-white hover:border-[#224D0F]/20 hover:text-[#224D0F] transition-all"
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex items-center gap-5 mt-6 text-[#5E6673] justify-center md:justify-start"
            >
              <a
                href="https://www.instagram.com/jai_sankhla_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#224D0F] transition-colors hover:scale-110 inline-block"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaisankhla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#224D0F] transition-colors hover:scale-110 inline-block"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://x.com/JaiSankhla2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#224D0F] transition-colors hover:scale-110 inline-block"
                aria-label="X / Twitter"
              >
                <XIcon size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
