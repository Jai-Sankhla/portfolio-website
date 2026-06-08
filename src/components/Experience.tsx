"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    year: "2024",
    company: "Sierra Living Concepts",
    role: "Lead UI/UX Designer",
    details:
      "Led the design strategy for a luxury furniture e-commerce platform, redesigning the cart and checkout experience to reduce abandonment by 26% across 480k+ user sessions. Built and maintained a scalable design system, conducted user research, and collaborated cross-functionally with engineering and product teams to ship high-impact features.",
    color: "#6366F1",
  },
  {
    year: "2023",
    company: "Nirva Health",
    role: "Product Designer Intern",
    details:
      "Designed and shipped a gamification system featuring rewards, coins, and streak tracking that doubled daily engagement and significantly improved user retention. Conducted user interviews, iterated on prototypes based on feedback, and contributed to the overall product strategy.",
    color: "#8B5CF6",
  },
  {
    year: "2022",
    company: "10kdesigners",
    role: "Product Designer (Cohort 6)",
    details:
      "Selected for a competitive cohort-based design program focused on product thinking, UI/UX skills, and real-world design challenges. Collaborated with peers on projects, received mentorship from industry leaders, and built a strong foundation in product design methodology.",
    color: "#EC4899",
  },
  {
    year: "2022",
    company: "Caffena Coffee",
    role: "Graphic Designer",
    details:
      "Managed all social media handles and created compelling designs for product flyers, master catalogs, brochures, and website assets. Contributed to the IHE Expo 2022 with graphics and branding materials. Demonstrated rapid prototyping and effective cross-team collaboration.",
    color: "#F59E0B",
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] mb-6">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1]/30 via-[#8B5CF6]/30 to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 pb-2 group"
              >
                <div
                  className="absolute left-3.5 top-6 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: exp.color }}
                />

                <div
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    openIndex === i
                      ? "bg-white border-[#E5E5E5] shadow-elevated"
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-[#F0F0F0]"
                  }`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A3A3A3] shrink-0 w-10">
                        {exp.year}
                      </span>
                      <h3 className="text-sm font-semibold text-[#0A0A0A]">
                        {exp.company}
                      </h3>
                    </div>
                    <span className="text-xs text-[#737373] ml-[4.25rem] sm:ml-0">
                      {exp.role}
                    </span>
                  </div>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-[#737373] leading-relaxed mt-4 pt-4 border-t border-[#E5E5E5]">
                          {exp.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
