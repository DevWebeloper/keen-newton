import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghaith Alkawadri (DevWebeloper) — Web & Systems Engineer",
  description:
    "Senior Web & Systems Engineer. 10Y low-level DNA, 1,000,000+ Android ROM downloads on XDA, creator of Aura Glass GNOME theme, and architect of enterprise high-traffic platforms (HRF, Oslo Freedom Forum, JAR Capital).",
  keywords: [
    "Ghaith Alkawadri",
    "DevWebeloper",
    "Full-Stack Engineer",
    "Senior Frontend Developer",
    "Aura Glass",
    "NovaOS",
    "Human Rights Foundation",
    "Oslo Freedom Forum",
    "JAR Capital",
    "WordPress Expert",
    "Next.js Developer",
  ],
  authors: [{ name: "Ghaith Alkawadri", url: "https://github.com/DevWebeloper" }],
  openGraph: {
    title: "Ghaith Alkawadri (DevWebeloper) — Web & Systems Engineer",
    description:
      "I can make it happen. Low-level Android systems hacker turned high-traffic web architect.",
    url: "https://github.com/DevWebeloper",
    siteName: "Ghaith Alkawadri Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaith Alkawadri — Web & Systems Engineer",
    description:
      "From reverse-engineering GPU libraries & 1M+ downloads on XDA to high-scale enterprise platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080b11] text-slate-100">{children}</body>
    </html>
  );
}
