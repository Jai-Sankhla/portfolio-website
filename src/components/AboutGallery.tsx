"use client";

import ImageReel from "@/components/ImageReel";

const images = ["about-1", "about-3", "about-4"];

export default function AboutGallery() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-12">
      <ImageReel images={images} offsetMs={0} />
      <ImageReel images={images} offsetMs={1500} />
      <ImageReel images={images} offsetMs={3000} />
    </div>
  );
}
