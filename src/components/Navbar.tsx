"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Skills", href: "#skills" },
    { name: "Credentials", href: "#credentials" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-cardBorder bg-background/80 backdrop-blur-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-foreground font-display font-bold text-xl group" id="nav-logo-link">
          <span className="text-accentCyan font-code text-lg group-hover:text-accentIndigo transition-colors duration-300">&lt;/&gt;</span>
          <span>
            Mohit<span className="text-accentCyan group-hover:text-accentIndigo transition-colors duration-300">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/75 hover:text-foreground text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Theme Toggle + Start Project CTA + Burger) */}
        <div className="flex items-center space-x-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wide bg-foreground text-background hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md"
            id="nav-cta-contact"
          >
            Start Project
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground focus:outline-none rounded-lg hover:bg-cardBg transition-colors"
            aria-controls="mobile-nav-menu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-background/95 backdrop-blur-xl z-40 border-t border-cardBorder animate-fade-in flex flex-col justify-between p-8"
        >
          <nav className="flex flex-col items-center justify-center space-y-6 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-foreground text-xl font-semibold tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="w-full max-w-xs mx-auto pb-8">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full py-3.5 rounded-full text-sm font-bold bg-foreground text-background hover:opacity-90 transition-all duration-200 shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
