"use client";

import PageTOC from "@/components/PageTOC";
import type { CaseStudy } from "@/data/case-studies";

interface CaseStudyTOCProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyTOC({ caseStudy }: CaseStudyTOCProps) {
  if (caseStudy.sections.length < 3) return null;

  return (
    <PageTOC
      sections={caseStudy.sections.map((s) => ({
        id: s.heading.toLowerCase().replace(/\s+/g, "-"),
        label: s.heading,
      }))}
    />
  );
}
