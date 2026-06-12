"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E4DE] dark:border-[#2A2826] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#8A8680]">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#8A8680] hover:text-[#2D2D2D] dark:hover:text-[#F0EDE8] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={site.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#8A8680] hover:text-[#2D2D2D] dark:hover:text-[#F0EDE8] transition-colors"
          >
            X / Twitter
          </a>
          <Link
            href="/contact"
            className="text-sm text-[#2D2D2D] dark:text-[#F0EDE8] underline underline-offset-4 decoration-[#D4D0CA] dark:decoration-[#3A3836] hover:decoration-[#F4A259] transition-all"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}
