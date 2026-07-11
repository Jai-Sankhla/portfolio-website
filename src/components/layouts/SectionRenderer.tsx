"use client";

import Image from "next/image";
import type { CaseStudySection } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AnimatedCounter from "@/components/AnimatedCounter";
import FormattedText from "@/lib/format-text";

interface Props {
  item: CaseStudySection;
  accentColor?: string;
  imageSizes?: string;
}

export default function SectionRenderer({
  item,
  accentColor = "#1151ff",
  imageSizes = "(max-width: 768px) 100vw, 768px",
}: Props) {
  switch (item.type) {
    case "text": {
      const paragraphs = item.content!.split("\n\n").filter(Boolean);
      return (
        <>
          {paragraphs.map((p, k) => (
            <p key={k} className="text-[#707072] leading-[1.75] max-w-[65ch] mx-auto">
              <FormattedText content={p} />
            </p>
          ))}
        </>
      );
    }

    case "image":
      return (
        <figure className="rounded-xl border border-[#e8e8e8] bg-white shadow-sm overflow-hidden">
          <Image
            src={item.image!.src}
            alt={item.image!.alt}
            width={1920}
            height={1080}
            sizes={imageSizes}
            className="w-full h-auto"
          />
          {item.image?.caption && (
            <figcaption className="px-5 py-3 text-xs text-[#707072] leading-relaxed border-t border-[#f0f0f0]">
              {item.image.caption}
            </figcaption>
          )}
        </figure>
      );

    case "image-grid":
      return (
        <div className="space-y-6">
          {item.images?.map((img, k) => (
            <figure key={k} className="rounded-xl border border-[#e8e8e8] bg-white shadow-sm overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                width={1920}
                height={1080}
                sizes={imageSizes}
                className="w-full h-auto"
              />
              {img.caption && (
                <figcaption className="px-5 py-3 text-xs text-[#707072] leading-relaxed border-t border-[#f0f0f0]">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "quote":
      return (
        <div className="my-12 md:my-16">
          <div className="w-8 h-0.5 mx-auto mb-6 rounded-full" style={{ backgroundColor: accentColor }} />
          <blockquote className="text-center px-4">
            <p className="text-xl md:text-2xl font-[family-name:var(--font-display)] italic leading-relaxed text-[#111111]">
              &ldquo;{item.quote}&rdquo;
            </p>
            {item.author && (
              <cite className="text-sm text-[#707072] not-italic mt-4 block">
                &mdash; {item.author}
              </cite>
            )}
          </blockquote>
        </div>
      );

    case "metrics":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {item.metrics?.map((m, k) => {
            const numVal = parseInt(m.value.replace(/[^0-9]/g, ""));
            const isNum = !isNaN(numVal);
            const suffix = m.value.replace(/[0-9]/g, "");
            return (
              <div key={k} className="bg-white border border-[#e8e8e8] rounded-xl p-5 shadow-sm">
                <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold" style={{ color: accentColor }}>
                  {isNum ? <><AnimatedCounter to={numVal} />{suffix}</> : m.value}
                </p>
                <p className="text-sm text-[#707072] mt-1 leading-snug">{m.label}</p>
              </div>
            );
          })}
        </div>
      );

    case "embed": {
      const isVideo = item.embed!.url.includes("vimeo");
      return (
        <iframe
          src={item.embed!.url}
          title={item.embed!.title}
          className={`w-full rounded-xl border border-[#e8e8e8] bg-white shadow-sm ${isVideo ? "aspect-video" : "h-[900px]"}`}
          allowFullScreen
          allow="autoplay; fullscreen"
        />
      );
    }

    case "before-after":
      return <BeforeAfterSlider before={item.before!} after={item.after!} />;

    default:
      return null;
  }
}
