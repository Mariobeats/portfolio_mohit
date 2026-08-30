"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import TrustCredibility from "@/components/TrustCredibility";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import GithubSection from "@/components/Github";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Read theme preference from localStorage on client-side mount
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.className = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="relative min-h-screen text-foreground transition-colors duration-500 overflow-x-hidden">
      {/* Dynamic Canvas Particles Mesh backdrop */}
      <BackgroundParticles theme={theme} />

      {/* Primary header & Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content grid in client conversion sequence */}
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <TrustCredibility />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>

      {/* Branding footer */}
      <Footer />
    </div>
  );
}
