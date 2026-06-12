"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { recommendations } from "@/data/recommendations";

const timeline = [
  {
    period: "2024",
    items: [
      "Lead UI/UX Designer at Sierra Living Concepts",
      "Redesigned e-commerce platform achieving +120% ad-to-purchase conversion",
    ],
  },
  {
    period: "2023",
    items: [
      "Product Designer Intern at Nirva Health",
      "Built gamification system driving 2x daily engagement",
    ],
  },
  {
    period: "2022",
    items: [
      "Product Designer (Cohort 6) at 10kdesigners",
      "Designed Budgify end-to-end for expense tracking",
    ],
  },
  {
    period: "2021 - 2020",
    items: [
      "Graphic Designer at Caffena Coffee & Saimex Group",
      "Gold Medalist in Interior Design — graduated top of class",
    ],
  },
];

const toolkit = [
  "Figma", "Miro", "Photoshop", "Notion", "Framer",
  "Marvel", "Lovable", "Jitter", "Whimsical", "Uizard",
  "Maze", "Hotjar", "FigJam", "Replit",
];

const capabilities = [
  "User Research", "Wireframing", "Prototyping", "Design System",
  "Information Architecture", "Responsive Design", "UX Strategy",
  "Conversion Optimization", "Visual Design",
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jaisankhla0771@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-[640px] mx-auto px-6">
          <h1 className="text-xl font-[family-name:var(--font-display)] font-semibold tracking-tight text-black mb-6">
            Jai Sankhla
          </h1>

          <p className="text-sm text-[#888] leading-relaxed mb-6">
            I&apos;m a multidisciplinary Product Designer based in India, specializing in UX and creating impactful, user-centered experiences. With a background in interior design and digital design, I balance form and function while bringing a unique perspective to every project.
          </p>

          <p className="text-sm text-[#888] leading-relaxed mb-6">
            Though UX is my primary focus, my practice goes <Link href="/beyond" className="underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all">beyond</Link> the screens to working with strategy and systems thinking.
          </p>

          <div className="mb-12">
            <p className="text-sm text-[#888] mb-2">
              Feel free to email me @, jaisankhla0771@gmail.com
            </p>
            <button
              onClick={copyEmail}
              className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
            >
              {copied ? "Copied to Clipboard" : "Copy to Clipboard"}
            </button>
            <span className="text-[#dcdcdc] mx-3">|</span>
            <a
              href="https://www.linkedin.com/in/jaisankhla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
            >
              LinkedIn
            </a>
          </div>

          <section className="mb-12 pt-12 border-t border-[#f0f0f0]">
            <h2 className="text-sm text-[#888] mb-8">my journey</h2>
            {timeline.map((entry) => (
              <div key={entry.period} className="mb-8 last:mb-0">
                <p className="text-sm text-black font-semibold mb-3">
                  {entry.period}
                </p>
                <ul className="space-y-1.5">
                  {entry.items.map((item, i) => (
                    <li key={i} className="text-sm text-[#888]">
                      {i === 0 ? (
                        <span className="text-black font-medium">{item}</span>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mb-12 pt-12 border-t border-[#f0f0f0]">
            <h2 className="text-sm text-[#888] mb-6">my design toolkit</h2>
            <div className="flex flex-wrap gap-3">
              {toolkit.map((tool) => (
                <span
                  key={tool}
                  className="text-sm text-black bg-[#fafafa] border border-[#f0f0f0] px-3 py-1.5 rounded-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-12 pt-12 border-t border-[#f0f0f0]">
            <h2 className="text-sm text-[#888] mb-6">capabilities</h2>
            <div className="space-y-6">
              {capabilities.map((cap) => (
                <div key={cap}>
                  <h3 className="text-sm text-black font-medium mb-1">
                    {cap}
                  </h3>
                  <p className="text-sm text-[#888]">
                    {cap === "User Research" && "Discover what your users need to shape better design decisions."}
                    {cap === "Wireframing" && "Visualize the product's structure & key interactions before handoff."}
                    {cap === "Prototyping" && "Test ideas for real & live experience with actual interactions."}
                    {cap === "Design System" && "Build a unified design language for consistency and efficiency."}
                    {cap === "Information Architecture" && "Organize content so users can find what they need effortlessly."}
                    {cap === "Responsive Design" && "Ensure your product looks and works great on any device."}
                    {cap === "UX Strategy" && "Align design decisions with business goals and user needs."}
                    {cap === "Conversion Optimization" && "Design data-driven interfaces that improve key metrics."}
                    {cap === "Visual Design" && "Create polished, engaging interfaces with strong visual hierarchy."}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-12 border-t border-[#f0f0f0]">
            <h2 className="text-sm text-[#888] mb-8">recommendations</h2>
            <div className="space-y-8">
              {recommendations.map((rec, i) => (
                <RecommendationCard key={rec.name} rec={rec} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function RecommendationCard({
  rec,
  index,
}: {
  rec: (typeof recommendations)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-[#fafafa]">
          <Image
            src={rec.avatar}
            alt={rec.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm text-black font-semibold">{rec.name}</h3>
          <p className="text-xs text-[#888]">
            {rec.role} &middot; {rec.company}
          </p>
        </div>
      </div>
      <div
        className={`text-sm text-[#888] leading-relaxed whitespace-pre-line ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {rec.text}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all mt-1.5"
      >
        {expanded ? "View less" : "View more"}
      </button>
    </div>
  );
}
