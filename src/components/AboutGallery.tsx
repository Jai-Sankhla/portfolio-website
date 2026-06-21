"use client";

import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

const images = ["about-1", "about-3", "about-4"];

export default function AboutGallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img) => (
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
    </div>
  );
}
