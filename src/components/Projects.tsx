"use client";

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-[#f0f0f0]">
      <div className="max-w-[640px] mx-auto px-6">
        <p className="text-sm text-[#888] mb-10">Selected work</p>
        <div className="space-y-12">
          {caseStudies.map((cs) => (
            <div key={cs.slug}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-[#888] font-[family-name:var(--font-mono)] uppercase tracking-wider">
                  {cs.client}
                </span>
                <span className="text-[#dcdcdc]">/</span>
                <span className="text-xs text-[#888] font-[family-name:var(--font-mono)] uppercase tracking-wider">
                  {cs.industry}
                </span>
              </div>
              <Link
                href={`/projects/${cs.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden mb-4 bg-[#fafafa]">
                  <Image
                    src={cs.coverImage}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                </div>
                <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold text-black mb-1.5">
                  {cs.title}
                </h2>
                <p className="text-sm text-[#888] leading-relaxed mb-3">
                  {cs.description}
                </p>
                {cs.metric && (
                  <div className="inline-block text-xs font-[family-name:var(--font-mono)] text-[#888] border border-[#dcdcdc] px-2.5 py-1 rounded-sm mb-3">
                    {cs.metric.value} — {cs.metric.label}
                  </div>
                )}
                <div className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] group-hover:decoration-black transition-all">
                  View Project
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
