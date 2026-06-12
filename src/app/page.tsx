"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import WhatsNew from "@/components/WhatsNew";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <WhatsNew />
        <Projects />
        <section className="max-w-[640px] mx-auto px-6 py-16 border-t border-[#f0f0f0]">
          <p className="text-sm text-[#888] leading-relaxed">
            There&apos;s a lot more to share about me and my work, but this is a curated space showcasing what I&apos;ve done and what I can do.
          </p>
          <p className="text-sm text-[#888] leading-relaxed mt-4">
            I&apos;m driven by a design mindset that goes beyond aesthetics which aims at creating experiences with a larger impact.
          </p>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
