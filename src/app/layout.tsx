import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaisankhla.dev"),
  title: "Jai Sankhla — Product Designer & UI/UX Specialist",
  description:
    "University Gold Medalist Product Designer crafting enterprise-grade digital experiences. Expert in UX strategy, design systems, and conversion optimization.",
  keywords: [
    "Product Designer", "UI/UX Designer", "Jai Sankhla",
    "Portfolio", "Design System", "UX Strategy",
    "Fintech Design", "E-commerce Design", "Indian Designer",
  ],
  authors: [{ name: "Jai Sankhla" }],
  creator: "Jai Sankhla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaisankhla.dev",
    siteName: "Jai Sankhla",
    title: "Jai Sankhla — Product Designer & UI/UX Specialist",
    description:
      "University Gold Medalist Product Designer crafting enterprise-grade digital experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jai Sankhla — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Sankhla — Product Designer",
    description:
      "University Gold Medalist Product Designer crafting enterprise-grade digital experiences.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/images/avatar.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
