import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import GhostMonogram from "@/components/GhostMonogram";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";

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
  title: "Jai Sankhla — Product Designer",
  description: "Product Designer specializing in building complex products.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaisankhla.dev",
    siteName: "Jai Sankhla",
    title: "Jai Sankhla — Product Designer",
    description: "Product Designer specializing in building complex products.",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Jai Sankhla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Sankhla — Product Designer",
    description: "Product Designer specializing in building complex products.",
    images: ["/images/avatar.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FW2RC2ZW83" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FW2RC2ZW83');
          `}
        </Script>
        <Navbar />
        <ReadingProgress />
        <CursorGlow />
        <GhostMonogram />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
