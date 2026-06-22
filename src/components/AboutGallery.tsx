"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

const images = ["about-1", "about-2", "about-3", "about-4", "about-5", "about-6", "about-7", "about-8", "about-9", "about-10", "about-11"];

export default function AboutGallery() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mb-12 overflow-hidden group"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-4 w-max items-center"
        animate={paused ? { x: 0 } : { x: ["0%", "-50%"] }}
        transition={paused
          ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
          : { duration: 40, repeat: Infinity, ease: "linear" }
        }
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="relative w-[280px] sm:w-[320px] aspect-square rounded-xl overflow-hidden bg-[#f5f5f5] flex-shrink-0"
          >
            <Image
              src={`/images/${img}.jpeg`}
              alt=""
              fill
              className="object-cover"
              sizes="33vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        ))}
      </motion.div>

      <button
        onClick={() => setPaused(!paused)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label={paused ? "Play" : "Pause"}
      >
        {paused ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#111111">
            <polygon points="8,5 19,12 8,19" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#111111">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        )}
      </button>
    </div>
  );
}
