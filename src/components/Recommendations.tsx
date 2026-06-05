"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const recommendations = [
  {
    name: "Saswata Subhra Sengupta",
    company: "Sierra Living Concepts",
    avatar: "/images/reviewer-1.jpeg",
    text: "Working with Jai at Sierra Living Concepts, I've seen firsthand how his design interventions directly improved user journeys and lifted conversion rates. From simplifying product flows to crafting scalable design systems, his work has consistently turned insights into measurable impact.\n\nWhat sets Jai apart is his ability to align UX improvements with growth metrics — ensuring every design choice serves both the customer and the business. He's a dependable partner who makes complex problems feel simple and always drives results.",
  },
  {
    name: "Archi Kashmiriya",
    company: "Nirva Health",
    avatar: "/images/reviewer-2.jpeg",
    text: "I had the pleasure of mentoring Jai during his internship with us two years ago.\n\nJai stood out not just for his strong design skills but also for his go-getter attitude and problem-solving mindset. He never approached challenges with hesitation; instead, he looked for practical solutions and carried them through with persistence.\n\nWhat impressed me most was his work ethic — reliable, self-driven, and always willing to put in the extra effort to deliver quality outcomes. He's the kind of designer who doesn't just contribute, he elevates the entire standard of work around him.\n\nI would highly recommend Jai for any team looking for someone who brings not only design expertise but also the determination, initiative, and professionalism to make a real impact.",
  },
  {
    name: "Pranav Mehta",
    company: "Caffena Coffee",
    avatar: "/images/reviewer-3.jpeg",
    text: "I highly recommend Jai for his exceptional work as a Graphic Designer and Digital Marketing Intern at Saimex Group of Companies and Caffena Coffee.\n\nHe successfully managed all social media handles, and created captivating designs for product flyers, master catalogue, brochures, and website designs. Jai's contributions extended to the IHE Expo 2022, where he showcased his talent by designing various graphics.\n\nHis rapid prototyping skills, effective communication, and self-motivated attitude were commendable. Jai's dedication to learning new tools and collaborating with team members made him a valuable asset. Even after his internship, he continued to impress us with his freelance projects.",
  },
  {
    name: "Shivansh Chawla",
    company: "Saimex Group Of Companies",
    avatar: "/images/reviewer-4.jpeg",
    text: "I had the chance to manage Jai during a period where I was working with multiple Interns in a very fast paced environment. During that period we had some very important projects including a whole exhibition with very short deadlines.\n\nIn this period where most people in his position would fold, Jai worked with the team tirelessly and took initiatives to make things better consistently. This was fueled by his urge to always learn more and ask questions to better understand the project.\n\nBeyond his impressive professional capabilities though, what stands out most about Jai to me is his ability to uplift team morale. And for me that makes him an invaluable trump card for any team he is on.",
  },
];

export default function Recommendations() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl text-[#060F15] mb-8">
            Recommendations
          </h2>
        </motion.div>

        <div className="space-y-6">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FFFFFF] rounded-2xl border border-[#e5e5e2] overflow-hidden hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex flex-col">
                  <h3 className="font-serif text-lg text-[#060F15] mb-1">
                    {rec.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <LinkedinIcon size={14} />
                    <span className="text-xs text-[#5E6673]">{rec.company}</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm -mr-2 shrink-0">
                  <Image
                    src={rec.avatar}
                    alt={rec.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="px-6 pb-4">
                <div
                  className={`text-sm text-[#5E6673] leading-relaxed whitespace-pre-line ${
                    expanded !== i ? "line-clamp-3" : ""
                  }`}
                >
                  {rec.text}
                </div>

                <button
                  onClick={() =>
                    setExpanded(expanded === i ? null : i)
                  }
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#224D0F] mt-2 hover:opacity-70 transition-opacity"
                >
                  {expanded === i ? "View less" : "View more"}
                  <motion.span
                    animate={{ rotate: expanded === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
