"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticWrapper from "@/components/MagneticWrapper";
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 p-6 rounded-xl bg-[#f5f5f5]/50 dark:bg-[#151515]/50">
            <div className="flex-1">
              <p className="text-sm text-[#707072] mb-1">Email me at</p>
              <p className="text-base font-medium">{site.email}</p>
            </div>
            <MagneticWrapper>
              <button
                onClick={copyEmail}
                className="px-5 py-2.5 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors shrink-0"
              >
                {copied ? "Copied!" : "Copy email"}
              </button>
            </MagneticWrapper>
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
                className="group flex items-center justify-between p-4 rounded-xl border border-[#cacacb] dark:border-[#333333] hover:border-[#1151ff] dark:hover:border-[#1151ff] transition-colors"
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
          <div className="mt-16 pt-12 border-t border-[#f5f5f5] dark:border-[#2a2a2a] text-center">
            <p className="text-sm text-[#707072]">
              Based in India &middot; Available for remote work
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
