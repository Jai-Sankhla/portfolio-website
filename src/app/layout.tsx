import type { Metadata } from "next";
import { Inter, Averia_Serif_Libre, Inria_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const averiaSerif = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
  display: "swap",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jai Sankhla | Product Designer",
  description:
    "University Gold Medalist • Product Designer • Always curious how things can work better.",
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
      className={`${inter.variable} ${averiaSerif.variable} ${inriaSerif.variable}`}
    >
      <body className="min-h-screen" suppressHydrationWarning>{children}</body>
    </html>
  );
}
