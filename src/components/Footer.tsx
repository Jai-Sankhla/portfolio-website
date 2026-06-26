"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "X / Twitter", href: site.social.twitter },
];

export default function Footer() {
  const [ctaCopied, setCtaCopied] = useState(false);
  const [socialCopied, setSocialCopied] = useState(false);

  const copyCta = () => {
    navigator.clipboard.writeText(site.email);
    setCtaCopied(true);
    setTimeout(() => setCtaCopied(false), 2000);
  };

  const copySocial = () => {
    navigator.clipboard.writeText(site.email);
    setSocialCopied(true);
    setTimeout(() => setSocialCopied(false), 2000);
  };

  return (
    <footer className="border-t border-[#f0f0f0] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center md:text-left mb-9 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-[#111111] mb-3">
            Let&apos;s work together
          </h2>
          <p className="text-[#707072] mb-6 max-w-md mx-auto md:mx-0">
            Have a project in mind? I&apos;d love to hear about it. Reach out and
            let&apos;s build something great.
          </p>
          <button
            onClick={copyCta}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] text-white text-sm font-medium rounded-full hover:bg-[#1151ff] transition-colors cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {ctaCopied ? "Copied!" : site.email}
          </button>
        </div>

        <div className="h-px bg-[#f0f0f0] mb-8" />

        <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-2 mb-8">
          <span className="flex items-center gap-x-2 md:gap-x-6">
            <button
              onClick={copySocial}
              className="group relative text-sm text-[#707072] hover:text-[#111111] transition-colors tracking-hover cursor-pointer"
            >
              {socialCopied ? "Copied!" : "Email"}
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#111111] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <span className="text-[#cacacb] select-none">·</span>
          </span>
          {links.map((link, i) => (
            <span key={link.label} className="flex items-center gap-x-2 md:gap-x-6">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-sm text-[#707072] hover:text-[#111111] transition-colors tracking-hover"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#111111] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              {i < links.length - 1 && (
                <span className="text-[#cacacb] select-none">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="h-px bg-[#f0f0f0] mb-6" />

        <div className="flex flex-row items-center justify-between gap-2">
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
