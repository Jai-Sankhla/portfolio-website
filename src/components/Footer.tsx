"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#f0f0f0]">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <p className="text-sm text-[#888]">
          Designed &amp; built by Jai Sankhla &copy; 2025
        </p>
        <Link
          href="/"
          className="text-sm font-[family-name:var(--font-display)] font-semibold tracking-tight text-black"
        >
          JS
        </Link>
      </div>
    </footer>
  );
}
