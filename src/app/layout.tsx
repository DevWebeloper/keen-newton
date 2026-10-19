import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const description =
  "Ghaith Alkawadri is a remote web developer in Egypt who builds custom WordPress themes and front-ends for clients in Geneva, Paris, Oslo and New York.";

export const metadata: Metadata = {
  title: "Ghaith Alkawadri, web developer",
  description,
  authors: [{ name: "Ghaith Alkawadri", url: "https://github.com/DevWebeloper" }],
  openGraph: {
    title: "Ghaith Alkawadri, web developer",
    description,
    url: "https://devwebeloper.com",
    siteName: "Ghaith Alkawadri",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
