"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  "figma", "miro", "photoshop", "notion", "framer", "marvel",
  "lovable", "jitter", "whimsical", "uizard", "wix", "maze",
  "hotjar", "figjam", "replit",
];

const toolLabels: Record<string, string> = {
  figma: "Figma", miro: "Miro", photoshop: "Photoshop", notion: "Notion",
  framer: "Framer", marvel: "Marvel", lovable: "Lovable", jitter: "Jitter",
  whimsical: "Whimsical", uizard: "Uizard", wix: "Wix", maze: "Maze",
  hotjar: "Hotjar", figjam: "FigJam", replit: "Replit",
};

export default function Stack() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl text-black mb-8 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Stack
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-8 items-center"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="relative group/tool"
            >
              <div className="w-8 h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                <Image
                  src={`/images/tool-${tool}.svg`}
                  alt={toolLabels[tool]}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#828282] opacity-0 group-hover/tool:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {toolLabels[tool]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
