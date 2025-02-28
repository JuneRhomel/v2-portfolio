import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "June Rhomel | Software Engineer",
  description: "Professional portfolio of June Rhomel, a software engineer with expertise in web development, React, Next.js, and modern JavaScript frameworks.",
  keywords: ["software engineer", "web developer", "React", "Next.js", "JavaScript", "TypeScript", "portfolio", "frontend developer"],
  authors: [{ name: "June Rhomel" }],
  creator: "June Rhomel",
  publisher: "June Rhomel",
  metadataBase: new URL("https://portfolio-8suwinu36-june-rhomels-projects.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.svg', type: 'image/svg+xml', sizes: '192x192' },
      { url: '/icon-512.svg', type: 'image/svg+xml', sizes: '512x512' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-8suwinu36-june-rhomels-projects.vercel.app",
    title: "June Rhomel | Software Engineer",
    description: "Professional portfolio of June Rhomel, a software engineer with expertise in web development, React, Next.js, and modern JavaScript frameworks.",
    siteName: "June Rhomel Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to create this image in the public folder
        width: 1200,
        height: 630,
        alt: "June Rhomel - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "June Rhomel | Software Engineer",
    description: "Professional portfolio of June Rhomel, a software engineer with expertise in web development, React, Next.js, and modern JavaScript frameworks.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <SpeedInsights />
          <Analytics />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
