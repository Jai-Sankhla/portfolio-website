"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

interface BeforeAfterSliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

export default function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  }, []);

  const onMouseDown = () => setIsDragging(true);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => updatePosition(e.clientX);
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-lg bg-[#f5f5f5] cursor-ew-resize"
      onMouseDown={onMouseDown}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      style={{ aspectRatio: "16/9" }}
    >
      <Image src={before.src} alt={before.alt} fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 768px" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
      <div style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }} className="absolute inset-0">
        <Image src={after.src} alt={after.alt} fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 768px" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L2 8L6 13" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 3L14 8L10 13" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-0.5 rounded pointer-events-none">Before</span>
      <span className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-0.5 rounded pointer-events-none">After</span>
    </div>
  );
}
