"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

const images = ["about-1", "about-3", "about-4"];

function Slot({ images, delay }: { images: string[]; delay: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000 + delay);
    return () => clearInterval(timer);
  }, [images.length, delay]);

  return (
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#151515]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={`/images/${images[index]}.jpeg`}
            alt=""
            fill
            className="object-cover"
            sizes="33vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function AboutGallery() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2].map((slot) => (
          <Slot key={slot} images={images} delay={slot * 500} />
        ))}
      </div>
    </div>
  );
}
