"use client";

import ScrollReveal from "@/components/ScrollReveal";

const experience = [
  {
    period: "Jul 2024 – Present (2 yrs)",
    role: "Lead UI/UX Designer",
    company: "Sierra Living Concepts",
    description:
      "Led end-to-end UX strategy and design for an e-commerce platform. Redesigned the unified category and landing experience achieving +120% ad-to-purchase conversion.",
    color: "#1151ff",
  },
  {
    period: "Jul 2023 – Mar 2024 (9 mo)",
    role: "Product Design Intern",
    company: "Nirva Health",
    description:
      "Designed a gamification system that turned user drop-offs into 2x daily engagement. Redesigned homepage increasing first task completion by 40%.",
    color: "#111111",
  },
  {
    period: "Nov 2022 – Jan 2023 (3 mo)",
    role: "UI/UX Designer (Cohort 6)",
    company: "10kdesigners",
    description:
      "Completed an intensive design program. Designed Budgify — an end-to-end expense tracking app — from research through high-fidelity prototype.",
    color: "#707072",
  },
  {
    period: "Jun 2022 – Jan 2023 (8 mo)",
    role: "Graphic Designer",
    company: "Caffena Coffee",
    description:
      "Managed social media design, product catalogs, brochures, and exhibition graphics for the coffee brand.",
    color: "#cacacb",
  },
  {
    period: "Jul 2022 – Oct 2022 (4 mo)",
    role: "Graphic Design Intern",
    company: "Saimex Group",
    description:
      "Designed graphics for product catalogs, exhibitions including IHE Expo 2022, and supported digital marketing efforts.",
    color: "#9e9ea0",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#cacacb]" />

      <div className="space-y-12">
        {experience.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-white"
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
