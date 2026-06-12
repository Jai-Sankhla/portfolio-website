import type { Metadata } from "next";
import { DM_Sans, Inter, Fragment_Mono } from "next/font/google";
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

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaisankhla.dev"),
  title: "Jai Sankhla — Product Designer",
  description:
    "UX/Product Designer specializing in building complex products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaisankhla.dev",
    siteName: "Jai Sankhla",
    title: "Jai Sankhla — Product Designer",
    description:
      "UX/Product Designer specializing in building complex products.",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Jai Sankhla — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jai Sankhla — Product Designer",
    description:
      "UX/Product Designer specializing in building complex products.",
    images: ["/images/avatar.jpg"],
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
      className={`${dmSans.variable} ${inter.variable} ${fragmentMono.variable}`}
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
