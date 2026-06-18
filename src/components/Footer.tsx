"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#cacacb] dark:border-[#2a2a2a] relative">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div>
            <Link
              href="/"
              className="text-base font-[family-name:var(--font-race)] font-semibold tracking-wider uppercase"
            >
              {site.initials}
            </Link>
            <p className="text-sm text-[#8B8B9E] mt-1">{site.role}</p>
          </div>
          <div>
            <p className="text-xs text-[#8B8B9E] font-medium uppercase tracking-wider mb-3">
              Race Results
            </p>
            <div className="flex flex-col gap-2">
              {site.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#8B8B9E] hover:text-[#E10600] transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-xs text-[#8B8B9E] font-medium uppercase tracking-wider mb-3">
              Paddock Club
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8B8B9E] hover:text-[#E10600] transition-colors w-fit"
              >
                LinkedIn
              </a>
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8B8B9E] hover:text-[#E10600] transition-colors w-fit"
              >
                X / Twitter
              </a>
              <a
                href={site.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8B8B9E] hover:text-[#E10600] transition-colors w-fit"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[#cacacb] dark:border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8B8B9E]">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#8B8B9E] tabular-nums font-mono uppercase tracking-wider">
              ⏱ {new Date().getFullYear() - 2019}+ seasons
            </span>
            <Link
              href={`mailto:${site.email}`}
              className="text-xs text-[#8B8B9E] hover:text-[#E10600] transition-colors"
            >
              {site.email}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
