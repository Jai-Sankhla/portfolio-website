"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "budgify",
    title: "Designing Budgify",
    description:
      "End-to-end product design for a fintech app that simplifies expense tracking and helps users achieve financial goals with clarity.",
    image: "/images/project-1.jpeg",
    tags: ["Fintech", "Mobile App"],
    metric: { value: "End-to-end", label: "Product Design" },
    gradient: "from-[#6366F1]/10 to-[#8B5CF6]/10",
  },
  {
    slug: "nirva-homepage",
    title: "Homepage Redesign",
    description:
      "Structured homepage with clear hierarchy that increased first task completion by 40% and reduced user confusion.",
    image: "/images/project-2.jpeg",
    tags: ["UX Redesign", "Web"],
    metric: { value: "40%", label: "Task completion increase" },
    gradient: "from-[#8B5CF6]/10 to-[#EC4899]/10",
  },
  {
    slug: "nirva-gamification",
    title: "Gamification System",
    description:
      "Built rewards, coins, and streak tracking that doubled daily engagement and significantly improved user retention.",
    image: "/images/project-3.jpeg",
    tags: ["Gamification", "Health"],
    metric: { value: "2x", label: "Daily engagement" },
    gradient: "from-[#EC4899]/10 to-[#6366F1]/10",
  },
  {
    slug: "slc-checkout",
    title: "Cart & Checkout Redesign",
    description:
      "Optimized checkout flows reducing abandonment by 26% across 480k+ user sessions for a luxury furniture e-commerce brand.",
    image: "/images/project-4.jpeg",
    tags: ["E-commerce", "Checkout"],
    metric: { value: "26%", label: "Cart abandonment reduction" },
    gradient: "from-[#6366F1]/10 to-[#8B5CF6]/10",
  },
  {
    slug: "slc-category",
    title: "Unified Category & Landing Experience",
    description:
      "Cohesive redesign delivering higher engagement, trust, and sales from ad click to category page for premium shoppers.",
    image: "/images/project-5.jpeg",
    tags: ["UX Strategy", "E-commerce"],
    metric: { value: "+120%", label: "Ad-to-purchase conversion" },
    gradient: "from-[#8B5CF6]/10 to-[#EC4899]/10",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] mb-6">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Selected projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden hover:shadow-elevated transition-all duration-500"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-[-0.5deg]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="flex flex-col p-5 flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider text-[#737373] bg-[#F5F5F5] px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg md:text-xl text-[#0A0A0A] mb-2 leading-snug font-[family-name:var(--font-dm-sans)] font-medium group-hover:text-gradient-subtle transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#737373] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E5]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-[#0A0A0A]">
                        {project.metric.value}
                      </span>
                      <span className="text-[11px] text-[#737373]">
                        {project.metric.label}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      View case study <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
