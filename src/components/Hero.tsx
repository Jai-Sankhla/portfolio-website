"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-[640px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CC362] opacity-50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7CC362] shadow-[0_0_12px_rgba(124,195,98,0.4)]" />
          </span>
          <span className="text-sm text-[#7CC362] font-medium">
            Available for work
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl leading-snug font-[family-name:var(--font-display)] font-semibold tracking-tight text-black mb-5">
          Hey. I am Jai,
          <br />
          Product Designer specializing in building complex products.
        </h1>

        <p className="text-[#888] text-base leading-relaxed mb-8">
          With experience building across industries, I help teams simplify workflows, scale products, and deliver real-world solutions.
        </p>

        <Link
          href="/about"
          className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
        >
          Know More
        </Link>
      </div>
    </section>
  );
}
