"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { caseStudies } from "@/data/case-studies";

export default function Work() {
  const router = useRouter();
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, caseStudies.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        e.preventDefault();
        router.push(`/work/${caseStudies[focusedIndex].slug}`);
      } else if (e.key === "Escape") {
        setFocusedIndex(-1);
      }
    },
    [focusedIndex, router]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="pt-28 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <span className="text-sm text-[#1151ff] font-medium">Portfolio</span>
          <h1 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mt-3 mb-12">
            Projects
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.slug}
              className={`relative rounded-2xl transition-all duration-300 ${
                focusedIndex === i
                  ? "ring-2 ring-[#1151ff] ring-offset-4 ring-offset-white"
                  : ""
              }`}
              onClick={() => setFocusedIndex(i)}
              tabIndex={0}
              onFocus={() => setFocusedIndex(i)}
              onBlur={() => setFocusedIndex(-1)}
            >
              <ProjectCard project={cs} index={i} />
            </div>
          ))}
        </div>

        {focusedIndex >= 0 && (
          <p className="text-center text-xs text-[#707072] mt-8">
            <kbd className="px-1.5 py-0.5 bg-[#f5f5f5] rounded text-[10px] font-mono">←</kbd>
            {" "}or{" "}
            <kbd className="px-1.5 py-0.5 bg-[#f5f5f5] rounded text-[10px] font-mono">→</kbd>
            {" "}to navigate &middot;{" "}
            <kbd className="px-1.5 py-0.5 bg-[#f5f5f5] rounded text-[10px] font-mono">Enter</kbd>
            {" "}to open &middot;{" "}
            <kbd className="px-1.5 py-0.5 bg-[#f5f5f5] rounded text-[10px] font-mono">Esc</kbd>
            {" "}to dismiss
          </p>
        )}
      </div>
    </div>
  );
}
