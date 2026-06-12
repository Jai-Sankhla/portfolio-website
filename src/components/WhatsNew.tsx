"use client";

export default function WhatsNew() {
  return (
    <section className="py-16 border-t border-[#f0f0f0]">
      <div className="max-w-[640px] mx-auto px-6">
        <p className="text-sm text-[#888] mb-6">Latest</p>
        <div className="space-y-6">
          <div>
            <span className="text-xs text-[#888] font-[family-name:var(--font-mono)] uppercase tracking-wider">
              / Exploration
            </span>
            <p className="text-sm text-black mt-1.5">
              Exploring AI-assisted design workflows with Comet
            </p>
          </div>
          <div>
            <span className="text-xs text-[#888] font-[family-name:var(--font-mono)] uppercase tracking-wider">
              / New Case Study
            </span>
            <p className="text-sm text-black mt-1.5">
              Unified Category &amp; Landing Experience for Furniture Buyers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
