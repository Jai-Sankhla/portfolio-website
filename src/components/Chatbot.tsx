"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";
import { caseStudies } from "@/data/case-studies";
import { recommendations } from "@/data/recommendations";

interface ChatEntry {
  keywords: string[];
  answer: string;
  quickAction?: string;
}

const knowledge: ChatEntry[] = [
  {
    keywords: ["who", "are", "you", "jai", "tell", "about", "yourself", "introduce"],
    answer: `I'm <strong>${site.name}</strong>, a <strong>${site.role}</strong> based in India. ${site.tagline}`,
    quickAction: "Who are you?",
  },
  {
    keywords: ["do", "do you", "work", "design", "role", "what", "service"],
    answer: `I'm a <strong>${site.role}</strong> who helps teams simplify workflows, scale products, and deliver real-world solutions through thoughtful, user-centered design.`,
    quickAction: "What do you do?",
  },
  {
    keywords: ["experience", "years", "background", "how long", "career"],
    answer: `I have <strong>3 years</strong> of experience as a Product Designer, working with startups and businesses to design digital products across fintech, health, and e-commerce. I'm also a <strong>10kdesigners</strong> cohort alumnus.`,
    quickAction: "Experience & skills",
  },
  {
    keywords: ["based", "where", "located", "location", "live", "india", "city"],
    answer: "I'm currently based in <strong>India</strong>.",
  },
  {
    keywords: ["available", "hire", "open", "looking", "job", "opportunity", "freelance", "work"],
    answer: '<strong>Yes, I\'m open for new roles and projects!</strong> Feel free to reach out at <a href="mailto:' + site.email + '" class="text-[#1151ff] underline">' + site.email + '</a>',
    quickAction: "Hire me?",
  },
  {
    keywords: ["project", "portfolio", "work", "built", "case", "study", "case study"],
    answer: `I've worked on <strong>5 projects</strong>:\n${caseStudies.map((cs, i) => `${i + 1}. <strong>${cs.title}</strong> — ${cs.description.split(".")[0]}.`).join("\n")}\n\nCheck them out at <a href="/work" class="text-[#1151ff] underline">/work</a>`,
    quickAction: "My projects",
  },
  {
    keywords: ["budgify", "budget", "expense", "finance", "fintech"],
    answer: `Budgify is an expense tracking app I designed end-to-end at <strong>10kdesigners</strong>. It simplifies financial tracking with easy onboarding, fast expense logging, and visual insights. My role spanned research through high-fidelity UI.`,
  },
  {
    keywords: ["nirva", "health", "wellness", "yoga", "ayurveda", "homepage", "redesign"],
    answer: `At <strong>Nirva Health</strong> (YC-backed), I redesigned the homepage — increasing first task completion by <strong>40%</strong>. I also built a gamification system that doubled daily engagement through streaks, coins, and rewards.`,
  },
  {
    keywords: ["slc", "sierra", "checkout", "cart", "ecommerce", "e-commerce", "conversion", "abandon"],
    answer: `At <strong>Sierra Living Concepts</strong>, I redesigned the cart and checkout experience. Cart abandonment dropped from 71% to <strong>45%</strong> (26pp reduction) across <strong>480k user sessions</strong>.`,
  },
  {
    keywords: ["slc", "sierra", "category", "paid", "landing", "ad", "advertising", "campaign"],
    answer: `At <strong>Sierra Living Concepts</strong>, I created a unified category and paid-landing experience. Ad-to-purchase conversion increased by <strong>+120%</strong> with a cohesive journey from ad click to checkout.`,
  },
  {
    keywords: ["skill", "tools", "expertise", "know", "tech", "stack", "software", "proficient"],
    answer: `My core toolkit: <strong>Figma, Miro, Photoshop, Notion, Framer, Marvel, Jitter, Whimsical, Uizard, Maze, Hotjar, FigJam, Replit</strong>. Always exploring new ones!`,
  },
  {
    keywords: ["capabilities", "ability", "strength", "good", "specialize"],
    answer: `I specialize in: <strong>User Research, Wireframing, Prototyping, Design Systems, Information Architecture, Responsive Design, UX Strategy, Conversion Optimization, Visual Design</strong>.`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: `You can download my resume here: <a href="${site.resume}" download class="text-[#1151ff] underline">${site.resume}</a>`,
  },
  {
    keywords: ["contact", "email", "reach", "connect", "message"],
    answer: `Shoot me an email at <a href="mailto:${site.email}" class="text-[#1151ff] underline">${site.email}</a> or connect on <a href="${site.social.linkedin}" target="_blank" class="text-[#1151ff] underline">LinkedIn</a>. I'd love to hear from you!`,
    quickAction: "Contact me",
  },
  {
    keywords: ["linkedin", "social", "profile"],
    answer: `Connect with me on <a href="${site.social.linkedin}" target="_blank" class="text-[#1151ff] underline">LinkedIn</a>`,
  },
  {
    keywords: ["twitter", "x"],
    answer: `Follow me on <a href="${site.social.twitter}" target="_blank" class="text-[#1151ff] underline">X (Twitter)</a>`,
  },
  {
    keywords: ["dribbble", "shots", "design"],
    answer: `Check out my shots on <a href="${site.social.dribbble}" target="_blank" class="text-[#1151ff] underline">Dribbble</a>`,
  },
  {
    keywords: ["testimonial", "recommend", "review", "feedback", "say", "people"],
    answer: `Here's what people say:\n\n"${recommendations[0].text.split(".")[0]}." — <strong>${recommendations[0].name}</strong>, ${recommendations[0].role} at ${recommendations[0].company}`,
  },
  {
    keywords: ["education", "learn", "study", "school", "course", "10kdesigners", "cohort"],
    answer: `I'm a <strong>10kdesigners</strong> cohort alumnus, where I was mentored by Abhinav Chhikara and Jayneil Dalal in end-to-end product design.`,
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: `Hey there! 👋 I'm Jai's virtual assistant. Ask me anything about his work, experience, or how to get in touch!`,
  },
];

