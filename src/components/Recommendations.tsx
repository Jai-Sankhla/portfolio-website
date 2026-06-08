"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const recommendations = [
  {
    name: "Saswata Subhra Sengupta",
    company: "Sierra Living Concepts",
    role: "Sr. Product Manager",
    avatar: "/images/reviewer-1.jpeg",
    text: "Working with Jai at Sierra Living Concepts, I've seen firsthand how his design interventions directly improved user journeys and lifted conversion rates. From simplifying product flows to crafting scalable design systems, his work has consistently turned insights into measurable impact.\n\nWhat sets Jai apart is his ability to align UX improvements with growth metrics — ensuring every design choice serves both the customer and the business. He's a dependable partner who makes complex problems feel simple and always drives results.",
  },
  {
    name: "Archi Kashmiriya",
    company: "Nirva Health",
    role: "Mentor & Design Lead",
    avatar: "/images/reviewer-2.jpeg",
    text: "I had the pleasure of mentoring Jai during his internship with us two years ago.\n\nJai stood out not just for his strong design skills but also for his go-getter attitude and problem-solving mindset. He never approached challenges with hesitation; instead, he looked for practical solutions and carried them through with persistence.\n\nWhat impressed me most was his work ethic — reliable, self-driven, and always willing to put in the extra effort to deliver quality outcomes. He's the kind of designer who doesn't just contribute, he elevates the entire standard of work around him.",
  },
  {
    name: "Pranav Mehta",
    company: "Caffena Coffee",
    role: "Marketing Director",
    avatar: "/images/reviewer-3.jpeg",
    text: "I highly recommend Jai for his exceptional work as a Graphic Designer and Digital Marketing Intern at Saimex Group of Companies and Caffena Coffee.\n\nHe successfully managed all social media handles, and created captivating designs for product flyers, master catalogue, brochures, and website designs. Jai's contributions extended to the IHE Expo 2022, where he showcased his talent by designing various graphics.\n\nHis rapid prototyping skills, effective communication, and self-motivated attitude were commendable.",
  },
  {
    name: "Shivansh Chawla",
    company: "Saimex Group Of Companies",
    role: "Team Lead",
    avatar: "/images/reviewer-4.jpeg",
    text: "I had the chance to manage Jai during a period where I was working with multiple Interns in a very fast paced environment. During that period we had some very important projects including a whole exhibition with very short deadlines.\n\nIn this period where most people in his position would fold, Jai worked with the team tirelessly and took initiatives to make things better consistently. This was fueled by his urge to always learn more and ask questions to better understand the project.\n\nBeyond his impressive professional capabilities though, what stands out most about Jai to me is his ability to uplift team morale.",
  },
];

export default function Recommendations() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Recommendations
          </h2>
        </motion.div>

        <div className="space-y-5">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                      <Image
                        src={rec.avatar}
                        alt={rec.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0A0A0A]">
                        {rec.name}
                      </h3>
                      <p className="text-xs text-[#737373]">{rec.role} · {rec.company}</p>
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A3A3A3] shrink-0 mt-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>

                <div
                  className={`text-sm text-[#737373] leading-relaxed whitespace-pre-line ${
                    expanded !== i ? "line-clamp-3" : ""
                  }`}
                >
                  {rec.text}
                </div>

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#6366F1] mt-3 hover:opacity-70 transition-opacity"
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
