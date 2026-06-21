"use client";

import { useState, useEffect } from "react";

interface PageTOCSection {
  id: string;
  label: string;
}

interface PageTOCProps {
  sections: PageTOCSection[];
}

export default function PageTOC({ sections }: PageTOCProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-section-index") || "0", 10);
            setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-120px 0px -50% 0px", threshold: 0 }
    );

    const headings = document.querySelectorAll("[data-section-index]");
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  if (sections.length < 1) return null;

  return (
    <nav className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => {
              const el = document.querySelector(`[data-section-index="${i}"]`);
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 text-left"
          >
            <span
              className={`h-px transition-all duration-500 ${
                i === activeIndex ? "w-8 bg-[#111111] dark:bg-[#f5f5f5]" : "w-4 bg-[#cacacb] dark:bg-[#333333] group-hover:w-6"
              }`}
            />
            <span
              className={`text-xs transition-all duration-300 ${
                i === activeIndex
                  ? "text-[#111111] dark:text-[#f5f5f5] opacity-100"
                  : "text-[#707072] opacity-0 group-hover:opacity-60"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
