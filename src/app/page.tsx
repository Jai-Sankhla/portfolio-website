"use client";

import HeroSection from "@/components/HeroSection";
import ProjectStack from "@/components/ProjectStack";
import TestimonialGrid from "@/components/TestimonialGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-9 md:gap-12">
      <HeroSection />
      <ProjectStack />
      <TestimonialGrid />
    </div>
  );
}
