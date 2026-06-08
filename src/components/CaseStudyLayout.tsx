"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Copy, Phone, Download, Check } from "lucide-react";
import { useState } from "react";
import type { CaseStudy } from "@/data/case-studies";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
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

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
      }}
    />
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
      label: copiedEmail ? "Copied!" : "jaisankhla0771@gmail.com",
      icon: copiedEmail ? Check : Copy,
      onClick: () => copyToClipboard("jaisankhla0771@gmail.com", "email"),
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
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
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
          <p className="text-sm md:text-base text-[#A3A3A3] mb-8 max-w-md">
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
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-sm font-medium text-white hover:bg-white/20 transition-all duration-200"
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
                      ? "bg-white text-[#0A0A0A] border-white hover:bg-white/90"
                      : "bg-white/10 border-white/10 text-white hover:bg-white/20"
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
    <div className="text-center p-5 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]">
      <div className="font-bold text-2xl md:text-3xl text-[#0A0A0A] mb-1 font-[family-name:var(--font-dm-sans)]">{value}</div>
      <div className="text-xs text-[#737373] leading-snug">{label}</div>
    </div>
  );
}

export default function CaseStudyLayout({ caseStudy }: { caseStudy: CaseStudy }) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <ReadingProgress />
      <nav className="bg-white/80 backdrop-blur-xl border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#0A0A0A] transition-colors"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <span className="text-xs text-[#A3A3A3] hidden sm:block">
            {caseStudy.client}
          </span>
        </div>
      </nav>

      <article className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[21/9] bg-white shadow-elevated border border-[#E5E5E5] relative">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
                width={1200}
                height={520}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-wider text-[#737373] bg-[#F5F5F5] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-2xl md:text-4xl text-[#0A0A0A] mb-4 leading-snug font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
              {caseStudy.title}
            </h1>

            <p className="text-sm md:text-base text-[#737373] leading-relaxed mb-8 max-w-3xl">
              {caseStudy.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12 p-5 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]">
              <DetailItem label="Client" value={caseStudy.client} />
              <DetailItem label="My Role" value={caseStudy.role} />
              <DetailItem label="Industry" value={caseStudy.industry} />
              <DetailItem label="Platform" value={caseStudy.platform} />
              <DetailItem label="Timeline" value={caseStudy.timeline} />
            </div>
          </motion.div>

          <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-10">
            <div className="min-w-0">
              {caseStudy.sections.map((section, sIdx) => (
                <motion.div
                  key={section.heading}
                  id={`section-${sIdx}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={sectionVariants}
                  className="mb-12 last:mb-0 scroll-mt-24"
                >
                  <h2 className="text-xl md:text-2xl text-[#0A0A0A] mb-6 font-[family-name:var(--font-dm-sans)] font-medium tracking-tight">
                    {section.heading}
                  </h2>

                  <div className="space-y-5">
                    {section.items.map((item, iIdx) => {
                      if (item.type === "text" && item.content) {
                        return (
                          <p key={iIdx} className="text-sm md:text-base text-[#737373] leading-relaxed">
                            {item.content}
                          </p>
                        );
                      }

                      if (item.type === "quote" && item.quote) {
                        return (
                          <blockquote
                            key={iIdx}
                            className="border-l-2 border-[#6366F1] pl-5 py-2 my-6 bg-gradient-to-r from-[#6366F1]/5 to-transparent rounded-r-xl"
                          >
                            <p className="text-sm md:text-base text-[#0A0A0A] italic leading-relaxed">
                              &ldquo;{item.quote}&rdquo;
                            </p>
                            {item.author && (
                              <cite className="text-xs text-[#737373] not-italic mt-2 block">
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
                            <div
                              className="rounded-xl overflow-hidden border border-[#E5E5E5] shadow-card cursor-pointer transition-all duration-300 hover:shadow-elevated"
                              onClick={() => setLightbox(item.image!.src)}
                            >
                              <Image
                                src={item.image.src}
                                alt={item.image.alt}
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                              />
                            </div>
                            {item.image.caption && (
                              <figcaption className="text-xs text-[#737373] mt-2 text-center">
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
                                <div
                                  className="rounded-xl overflow-hidden border border-[#E5E5E5] shadow-card cursor-pointer transition-all duration-300 hover:shadow-elevated"
                                  onClick={() => setLightbox(img.src)}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto object-cover"
                                  />
                                </div>
                                {img.caption && (
                                  <figcaption className="text-xs text-[#737373] mt-2 text-center">
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
                            <div className="rounded-xl overflow-hidden border border-[#E5E5E5] shadow-card aspect-video">
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

            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#A3A3A3]">
                  On this page
                </p>
                <nav className="space-y-1.5">
                  {caseStudy.sections.map((section, sIdx) => (
                    <a
                      key={section.heading}
                      href={`#section-${sIdx}`}
                      className="block text-xs text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors py-1 truncate"
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </article>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full max-h-[90vh]"
          >
            <Image
              src={lightbox}
              alt="Enlarged view"
              width={1200}
              height={900}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      )}

      <ContactSection />
    </>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-[#737373] mb-0.5">
        {label}
      </div>
      <div className="text-sm text-[#0A0A0A]">{value}</div>
    </div>
  );
}
