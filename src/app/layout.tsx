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
  metadataBase: new URL("https://portfolio-mohit-alpha.vercel.app"),
  title: "Mohit Kushwah | Web & Mobile App Development Portfolio",
  description: "I build fast, secure websites, web applications, dashboards, ecommerce platforms, and Flutter mobile apps for growing businesses. Based in Indore, MP, India.",
  keywords: [
    "Mohit Kushwah",
    "Web Developer Indore",
    "Flutter Mobile App Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Custom Web Applications",
    "Ecommerce Development",
    "Android & iOS Apps",
    "Acropolis Institute"
  ],
  authors: [{ name: "Mohit Kushwah" }],
  creator: "Mohit Kushwah",
  openGraph: {
    title: "Mohit Kushwah | Fast & Secure Web & Mobile App Development",
    description: "From idea to launch, I create high-quality websites, web applications, dashboards, ecommerce platforms, and Flutter mobile apps built for real users.",
    url: "https://portfolio-mohit-alpha.vercel.app",
    siteName: "Mohit Kushwah Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohit Kushwah - Web & Mobile App Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Kushwah | Web & Mobile Developer",
    description: "Building fast, secure websites, web apps, and Flutter mobile apps for growing businesses.",
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
