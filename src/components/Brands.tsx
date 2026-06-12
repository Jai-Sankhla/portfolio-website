"use client";

const brands = [
  "Sierra Living Concepts",
  "Nirva Health",
  "10kdesigners",
  "Caffena Coffee",
];

export default function Brands() {
  return (
    <section className="py-16 border-t border-[#f0f0f0]">
      <div className="max-w-[640px] mx-auto px-6">
        <p className="text-sm text-[#888] mb-6">worked with over 4 brands</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-sm text-black font-[family-name:var(--font-display)] font-medium"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
