import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ghaith Alkawadri (@DevWebeloper) — Systems-to-Pixels Architect",
  description:
    "Interactive 3D & WebGL Portfolio of Ghaith Alkawadri. Senior Web & Systems Engineer: 1M+ Android ROM downloads on XDA, creator of Aura Glass GNOME suite, and architect of high-traffic platforms (HRF, Oslo Freedom Forum, JAR Capital, GT-AI).",
  keywords: [
    "Ghaith Alkawadri",
    "DevWebeloper",
    "Full-Stack Engineer",
    "Senior Frontend Developer",
    "Creative Technologist",
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
    title: "Ghaith Alkawadri (@DevWebeloper) — Systems-to-Pixels Architect",
    description:
      "I can make it happen. Low-level Android systems hacker turned high-traffic web architect.",
    url: "https://github.com/DevWebeloper",
    siteName: "Ghaith Alkawadri Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaith Alkawadri — Systems-to-Pixels Architect",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030508] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
