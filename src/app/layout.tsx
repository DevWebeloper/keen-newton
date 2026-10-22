import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const description =
  "Ghaith Alkawadri is a remote software developer in Egypt: web front-ends, WordPress sites and open-source Linux software in Python and GTK4.";

export const metadata: Metadata = {
  title: "Ghaith Alkawadri, software developer",
  description,
  authors: [{ name: "Ghaith Alkawadri", url: "https://github.com/DevWebeloper" }],
  openGraph: {
    title: "Ghaith Alkawadri, software developer",
    description,
    url: "https://devwebeloper.github.io/keen-newton/",
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