function findBestMatch(input: string): string {
  const words = input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !["the", "is", "am", "are", "was", "were", "can", "you", "your", "and", "for", "with", "about", "that", "this", "have", "has", "had", "not", "but", "its", "all", "just", "more", "some", "how", "what", "why", "when", "where", "which", "who", "whom", "would", "could", "should", "does", "doing", "done", "will", "shall", "may", "might", "must", "need", "like", "know", "want", "let", "please", "tell"].includes(w))
    .map((w) => w.replace(/s$/, ""));

  if (words.length === 0) return "";

  for (const cs of caseStudies) {
    const slugWords = cs.slug.replace(/-/g, " ").toLowerCase();
    const titleWords = cs.title.toLowerCase();
    const matched = words.some(
      (w) => slugWords.includes(w) || titleWords.includes(w)
    );
    if (matched) {
      return `${cs.title} — ${cs.description.split(".")[0]}. ${cs.metric ? `<strong>Key metric:</strong> ${cs.metric.value} ${cs.metric.label}` : ""}`;
    }
  }

  let bestScore = 0;
  let bestAnswer = "";

  for (const entry of knowledge) {
    let score = 0;
    for (const word of words) {
      for (const kw of entry.keywords) {
        if (kw.includes(word) || word.includes(kw)) {
          score++;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestAnswer;
}

interface Message {
  text: string;
  isUser: boolean;
}

const quickActions = knowledge.filter((e) => e.quickAction);

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Jai's virtual assistant. Ask me anything about his work, experience, or how to reach him! 👋", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function handleSend(text: string) {
    const q = text.trim();
    if (!q) return;

    setMessages((prev) => [...prev, { text: q, isUser: true }]);
    setInput("");
    setShowQuickActions(false);
    setTyping(true);

    setTimeout(() => {
      let answer = findBestMatch(q);
      if (!answer) {
        answer = `I'm not sure about that, but feel free to email me at <a href="mailto:${site.email}" class="text-[#1151ff] underline">${site.email}</a> and I'll get back to you!`;
      }
      setMessages((prev) => [...prev, { text: answer, isUser: false }]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  }

  function handleQuickAction(answer: string) {
    const entry = knowledge.find((e) => e.answer === answer);
    const label = entry?.quickAction ?? "";
    if (label) {
      setMessages((prev) => [...prev, { text: label, isUser: true }]);
    }
    setShowQuickActions(false);
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: answer, isUser: false }]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#1151ff] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
        aria-label="Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M18 6L6 18" /><path d="M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10, x: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] max-h-[520px] bg-white dark:bg-[#151515] border border-[#f0f0f0] dark:border-[#2a2a2a] rounded-2xl shadow-xl dark:shadow-[#000]/40 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0f0f0] dark:border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="text-sm font-medium text-[#111111] dark:text-[#f5f5f5]">Ask me anything</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#9e9ea0] hover:text-[#111111] dark:hover:text-[#f5f5f5] transition-colors"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18" /><path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-[85%] ${msg.isUser ? "ml-auto" : "mr-auto"}`}
                >
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.isUser
                        ? "bg-[#1151ff] text-white rounded-br-md"
                        : "bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#111111] dark:text-[#f5f5f5] rounded-bl-md"
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[85%] mr-auto"
                >
                  <div className="px-3.5 py-3 rounded-2xl rounded-bl-md bg-[#f5f5f5] dark:bg-[#1a1a1a] flex items-center gap-1.5">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#707072]"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#707072]"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#707072]"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}

              {showQuickActions && messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, staggerChildren: 0.06 }}
                  className="pt-2 space-y-2"
                >
                  <p className="text-xs text-[#707072]">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((qa, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.06 }}
                        onClick={() => handleQuickAction(qa.answer)}
                        className="text-xs px-3 py-1.5 rounded-full border border-[#cacacb] dark:border-[#333333] text-[#707072] hover:text-[#111111] dark:hover:text-[#f5f5f5] hover:border-[#111111] dark:hover:border-[#f5f5f5] transition-all"
                      >
                        {qa.quickAction}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-3 border-t border-[#f0f0f0] dark:border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3.5 py-2 text-sm bg-[#f5f5f5] dark:bg-[#1a1a1a] rounded-full outline-none text-[#111111] dark:text-[#f5f5f5] placeholder:text-[#9e9ea0]"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="w-8 h-8 rounded-full bg-[#1151ff] text-white flex items-center justify-center disabled:opacity-40 transition-opacity flex-shrink-0"
                  aria-label="Send"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
