import type { Metadata } from "next";
import { DM_Sans, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import PitWallNavbar from "@/components/PitWallNavbar";
import Footer from "@/components/Footer";
import RacetrackCanvas from "@/components/RacetrackCanvas";

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

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaisankhla.dev"),
  title: "Jai Sankhla — Product Designer",
  description: "Product Designer specializing in building complex products.",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${inter.variable} ${oswald.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <PitWallNavbar />
          <RacetrackCanvas />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
