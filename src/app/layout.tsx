import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshya Soni | Full Stack & Flutter Developer",
  description: "Portfolio of Lakshya Soni, pursuing B.Tech in CSE (Cybersecurity) at Acropolis Institute. Flutter developer, MERN Stack architect, and creator of Daily Bhakti, Rescue Mesh and SkillSwap.",
  keywords: [
    "Lakshya Soni",
    "Acropolis Institute of Technology & Research",
    "Flutter Developer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "MERN Stack",
    "Acropolis Indore",
    "Rescue Mesh",
    "Daily Bhakti App",
    "SkillSwap",
    "Acropolis Engineering"
  ],
  authors: [{ name: "Lakshya Soni" }],
  creator: "Lakshya Soni",
  openGraph: {
    title: "Lakshya Soni | Personal Portfolio",
    description: "Building mobile and web applications that solve real-world problems through clean design, modern technologies, and practical innovation.",
    url: "https://mariobeats.github.io", // Fallback URL
    siteName: "Lakshya Soni Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lakshya Soni - Developer Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshya Soni | Developer Portfolio",
    description: "Building mobile and web applications that solve real-world problems through clean design, modern technologies, and practical innovation.",
    images: ["/images/og-image.png"],
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
