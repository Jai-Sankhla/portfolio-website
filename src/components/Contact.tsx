"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jaisankhla0771@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 border-t border-[#f0f0f0]">
      <div className="max-w-[640px] mx-auto px-6">
        <p className="text-sm text-[#888] mb-4 leading-relaxed">
          Feel free to email me @, jaisankhla0771@gmail.com
        </p>
        <button
          onClick={copyEmail}
          className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
        >
          {copied ? "Copied to Clipboard" : "Copy to Clipboard"}
        </button>

        <div className="mt-10 pt-10 border-t border-[#f0f0f0]">
          <p className="text-sm text-[#888] mb-4">Other Explorations</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://www.linkedin.com/in/jaisankhla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/jaisankhla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
            >
              X / Twitter
            </a>
            <a
              href="https://dribbble.com/jaisankhla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black underline underline-offset-4 decoration-[#dcdcdc] hover:decoration-black transition-all"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
