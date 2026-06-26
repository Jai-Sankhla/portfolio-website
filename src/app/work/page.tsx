"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { caseStudies } from "@/data/case-studies";

export default function Work() {
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
            <div key={cs.slug} className="relative rounded-2xl outline-none">
              <ProjectCard project={cs} index={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
