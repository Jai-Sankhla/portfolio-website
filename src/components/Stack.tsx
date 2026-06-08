"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { id: "figma", label: "Figma" },
  { id: "miro", label: "Miro" },
  { id: "photoshop", label: "Photoshop" },
  { id: "notion", label: "Notion" },
  { id: "framer", label: "Framer" },
  { id: "marvel", label: "Marvel" },
  { id: "lovable", label: "Lovable" },
  { id: "jitter", label: "Jitter" },
  { id: "whimsical", label: "Whimsical" },
  { id: "uizard", label: "Uizard" },
  { id: "wix", label: "Wix" },
  { id: "maze", label: "Maze" },
  { id: "hotjar", label: "Hotjar" },
  { id: "figjam", label: "FigJam" },
  { id: "replit", label: "Replit" },
];

const categories = [
  {
    name: "Design",
    items: tools.slice(0, 5),
  },
  {
    name: "Prototyping",
    items: tools.slice(5, 10),
  },
  {
    name: "Research",
    items: tools.slice(10),
  },
];

export default function Stack() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
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
            Toolbox
          </span>
          <h2 className="text-3xl md:text-4xl text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Stack & tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-card"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#A3A3A3] mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-4">
                {cat.items.map((tool, i) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.03 }}
                    className="group relative"
                  >
                    <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 bg-[#FAFAFA] rounded-xl border border-[#F0F0F0] p-2">
                      <Image
                        src={`/images/tool-${tool.id}.svg`}
                        alt={tool.label}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-medium text-[#A3A3A3] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tool.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
