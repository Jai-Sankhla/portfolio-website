"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "budgify",
    title: "Designing Budgify: An Intuitive App for Tracking and Conquering Expenses",
    description:
      "This case study details my end-to-end design process for an app that simplifies expense tracking and helps users achieve their financial goals with clarity.",
    image: "/images/project-1.jpeg",
    tags: ["Fintech", "Mobile App"],
    metric: { value: "End-to-end", label: "Product Design" },
  },
  {
    slug: "nirva-homepage",
    title: "Homepage Redesign That Increased First Task Completion by 40%",
    description:
      "Created a structured homepage with clear hierarchy, reducing confusion and driving higher engagement.",
    image: "/images/project-2.jpeg",
    tags: ["UX Redesign", "Web"],
    metric: { value: "40%", label: "First task completion increase" },
  },
  {
    slug: "nirva-gamification",
    title: "Built Gamification System That Turned Drop-offs Into 2x Daily Engagement",
    description:
      "Created gamification features at Nirva Health that boosted retention and doubled daily engagement through rewards, coins, and streak tracking.",
    image: "/images/project-3.jpeg",
    tags: ["Gamification", "Health"],
    metric: { value: "2x", label: "Daily engagement" },
  },
  {
    slug: "slc-checkout",
    title: "Redesigning Cart & Checkout, Reducing Abandonment by 26% Across 480k User Sessions",
    description:
      "Focused on optimizing checkout flows to boost conversions and decrease abandonment for Sierra Living Concepts, a brand of luxury furniture shoppers in U.S.",
    image: "/images/project-4.jpeg",
    tags: ["E-commerce", "Checkout"],
    metric: { value: "26%", label: "Cart abandonment reduction" },
  },
  {
    slug: "slc-category",
    title: "Creating a Unified Category & Paid-Landing Experience for Furniture Buyers",
    description:
      "Cohesive redesign delivering higher engagement, trust, and sales from ad click to category page for premium shoppers.",
    image: "/images/project-5.jpeg",
    tags: ["UX Strategy", "E-commerce"],
    metric: { value: "Unified", label: "Category + Landing experience" },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl text-[#060F15] mb-10">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block -m-4">
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="group cursor-pointer flex flex-col p-4 rounded-2xl hover:bg-[#f0f0ee] transition-all duration-300"
              >
                <div className="rounded-xl overflow-hidden mb-4 aspect-[16/9] bg-white drop-shadow-sm border border-[#e5e5e2] group-hover:border-[#224D0F]/20 transition-colors relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider text-[#5E6673] bg-[#e5e5e2]/50 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-serif text-lg md:text-xl text-[#060F15] mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-[#5E6673] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#e5e5e2]/50">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-[#224D0F]">
                      {project.metric.value}
                    </span>
                    <span className="text-[11px] text-[#5E6673]">
                      {project.metric.label}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#224D0F] opacity-0 group-hover:opacity-100 transition-opacity">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
