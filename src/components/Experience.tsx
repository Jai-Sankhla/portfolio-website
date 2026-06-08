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
  },
  {
    year: "2023",
    company: "Nirva Health",
    role: "Product Designer Intern",
    details:
      "Designed and shipped a gamification system featuring rewards, coins, and streak tracking that doubled daily engagement and significantly improved user retention. Conducted user interviews, iterated on prototypes based on feedback, and contributed to the overall product strategy.",
  },
  {
    year: "2022",
    company: "10kdesigners",
    role: "Product Designer (Cohort 6)",
    details:
      "Selected for a competitive cohort-based design program focused on product thinking, UI/UX skills, and real-world design challenges. Collaborated with peers on projects, received mentorship from industry leaders, and built a strong foundation in product design methodology.",
  },
  {
    year: "2022",
    company: "Caffena Coffee",
    role: "Graphic Designer",
    details:
      "Managed all social media handles and created compelling designs for product flyers, master catalogs, brochures, and website assets. Contributed to the IHE Expo 2022 with graphics and branding materials. Demonstrated rapid prototyping and effective cross-team collaboration.",
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl text-black mb-8 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border-b border-[#DEDEDE] last:border-0 hover:bg-[#F5F5F5]/50 transition-colors -mx-3 px-3 rounded-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-2 sm:gap-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-black font-light text-lg leading-none w-4 h-4 flex items-center justify-center shrink-0"
                  >
                    +
                  </motion.span>
                  <span className="text-black text-sm font-medium tracking-wide uppercase">
                    <span className="text-[#545454] mr-2 font-sans">
                      {exp.year} /
                    </span>
                    {exp.company}
                  </span>
                </div>
                <span className="text-[#545454] text-sm uppercase tracking-wider group-hover:text-black transition-colors ml-7 sm:ml-0 font-sans">
                  {exp.role}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#545454] text-sm leading-relaxed pb-4 pl-10 pr-4">
                      {exp.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
