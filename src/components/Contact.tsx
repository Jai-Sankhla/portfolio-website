"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, FileText } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const contacts = [
  {
    label: "Copy mail",
    value: "jaisankhla0771@gmail.com",
    icon: Mail,
    type: "copy" as const,
  },
  {
    label: "Copy phone",
    value: "+91 00000 00000",
    icon: Phone,
    type: "copy" as const,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/jaisankhla",
    icon: LinkedinIcon,
    type: "link" as const,
  },
  {
    label: "X / Twitter",
    value: "https://x.com/JaiSankhla2",
    icon: XIcon,
    type: "link" as const,
  },
  {
    label: "Resume",
    value: "/resume.pdf",
    icon: FileText,
    type: "download" as const,
  },
];

export default function Contact() {
  const handleClick = useCallback(
    (contact: (typeof contacts)[number]) => {
      if (contact.type === "copy") {
        navigator.clipboard.writeText(contact.value);
        alert("Copied to clipboard!");
      } else if (contact.type === "link") {
        window.open(contact.value, "_blank", "noopener");
      } else if (contact.type === "download") {
        window.open(contact.value, "_blank");
      }
    },
    []
  );

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl md:text-3xl text-black mb-8 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {contacts.map((contact, i) => (
            <motion.button
              key={contact.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              onClick={() => handleClick(contact)}
              className="flex items-center justify-between gap-2 px-4 py-3.5 bg-white rounded-xl border border-[#DEDEDE] hover:bg-[#F5F5F5] hover:border-black/20 transition-all group text-left shadow-multi"
            >
              <span className="text-sm font-medium text-black truncate">
                {contact.label}
              </span>
              <contact.icon
                size={16}
                className="text-[#545454] group-hover:text-black shrink-0 transition-colors"
              />
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xs text-[#828282] mt-8"
        >
          Or email me directly at{" "}
          <a
            href="mailto:jaisankhla0771@gmail.com"
            className="text-black hover:underline"
          >
            jaisankhla0771@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
