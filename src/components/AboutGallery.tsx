"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

const images: { name: string; aspect: string }[] = [
  { name: "about-1", aspect: "1/1" },
  { name: "about-2", aspect: "1/1" },
  { name: "about-3", aspect: "1/1" },
  { name: "about-4", aspect: "1/1" },
  { name: "about-5", aspect: "3/4" },
  { name: "about-6", aspect: "16/9" },
  { name: "about-7", aspect: "1/1" },
  { name: "about-8", aspect: "1/1" },
  { name: "about-9", aspect: "1/1" },
  { name: "about-10", aspect: "1/1" },
  { name: "about-11", aspect: "1/1" },
];

export default function AboutGallery() {
  return (
    <div
      className="relative mb-12 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-4 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={`${img.name}-${i}`}
            className="relative w-[280px] sm:w-[320px] rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#151515] flex-shrink-0"
            style={{ aspectRatio: img.aspect }}
          >
            <Image
              src={`/images/${img.name}.jpeg`}
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
    </div>
  );
}
