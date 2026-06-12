"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Beyond() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-[640px] mx-auto px-6">
          <h1 className="text-xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-black mb-6">
            Beyond
          </h1>

          <p className="text-sm text-[#888] leading-relaxed">
            While I spend most of my time designing digital experiences, I also enjoy working on side projects, exploring new tools, and staying curious about how things work. Whether it&apos;s prototyping ideas, experimenting with design systems, or learning about AI-assisted workflows, I enjoy bringing ideas to life in ways that go beyond the screen.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
