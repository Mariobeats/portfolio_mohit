"use client";

import { Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linksLeft = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const linksRight = [
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-cardBorder bg-[#020204]/90 backdrop-blur-sm py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and Tagline */}
        <div className="text-center md:text-left space-y-2">
          <a href="#" className="inline-flex items-center space-x-2 text-foreground font-display font-bold text-xl group" aria-label="Lakshya Soni Home">
            <span className="text-accentCyan font-code text-lg group-hover:text-accentIndigo transition-colors duration-300">&lt;/&gt;</span>
            <span>
              Lakshya<span className="text-accentCyan group-hover:text-accentIndigo transition-colors duration-300">.dev</span>
            </span>
          </a>
          <p className="text-xs text-foreground/45 max-w-xs leading-relaxed">
            Building secure, performant, and premium digital mobile and web experiences.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="flex space-x-12 sm:space-x-24 text-sm text-center md:text-left">
          <ul className="space-y-3">
            {linksLeft.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {linksRight.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground/50 hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright & Socials bottom bar */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-12 pt-6 border-t border-cardBorder/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-code font-semibold tracking-wider text-foreground/40 text-center sm:text-left">
          &copy; {currentYear} Lakshya Soni. All rights reserved.
        </p>

        {/* Social connections */}
        <div className="flex items-center space-x-5 text-foreground/50">
          <a
            href="https://github.com/Mariobeats"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-kushwah-a9b278297"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:mk5819444@gmail.com"
            className="hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Email Lakshya"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
