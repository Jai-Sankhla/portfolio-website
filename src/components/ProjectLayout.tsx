"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectSections from "@/components/ProjectSections";

export default function ProjectLayout({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-[640px] mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-[#888] underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all inline-block mb-8"
          >
            &larr; Back to projects
          </Link>

          <div className="relative aspect-[21/9] w-full overflow-hidden mb-8 bg-[#fafafa]">
            <Image
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 640px"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#888] border border-[#dcdcdc] px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-black mb-3">
            {caseStudy.title}
          </h1>
          <p className="text-sm text-[#888] leading-relaxed mb-8">
            {caseStudy.description}
          </p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 pb-10 border-b border-[#f0f0f0]">
            <div>
              <span className="text-xs text-[#888] block mb-0.5">Client</span>
              <span className="text-sm text-black">{caseStudy.client}</span>
            </div>
            <div>
              <span className="text-xs text-[#888] block mb-0.5">My Role</span>
              <span className="text-sm text-black">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-xs text-[#888] block mb-0.5">Industry</span>
              <span className="text-sm text-black">{caseStudy.industry}</span>
            </div>
            <div>
              <span className="text-xs text-[#888] block mb-0.5">Platform</span>
              <span className="text-sm text-black">{caseStudy.platform}</span>
            </div>
            <div>
              <span className="text-xs text-[#888] block mb-0.5">Timeline</span>
              <span className="text-sm text-black">{caseStudy.timeline}</span>
            </div>
          </div>

          {caseStudy.metric && (
            <div className="mb-10 pb-10 border-b border-[#f0f0f0]">
              <p className="text-xs text-[#888] mb-2">Results &amp; Impact</p>
              <div className="inline-block bg-[#fafafa] border border-[#f0f0f0] px-4 py-3">
                <p className="text-lg font-[family-name:var(--font-display)] font-semibold text-black">
                  {caseStudy.metric.value}
                </p>
                <p className="text-xs text-[#888]">{caseStudy.metric.label}</p>
              </div>
            </div>
          )}

          <ProjectSections sections={caseStudy.sections} />
        </div>
      </main>
      <Footer />
    </>
  );
}
