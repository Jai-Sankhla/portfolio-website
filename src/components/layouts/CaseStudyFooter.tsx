"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";

interface Props {
  prev: CaseStudy | null;
  next: CaseStudy | null;
}

export default function CaseStudyFooter({ prev, next }: Props) {
  return (
    <>
      <div className="mt-10 md:mt-12 border-t border-[#e8e8e8]">
        <div className="grid grid-cols-2 gap-4 md:gap-6 pt-10 md:pt-12">
          <div>
            {prev && (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#f5f5f5] shrink-0 border border-[#e8e8e8]">
                  <Image
                    src={prev.coverImage}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#707072] block leading-none mb-1 group-hover:text-[#111111] transition-colors">
                    &larr; Previous
                  </span>
                  <span className="text-sm font-medium text-[#111111] block truncate group-hover:opacity-70 transition-opacity">
                    {prev.client}
                  </span>
                </div>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="group flex items-center gap-4 justify-end"
              >
                <div className="min-w-0">
                  <span className="text-xs text-[#707072] block leading-none mb-1 group-hover:text-[#111111] transition-colors">
                    Next &rarr;
                  </span>
                  <span className="text-sm font-medium text-[#111111] block truncate group-hover:opacity-70 transition-opacity">
                    {next.client}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#f5f5f5] shrink-0 border border-[#e8e8e8]">
                  <Image
                    src={next.coverImage}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-[#e8e8e8] text-center">
        <p className="text-[#707072] mb-4">Interested in working together?</p>
        <button
          onClick={() => { navigator.clipboard.writeText(site.email); }}
          className="inline-flex px-6 py-3 bg-[#111111] text-[#ffffff] text-sm font-medium rounded-full hover:bg-[#1151ff] hover:text-white transition-colors tracking-hover cursor-pointer"
        >
          Get in touch
        </button>
      </div>
    </>
  );
}
