"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative mb-12 overflow-hidden rounded-2xl bg-[#f5f5f5]/50 p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <motion.div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#1151ff]/5 blur-3xl"
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#059669]/5 blur-3xl"
              animate={{
                x: [0, -30, 20, 0],
                y: [0, 20, -30, 0],
                scale: [1, 0.9, 1.05, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8b5cf6]/5 blur-3xl"
              animate={{
                x: ["-50%", "-40%", "-60%", "-50%"],
                y: ["-50%", "-60%", "-40%", "-50%"],
                scale: [1, 1.15, 0.9, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10">
            <ScrollReveal>
              <span className="text-sm text-[#1151ff] font-medium">
                Get in touch
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-semibold tracking-tight mt-4 mb-8 leading-tight">
                Have a project in mind?
                <br />
                Let&apos;s build something great.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#f0f0f0]">
                <div className="flex-1">
                  <p className="text-sm text-[#707072] mb-1">Email me at</p>
                  <button
                    onClick={copyEmail}
                    className="text-base font-medium hover:text-[#1151ff] transition-colors cursor-pointer"
                  >
                    {copied ? "Copied!" : site.email}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={0.15}>
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4">
            Other places to find me
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {[
            {
              label: "LinkedIn",
              href: site.social.linkedin,
            },
            {
              label: "Behance",
              href: site.social.behance,
            },
            {
              label: "X / Twitter",
              href: site.social.twitter,
            },
            {
              label: "Resume",
              href: site.resume,
              download: true,
            },
          ].map((link, i) => (
            <ScrollReveal key={link.label} delay={0.2 + i * 0.05}>
              <a
                href={link.href}
                {...(link.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center justify-between p-4 rounded-xl border border-[#cacacb] hover:border-[#1151ff] transition-colors"
              >
                <span className="text-sm font-medium">{link.label}</span>
                <span className="text-sm text-[#707072] group-hover:text-[#1151ff] transition-colors">
                  &rarr;
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-9 md:mt-12 pt-12 border-t border-[#f5f5f5] text-center">
            <p className="text-sm text-[#707072]">
              Based in India &middot; Available for remote work
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
