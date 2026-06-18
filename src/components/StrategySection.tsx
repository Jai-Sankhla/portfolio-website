"use client";

import { motion } from "framer-motion";

const steps = [
  {
    phase: "Qualifying",
    label: "Discover",
    description: "Research, user interviews, market analysis — understanding the terrain before the race.",
    color: "#E10600",
    icon: "⏱",
  },
  {
    phase: "Race Strategy",
    label: "Design",
    description: "Wireframes, prototypes, iterative UI — every lap gets faster with practice.",
    color: "#FFD700",
    icon: "📐",
  },
  {
    phase: "Pit Stop",
    label: "Test & Refine",
    description: "User testing, feedback loops, rapid iteration — optimizing the setup.",
    color: "#B0B0C0",
    icon: "🔧",
  },
  {
    phase: "Victory Lap",
    label: "Launch",
    description: "Final polish, handoff, and celebration — podium finish for the product.",
    color: "#E10600",
    icon: "🏆",
  },
];

export default function StrategySection() {
  return (
    <section className="py-24 md:py-32 border-t border-[#cacacb] dark:border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs text-[#E10600] font-medium uppercase tracking-wider">
            Race Strategy
          </span>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-race)] font-bold tracking-tight mt-2 mb-2 uppercase">
            How I Work
          </h2>
          <p className="text-sm text-[#8B8B9E] mb-10 max-w-md">
            From formation lap to checkered flag — my design process mapped
            to a race weekend strategy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Corner decoration */}
              <div className="mb-4 flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: `${step.color}15`, color: step.color }}
                >
                  {step.icon}
                </div>
                <div className="h-px flex-1" style={{ backgroundColor: `${step.color}30` }} />
              </div>

              <span
                className="text-[10px] font-medium uppercase tracking-wider"
                style={{ color: step.color }}
              >
                {step.phase}
              </span>

              <h3 className="text-lg font-[family-name:var(--font-race)] font-bold tracking-tight mt-0.5 mb-2 uppercase">
                {step.label}
              </h3>

              <p className="text-sm text-[#8B8B9E] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
