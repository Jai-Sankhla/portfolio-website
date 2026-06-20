import type { CaseStudy } from "@/data/case-studies";

const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(caseStudy: CaseStudy): string {
  let wordCount = 0;

  wordCount += caseStudy.description.split(/\s+/).length;

  for (const section of caseStudy.sections) {
    wordCount += section.heading.split(/\s+/).length;
    for (const item of section.items) {
      if (item.content) {
        wordCount += item.content.split(/\s+/).length;
      }
      if (item.quote) {
        wordCount += item.quote.split(/\s+/).length;
      }
    }
  }

  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
