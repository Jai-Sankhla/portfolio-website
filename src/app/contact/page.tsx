"use client";

import { useState } from "react";
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
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <span className="text-sm text-[#F4A259] font-medium">
            Get in touch
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-semibold tracking-tight mt-4 mb-8 leading-tight">
            Have a project in mind?
            <br />
            Let&apos;s build something great.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 p-6 rounded-xl bg-[#E8E4DE]/50 dark:bg-[#2A2826]/50">
            <div className="flex-1">
              <p className="text-sm text-[#8A8680] mb-1">Email me at</p>
              <p className="text-base font-medium">{site.email}</p>
            </div>
            <button
              onClick={copyEmail}
              className="px-5 py-2.5 bg-[#2D2D2D] dark:bg-[#F0EDE8] text-[#FAF8F5] dark:text-[#1A1A1A] text-sm font-medium rounded-full hover:bg-[#F4A259] dark:hover:bg-[#F4A259] transition-colors shrink-0"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="text-lg font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4">
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
              label: "X / Twitter",
              href: site.social.twitter,
            },
            {
              label: "Dribbble",
              href: site.social.dribbble,
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
                className="group flex items-center justify-between p-4 rounded-xl border border-[#D4D0CA] dark:border-[#3A3836] hover:border-[#F4A259] dark:hover:border-[#F4A259] transition-colors"
              >
                <span className="text-sm font-medium">{link.label}</span>
                <span className="text-sm text-[#8A8680] group-hover:text-[#F4A259] transition-colors">
                  &rarr;
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 pt-12 border-t border-[#E8E4DE] dark:border-[#2A2826] text-center">
            <p className="text-sm text-[#8A8680]">
              Based in India &middot; Available for remote work
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
