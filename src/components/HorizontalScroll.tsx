"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { caseStudies } from "@/data/case-studies";

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-end mb-8"
          >
            <div className="flex items-center gap-3 text-[#9e9ea0]">
              <span className="w-6 h-px bg-[#9e9ea0]" />
              <motion.span
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-sm"
              >
                ◆
              </motion.span>
              <span className="text-xs font-medium tracking-wider">02</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-8 pl-[calc((100vw-1152px)/2+24px)]"
        >
          {caseStudies.map((cs, i) => (
            <div
              key={cs.slug}
              className="min-w-[380px] md:min-w-[440px] lg:min-w-[500px]"
            >
              <ProjectCard project={cs} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
