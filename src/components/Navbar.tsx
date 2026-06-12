"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#f0f0f0]">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-[family-name:var(--font-display)] font-semibold tracking-tight"
        >
          JS
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/#projects"
            className="text-[#888] hover:text-black transition-colors"
          >
            projects
          </Link>
          <Link
            href="/about"
            className="text-[#888] hover:text-black transition-colors"
          >
            about
          </Link>
          <Link
            href="/beyond"
            className="text-[#888] hover:text-black transition-colors"
          >
            beyond
          </Link>
          <a
            href="/resume.pdf"
            download
            className="text-[#888] hover:text-black transition-colors"
          >
            resume
          </a>
          <a
            href="mailto:jaisankhla0771@gmail.com"
            className="text-[#888] hover:text-black transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
