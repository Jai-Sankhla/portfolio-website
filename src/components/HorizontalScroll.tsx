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
