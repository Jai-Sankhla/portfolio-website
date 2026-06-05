"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e2]">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-[#5E6673]/50"
          >
            &copy; {new Date().getFullYear()} Jai Sankhla. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.instagram.com/jai_sankhla_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#5E6673]/50 hover:text-[#224D0F] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/jaisankhla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#5E6673]/50 hover:text-[#224D0F] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/JaiSankhla2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#5E6673]/50 hover:text-[#224D0F] transition-colors"
            >
              X / Twitter
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
