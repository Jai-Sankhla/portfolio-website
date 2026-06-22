"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

const images = ["about-1", "about-2", "about-3", "about-4", "about-5", "about-6", "about-7", "about-8", "about-9", "about-10", "about-11"];

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
    </div>
  );
}
