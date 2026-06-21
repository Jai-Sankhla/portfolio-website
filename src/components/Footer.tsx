"use client";

import { site } from "@/data/site";

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "X / Twitter", href: site.social.twitter },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#f0f0f0] dark:border-[#2a2a2a] bg-white dark:bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <a
          href={`mailto:${site.email}`}
          className="group block mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-[#111111] dark:text-[#f5f5f5] group-hover:text-[#1151ff] dark:group-hover:text-[#1151ff] transition-colors">
            Let&apos;s work together
          </h2>
        </a>

        <div className="h-px bg-[#f0f0f0] dark:bg-[#2a2a2a] mb-8" />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
          {links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-x-6">
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group relative text-sm text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors tracking-hover"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#111111] dark:bg-[#f5f5f5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              {i < links.length - 1 && (
                <span className="text-[#cacacb] dark:text-[#333333] select-none">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="h-px bg-[#f0f0f0] dark:bg-[#2a2a2a] mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-[#707072]">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <p className="text-xs text-[#707072]">
            {site.role}
          </p>
        </div>
      </div>
    </footer>
  );
}
