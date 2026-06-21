"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

const images = ["about-1", "about-3", "about-4"];

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const slides = chunk(images, 3);

export default function AboutGallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (!paused && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  function goTo(index: number) {
    setCurrent(index);
  }

  return (
    <div
      className="relative mb-12 group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-4"
          >
            {slides[current].map((img) => (
              <div
                key={img}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#151515]"
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
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => goTo((current - 1 + slides.length) % slides.length)}
            className="w-8 h-8 rounded-full bg-[#f5f5f5] dark:bg-[#1a1a1a] flex items-center justify-center text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-[#111111] dark:bg-[#f5f5f5]" : "w-1.5 bg-[#cacacb] dark:bg-[#333333] hover:bg-[#707072] dark:hover:bg-[#707072]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo((current + 1) % slides.length)}
            className="w-8 h-8 rounded-full bg-[#f5f5f5] dark:bg-[#1a1a1a] flex items-center justify-center text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
