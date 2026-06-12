"use client";

import ScrollReveal from "@/components/ScrollReveal";

const experience = [
  {
    period: "2024",
    role: "Lead UI/UX Designer",
    company: "Sierra Living Concepts",
    description:
      "Led end-to-end UX strategy and design for an e-commerce platform. Redesigned the unified category and landing experience achieving +120% ad-to-purchase conversion.",
    color: "#1151ff",
  },
  {
    period: "2023",
    role: "Product Designer Intern",
    company: "Nirva Health",
    description:
      "Designed a gamification system that turned user drop-offs into 2x daily engagement. Redesigned homepage increasing first task completion by 40%.",
    color: "#111111",
  },
  {
    period: "2022",
    role: "Product Designer (Cohort 6)",
    company: "10kdesigners",
    description:
      "Completed an intensive design program. Designed Budgify — an end-to-end expense tracking app — from research through high-fidelity prototype.",
    color: "#707072",
  },
  {
    period: "2021 - 2020",
    role: "Graphic Designer",
    company: "Caffena Coffee & Saimex Group",
    description:
      "Managed social media design, product catalogs, brochures, and exhibition graphics. Graduated as Gold Medalist in Interior Design.",
    color: "#cacacb",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#cacacb] dark:bg-[#333333]" />

      <div className="space-y-12">
        {experience.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#ffffff] dark:border-[#000000]"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs text-[#707072] font-[family-name:var(--font-mono)] block mb-1">
                {item.period}
              </span>
              <h3 className="text-base font-[family-name:var(--font-display)] font-semibold">
                {item.role}
              </h3>
              <p className="text-sm text-[#1151ff] font-medium mb-2">
                {item.company}
              </p>
              <p className="text-sm text-[#707072] leading-relaxed">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
