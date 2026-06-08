"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl text-black mb-6 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            University Gold Medalist
          </h2>
          <p className="text-[#545454] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Product Designer with a relentless curiosity for how things can work
            better. I turn complexity into clarity through thoughtful, human-centered design.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
