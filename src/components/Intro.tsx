"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 26, suffix: "%", label: "Conversion Lift" },
  { value: 480, suffix: "k", label: "User Sessions" },
];

export default function Intro() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] mb-6">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] mb-6 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight leading-tight">
            Turning complexity into{" "}
            <span className="text-gradient-subtle">clarity</span>
          </h2>
          <p className="text-base md:text-lg text-[#737373] leading-relaxed max-w-2xl mx-auto">
            Product Designer with a relentless curiosity for how things can work better.
            From graduating as a University Gold Medalist to shipping products used by
            hundreds of thousands, I bring enterprise-grade thinking to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-1 font-[family-name:var(--font-dm-sans)]">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[#737373] font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
