import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Jax Sterling | The Engine - Elite Performance Training for Executives",
  description:
    "12-week precision performance protocols for high-performance executives. Build a body that works as hard as your brain. 30-minute functional training by Jax Sterling.",
  keywords: [
    "executive fitness",
    "longevity training",
    "performance coaching",
    "Jax Sterling",
    "executive health",
    "functional training",
  ],
  openGraph: {
    title: "Jax Sterling | The Engine",
    description:
      "Precision performance protocols for high-stakes lives. 30-minute functional training for the elite.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jax Sterling | The Engine",
    description:
      "Precision performance protocols for high-stakes lives.",
  },
}

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  width: "device-width",
  initialScale: 1,
}

import { CTAProvider } from "@/hooks/use-cta"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <CTAProvider>
          {children}
        </CTAProvider>
        <Analytics />
      </body>
    </html>
  )
}
