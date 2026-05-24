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
  title: "Mohit Kushwah | Full Stack & Flutter Developer",
  description: "Portfolio of Mohit Kushwah, pursuing B.Tech in CSE (Cybersecurity) at Acropolis Institute. Flutter developer, MERN Stack architect, and creator of Daily Bhakti, Rescue Mesh and SkillSwap.",
  keywords: [
    "Mohit Kushwah",
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
  authors: [{ name: "Mohit Kushwah" }],
  creator: "Mohit Kushwah",
  openGraph: {
    title: "Mohit Kushwah | Personal Portfolio",
    description: "Building mobile and web applications that solve real-world problems through clean design, modern technologies, and practical innovation.",
    url: "https://mariobeats.github.io", // Fallback URL
    siteName: "Mohit Kushwah Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohit Kushwah - Developer Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Kushwah | Developer Portfolio",
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
