"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#f5f5f5] dark:border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div>
            <Link href="/" className="text-base font-[family-name:var(--font-display)] font-semibold tracking-tight">
              {site.initials}
            </Link>
            <p className="text-sm text-[#707072] mt-1">{site.role}</p>
          </div>
          <div>
            <p className="text-xs text-[#707072] font-medium uppercase tracking-wider mb-3">Navigation</p>
            <div className="flex flex-col gap-2">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#707072] hover:text-[#1151ff] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs text-[#707072] font-medium uppercase tracking-wider mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#707072] hover:text-[#1151ff] hover:-translate-y-0.5 transition-all duration-300 w-fit"
              >
                LinkedIn
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#707072] hover:text-[#1151ff] hover:-translate-y-0.5 transition-all duration-300 w-fit"
              >
                X / Twitter
              </a>
              <a
                href={site.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#707072] hover:text-[#1151ff] hover:-translate-y-0.5 transition-all duration-300 w-fit"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[#f5f5f5] dark:border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#707072]">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <Link
            href={`mailto:${site.email}`}
            className="text-xs text-[#707072] hover:text-[#1151ff] transition-colors"
          >
            {site.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
