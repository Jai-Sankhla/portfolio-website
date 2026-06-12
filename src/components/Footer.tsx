"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#f5f5f5] dark:border-[#2a2a2a] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#707072]">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={site.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors"
          >
            X / Twitter
          </a>
          <Link
            href="/contact"
            className="text-sm text-[#111111] dark:text-[#f5f5f5] underline underline-offset-4 decoration-[#cacacb] dark:decoration-[#333333] hover:decoration-[#1151ff] transition-all"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
