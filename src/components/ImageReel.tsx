"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/images";

interface ImageReelProps {
  images: string[];
  offsetMs?: number;
}

export default function ImageReel({ images, offsetMs = 0 }: ImageReelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef(0);

  const duped = [...images, ...images, ...images];
  const itemsRef = useRef<(HTMLDivElement | null)[]>(new Array(duped.length).fill(null));

  useEffect(() => {
    const container = containerRef.current;
    const strip = stripRef.current;
    if (!container || !strip || images.length < 2) return;

    const speedPx = 0.6;
    const cycleH = images.length * container.offsetHeight;

    scrollRef.current = ((speedPx * 60 * offsetMs) / 1000) % cycleH;

    function tick() {
      if (!container || !strip) return;
      const ch = container.offsetHeight;
      if (ch === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!pausedRef.current) {
        scrollRef.current += speedPx;
        if (scrollRef.current >= cycleH) scrollRef.current = 0;
      }

      const scroll = scrollRef.current;
      strip.style.transform = `translateY(${-scroll}px)`;

      const center = scroll + ch / 2;

      for (let i = 0; i < duped.length; i++) {
        const el = itemsRef.current[i];
        if (!el) continue;

        const imageCenter = i * ch + ch / 2;
        const dist = Math.abs(imageCenter - center) / ch;

        el.style.opacity = String(Math.max(0.3, 1 - dist * 0.45));
        el.style.transform = `scale(${1 + Math.max(0, 1 - dist) * 0.05})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [images.length, offsetMs]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f5f5f5] dark:bg-[#151515]"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div
        ref={stripRef}
        className="flex flex-col will-change-transform"
      >
        {duped.map((img, i) => (
          <div
            key={`${img}-${i}`}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="relative w-full aspect-[4/3] will-change-transform"
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
    </div>
  );
}
