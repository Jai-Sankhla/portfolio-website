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
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl text-[#060F15] mb-6">
            🏆 University Gold Medalist
          </h2>
          <p className="text-[#5E6673] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Product Designer with a relentless curiosity for how things can work
            better. I turn complexity into clarity through thoughtful, human-centered design.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-[#224D0F]/10 max-w-[100px] mx-auto mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
