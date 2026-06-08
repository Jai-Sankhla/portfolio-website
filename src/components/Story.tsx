"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const photos = [
  { src: "/images/about-1.jpeg", alt: "My workspace", x: -100, y: 0, rotate: -8, z: 0 },
  { src: "/images/about-2.webp", alt: "Designing", x: -30, y: 15, rotate: 12, z: 1 },
  { src: "/images/about-3.jpeg", alt: "Coffee and notes", x: 30, y: -10, rotate: -5, z: 2 },
  { src: "/images/about-4.jpeg", alt: "Creative studio", x: 100, y: 20, rotate: 8, z: 3 },
];

export default function Story() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] mb-6">
            My Story
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl text-[#0A0A0A] mb-10 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight"
        >
          From curiosity to craft
        </motion.h2>

        <div className="relative h-56 md:h-64 mb-8 flex items-center justify-center">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="absolute cursor-pointer group"
              style={{
                transform: `translateX(${photo.x}px) translateY(${photo.y}px) rotate(${photo.rotate}deg)`,
                zIndex: photo.z,
              }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
            >
              <div className="w-28 h-36 md:w-36 md:h-44 rounded-xl overflow-hidden border-4 border-white shadow-elevated">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={200}
                  height={260}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[10px] font-medium tracking-widest uppercase text-[#A3A3A3] mb-8"
        >
          Try hovering over the photos :)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#404040] text-base leading-relaxed"
        >
          <div className="relative">
            <p className="break-words">
              What began as a curiosity for design eventually became a career built
              around solving problems.
              <br />
              <br />
              From graduating as a University 🥇 Gold Medalist and securing the #1
              rank in my Bachelor of Design program to working with startups and
              global brands, I&apos;ve spent the last 3 years
              <AnimatePresence>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {" "}
                    refining my craft across product design, UX strategy, and
                    visual storytelling. Every project has been an opportunity to
                    learn, adapt, and deliver measurable impact.
                    <br />
                    <br />
                    I believe great design is invisible — it makes complex systems
                    feel intuitive, turns friction into flow, and helps businesses
                    grow while delighting users. Whether it&apos;s a fintech app, a
                    gamification system, or a checkout flow, I approach each
                    challenge with the same principle: understand deeply, design
                    simply, and iterate relentlessly.
                  </motion.span>
                )}
              </AnimatePresence>
            </p>
            {!expanded && (
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-[#6366F1] hover:opacity-70 transition-opacity"
          >
            {expanded ? "View less" : "View more"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
