"use client";

import Image from "next/image";
import type { CaseStudySection } from "@/data/case-studies";

export default function ProjectSections({
  sections,
}: {
  sections: { heading: string; items: CaseStudySection[] }[];
}) {
  return (
    <div className="space-y-12">
      {sections.map((section, i) => (
        <section key={i}>
          <h2 className="text-sm text-black font-[family-name:var(--font-display)] font-semibold mb-5">
            {section.heading}
          </h2>
          <div className="space-y-6">
            {section.items.map((item, j) => (
              <ProjectSectionItem key={j} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectSectionItem({ item }: { item: CaseStudySection }) {
  switch (item.type) {
    case "text":
      return (
        <p className="text-sm text-[#888] leading-relaxed">{item.content}</p>
      );

    case "image":
      return (
        <div>
          <div className="relative aspect-video w-full overflow-hidden bg-[#fafafa]">
            <Image
              src={item.image!.src}
              alt={item.image!.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 640px"
            />
          </div>
          {item.image?.caption && (
            <p className="text-xs text-[#888] mt-2 leading-relaxed">
              {item.image.caption}
            </p>
          )}
        </div>
      );

    case "image-grid":
      return (
        <div className="space-y-4">
          {item.images?.map((img, k) => (
            <div key={k}>
              <div className="relative aspect-video w-full overflow-hidden bg-[#fafafa]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
              {img.caption && (
                <p className="text-xs text-[#888] mt-2 leading-relaxed">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-black pl-4">
          <p className="text-sm text-black italic leading-relaxed">
            {item.quote}
          </p>
          {item.author && (
            <footer className="text-xs text-[#888] mt-2">
              &mdash; {item.author}
            </footer>
          )}
        </blockquote>
      );

    case "metrics":
      return (
        <div className="grid grid-cols-3 gap-4">
          {item.metrics?.map((m, k) => (
            <div key={k} className="bg-[#fafafa] border border-[#f0f0f0] p-4">
              <p className="text-lg font-[family-name:var(--font-display)] font-semibold text-black">
                {m.value}
              </p>
              <p className="text-xs text-[#888]">{m.label}</p>
            </div>
          ))}
        </div>
      );

    case "embed":
      return (
        <div className="relative aspect-video w-full overflow-hidden bg-[#fafafa]">
          <iframe
            src={item.embed!.url}
            title={item.embed!.title}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="autoplay; fullscreen"
          />
        </div>
      );

    default:
      return null;
  }
}
