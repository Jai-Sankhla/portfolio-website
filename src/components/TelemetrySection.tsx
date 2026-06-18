"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

function Gauge({
  value,
  max,
  label,
  unit,
  color,
  delay,
}: {
  value: number;
  max: number;
  label: string;
  unit: string;
  color: string;
  delay: number;
}) {
  const pct = (value / max) * 100;
  const angle = (pct / 100) * 180;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      <div className="relative w-28 h-16 overflow-hidden">
        <svg viewBox="0 0 120 70" className="w-full h-full">
          <path
            d="M10 65 A50 50 0 0 1 110 65"
            fill="none"
            stroke="currentColor"
            className="text-[#cacacb] dark:text-[#2a2a2a]"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.path
            d="M10 65 A50 50 0 0 1 110 65"
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${(angle / 180) * 314} 314`}
            initial={{ strokeDasharray: "0 314" }}
            whileInView={{ strokeDasharray: `${(angle / 180) * 314} 314` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
          <motion.span
            className="text-xl font-[family-name:var(--font-race)] tabular-nums leading-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.6 }}
          >
            {value}
            <span className="text-xs text-[#8B8B9E] ml-0.5">{unit}</span>
          </motion.span>
        </div>
      </div>
      <p className="text-[11px] text-[#8B8B9E] font-medium uppercase tracking-wider mt-1 text-center">
        {label}
      </p>
    </motion.div>
  );
}

export default function TelemetrySection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Driver profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <span className="text-xs text-[#E10600] font-medium uppercase tracking-wider">
              Driver Profile
            </span>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-race)] font-bold tracking-tight mt-2 mb-4 uppercase">
              Telemetry
            </h2>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E10600] flex-shrink-0">
                <img
                  src="/images/avatar.jpg"
                  alt="Jai Sankhla"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-race)] text-lg leading-none uppercase tracking-wide">
                  Jai Sankhla
                </p>
                <p className="text-sm text-[#8B8B9E]">Product Designer</p>
              </div>
            </div>

            <p className="text-sm text-[#8B8B9E] leading-relaxed mb-6">
              I&apos;m a Product Designer with experience across fintech,
              health, and e-commerce. I specialize in end-to-end product
              design — from user research and wireframing to polished
              interfaces and design systems.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs text-[#E10600] font-medium hover:underline transition-colors"
            >
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6 L6 2 L10 6 L6 10 Z" fill="#E10600" opacity="0.5" />
                <path d="M1 6 L3 4 L5 6 L3 8 Z" fill="#E10600" transform="translate(6,2)" opacity="0.3" />
              </svg>
              Full driver stats &rarr;
            </a>
          </motion.div>

          {/* Telemetry gauges */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Gauge
                value={6}
                max={10}
                label="Experience"
                unit="yr"
                color="#E10600"
                delay={0}
              />
              <Gauge
                value={8}
                max={10}
                label="Product"
                unit="/10"
                color="#FFD700"
                delay={0.1}
              />
              <Gauge
                value={9}
                max={10}
                label="Impact"
                unit="/10"
                color="#B0B0C0"
                delay={0.2}
              />
              <Gauge
                value={85}
                max={100}
                label="Fuel"
                unit="%"
                color="#E10600"
                delay={0.3}
              />
            </div>

            {/* Team radio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 p-4 rounded-xl border border-[#cacacb] dark:border-[#2a2a2a] bg-[#ffffff] dark:bg-[#1A1A28]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-[#E10600] font-medium uppercase tracking-wider">
                  ⚡ Team Radio
                </span>
              </div>
              <p className="text-sm text-[#8B8B9E] italic leading-relaxed">
                &ldquo;Box, box — that&apos;s the fastest lap we&apos;ve seen from this team.
                Great execution on the strategy.&rdquo;
              </p>
              <p className="text-xs text-[#8B8B9E] mt-2">
                — <span className="text-[#E10600]">Recommendation</span> from a collaborator
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
