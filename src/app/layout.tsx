import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundGlobe from "@/components/BackgroundGlobe";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WallNews Trust Hub - Building Transparency in AI News",
    template: "%s | WallNews Trust Hub",
  },
  description: "Discover how WallNews uses AI-powered trust indicators to ensure transparency, accuracy, and credibility in news. Join the movement for trustworthy journalism.",
  keywords: ["news trust", "AI news", "media transparency", "bias detection", "journalism standards", "WallNews", "trust indicators"],
  authors: [{ name: "WallNews" }],
  openGraph: {
    title: "WallNews Trust Hub - Building Transparency in AI News",
    description: "AI-powered trust indicators for transparent, credible news.",
    url: "https://trust.wallnews.com",
    siteName: "WallNews Trust Hub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WallNews Trust Hub",
    description: "Building transparency in AI-powered news",
    creator: "@willwallnews",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <BackgroundGlobe />
        <Header />
        <main className="relative z-10 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
