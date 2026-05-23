import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MobileCtaBar } from "@/components/ui/mobile-cta-bar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cube86 — Operations, automation and AI for ambitious teams",
  description:
    "We help small businesses, charities and professional services reclaim hours, grow revenue and run smarter with hands-on automation and AI.",
  metadataBase: new URL("https://cube86.com"),
  openGraph: {
    title: "Cube86 — Operations, automation and AI for ambitious teams",
    description:
      "We help small businesses, charities and professional services reclaim hours, grow revenue and run smarter with hands-on automation and AI.",
    url: "https://cube86.com",
    siteName: "Cube86",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cube86 — Operations, automation and AI for ambitious teams",
    description:
      "We help small businesses, charities and professional services reclaim hours, grow revenue and run smarter.",
  },
  icons: {
    icon: [
      { url: "/cube86-favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/cube86-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/cube86-favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/cube86-favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/cube86-favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/cube86-favicon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/cube86-favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/cube86-favicon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/cube86-favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/cube86-favicon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-cream)] text-[var(--ink)]">
        {children}
        <MobileCtaBar />
      </body>
    </html>
  );
}
