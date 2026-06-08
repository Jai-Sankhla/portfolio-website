"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Copy, Phone, Download, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { CaseStudy } from "@/data/case-studies";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

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

function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch {}
  };

  const actions = [
    {
      label: copiedEmail ? "Copied!" : "jai.sankhla2002@gmail.com",
      icon: copiedEmail ? Check : Copy,
      onClick: () => copyToClipboard("jai.sankhla2002@gmail.com", "email"),
      highlight: true,
    },
    {
      label: copiedPhone ? "Copied!" : "+91 00000 00000",
      icon: copiedPhone ? Check : Phone,
      onClick: () => copyToClipboard("+91 00000 00000", "phone"),
    },
    {
      label: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/jaisankhla",
    },
    {
      label: "X / Twitter",
      icon: XIcon,
      href: "https://x.com/jaisankhla",
    },
    {
      label: "Resume",
      icon: Download,
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-black border-t border-[#DEDEDE]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl md:text-3xl text-white mb-2 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="text-sm md:text-base text-[#828282] mb-8 max-w-md">
            Have a project in mind or just want to say hi? Reach out — I&apos;m always open to interesting conversations.
          </p>
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => {
              const Icon = action.icon;
              if (action.href) {
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.download ? undefined : "_blank"}
                    rel={action.download ? undefined : "noopener noreferrer"}
                    download={action.download || undefined}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#DEDEDE] text-sm font-medium text-black hover:border-black/30 hover:shadow-multi transition-all duration-200"
                  >
                    <Icon size={16} />
                    {action.label}
                  </a>
                );
              }
              return (
                <button
                  key={action.label}
                  onClick={action.onClick}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    action.highlight
                      ? "bg-white text-black border-white hover:bg-white/90"
                      : "bg-white border-[#DEDEDE] text-black hover:border-black/30 hover:shadow-multi"
                  }`}
                >
                  <Icon size={16} />
                  {action.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-5 rounded-2xl bg-[#FAFAFA] border border-[#DEDEDE]">
      <div className="font-bold text-2xl md:text-3xl text-black mb-1">{value}</div>
      <div className="text-xs text-[#545454] leading-snug">{label}</div>
    </div>
  );
}

export default function CaseStudyLayout({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <nav className="bg-white/80 backdrop-blur-xl border-b border-[#DEDEDE] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-[#545454] hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </nav>

      <article className="bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[21/9] bg-white shadow-multi border border-[#DEDEDE] relative">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                width={1200}
                height={520}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wider text-[#545454] bg-[#DEDEDE]/50 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl md:text-4xl text-black mb-4 leading-snug font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
              {caseStudy.title}
            </h1>

            <p className="text-sm md:text-base text-[#545454] leading-relaxed mb-8 max-w-3xl">
              {caseStudy.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 p-5 rounded-2xl bg-[#FAFAFA] border border-[#DEDEDE]">
              <DetailItem label="Client" value={caseStudy.client} />
              <DetailItem label="My Role" value={caseStudy.role} />
              <DetailItem label="Industry" value={caseStudy.industry} />
              <DetailItem label="Platform" value={caseStudy.platform} />
              <DetailItem label="Timeline" value={caseStudy.timeline} />
            </div>
          </motion.div>

          {caseStudy.sections.map((section, sIdx) => (
            <motion.div
              key={section.heading}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-xl md:text-2xl text-black mb-6 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
                {section.heading}
              </h2>

              <div className="space-y-5">
                {section.items.map((item, iIdx) => {
                  if (item.type === "text" && item.content) {
                    return (
                      <p key={iIdx} className="text-sm md:text-base text-[#545454] leading-relaxed">
                        {item.content}
                      </p>
                    );
                  }

                  if (item.type === "quote" && item.quote) {
                    return (
                      <blockquote
                        key={iIdx}
                        className="border-l-2 border-black pl-5 py-2 my-6"
                      >
                        <p className="text-sm md:text-base text-black italic leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        {item.author && (
                          <cite className="text-xs text-[#545454] not-italic mt-2 block">
                            — {item.author}
                          </cite>
                        )}
                      </blockquote>
                    );
                  }

                  if (item.type === "metrics" && item.metrics) {
                    return (
                      <div
                        key={iIdx}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6"
                      >
                        {item.metrics.map((m) => (
                          <MetricBadge key={m.label} value={m.value} label={m.label} />
                        ))}
                      </div>
                    );
                  }

                  if (item.type === "image" && item.image) {
                    return (
                      <figure key={iIdx} className="my-6">
                        <div className="rounded-xl overflow-hidden border border-[#DEDEDE] shadow-multi">
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            width={800}
                            height={450}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                          />
                        </div>
                        {item.image.caption && (
                          <figcaption className="text-xs text-[#545454] mt-2 text-center">
                            {item.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }

                  if (item.type === "image-grid" && item.images) {
                    return (
                      <div
                        key={iIdx}
                        className="flex flex-col gap-8 md:gap-10 my-8 md:my-12"
                      >
                        {item.images.map((img, imgIdx) => (
                          <figure key={imgIdx}>
                            <div className="rounded-xl overflow-hidden border border-[#DEDEDE] shadow-multi">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={1200}
                                height={900}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            {img.caption && (
                              <figcaption className="text-xs text-[#545454] mt-2 text-center">
                                {img.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    );
                  }

                  if (item.type === "embed" && item.embed) {
                    return (
                      <div key={iIdx} className="my-6">
                        <div className="rounded-xl overflow-hidden border border-[#DEDEDE] shadow-multi aspect-video">
                          <iframe
                            src={item.embed.url}
                            title={item.embed.title}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </article>

      <ContactSection />
    </>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#545454] mb-0.5">
        {label}
      </div>
      <div className="text-sm text-black">{value}</div>
    </div>
  );
}
