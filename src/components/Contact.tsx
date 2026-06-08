"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, Check, Copy } from "lucide-react";

function LinkedinIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

interface ContactItem {
  label: string;
  value: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  type: "copy" | "link" | "download";
  highlight?: boolean;
}

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contacts: ContactItem[] = [
    {
      label: "Copy email",
      value: "jaisankhla0771@gmail.com",
      icon: copiedIndex === 0 ? Check : Copy,
      type: "copy",
      highlight: true,
    },
    {
      label: "Copy phone",
      value: "+91 00000 00000",
      icon: copiedIndex === 1 ? Check : Phone,
      type: "copy",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/jaisankhla",
      icon: LinkedinIcon,
      type: "link",
    },
    {
      label: "X / Twitter",
      value: "https://x.com/JaiSankhla2",
      icon: XIcon,
      type: "link",
    },
    {
      label: "Resume",
      value: "/resume.pdf",
      icon: FileText,
      type: "download",
    },
  ];

  const handleClick = useCallback(
    async (contact: ContactItem, index: number) => {
      if (contact.type === "copy") {
        try {
          await navigator.clipboard.writeText(contact.value);
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 2000);
        } catch {}
      } else if (contact.type === "link") {
        window.open(contact.value, "_blank", "noopener");
      } else if (contact.type === "download") {
        window.open(contact.value, "_blank");
      }
    },
    []
  );

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5F5F5] border border-[#E5E5E5] text-xs font-medium rounded-full text-[#6366F1] mb-6">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl text-[#0A0A0A] font-[family-name:var(--font-dm-sans)] font-medium tracking-tight mb-4">
            Let&apos;s build something great
          </h2>
          <p className="text-base text-[#737373] max-w-md mx-auto">
            Have a project in mind or just want to say hi? I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.button
                key={contact.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => handleClick(contact, i)}
                className={`flex items-center justify-between gap-2 px-4 py-4 rounded-xl border transition-all duration-300 group text-left ${
                  contact.highlight
                    ? "bg-[#0A0A0A] border-[#0A0A0A] text-white hover:bg-[#0A0A0A]/90 hover:shadow-elevated"
                    : "bg-white border-[#E5E5E5] text-[#404040] hover:border-[#6366F1]/30 hover:shadow-card hover:text-[#0A0A0A]"
                }`}
              >
                <span className="text-sm font-medium truncate">{contact.label}</span>
                <Icon
                  size={16}
                  className={`shrink-0 transition-colors ${
                    contact.highlight ? "text-white/70" : "text-[#A3A3A3] group-hover:text-[#6366F1]"
                  }`}
                />
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
