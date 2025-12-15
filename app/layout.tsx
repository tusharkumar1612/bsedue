import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportWidget from "@/components/SupportWidget";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-cabinet",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "BSEduworld - Online Courses, Certifications & Degree Programs",
    template: "%s | BSEduworld",
  },
  description:
    "Upskill with industry-recognized online certification courses, UGC-approved distance learning degrees, and personal development programs. Join 500K+ learners at BSEduworld.",
  keywords: [
    "online courses",
    "certification courses",
    "online degree",
    "distance learning",
    "MBA online",
    "data science course",
    "digital marketing course",
    "UGC approved universities",
    "skill development",
  ],
  authors: [{ name: "BSEduworld" }],
  creator: "BSEduworld",
  publisher: "BSEduworld",
  metadataBase: new URL("https://bseduworld.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bseduworld.com",
    siteName: "BSEduworld",
    title: "BSEduworld - Transform Your Career with Online Learning",
    description:
      "Industry-recognized certifications, UGC-approved degrees, and personal development courses. Start your learning journey today.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BSEduworld - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BSEduworld - Online Courses & Degree Programs",
    description: "Transform your career with 300+ courses from top universities and industry partners.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <SupportWidget />
      </body>
    </html>
  );
}
