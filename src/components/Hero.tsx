"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Briefcase } from "lucide-react";

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

const roles = [
  "Web Applications",
  "Flutter Mobile Apps",
  "Backend & REST APIs",
  "Ecommerce Solutions"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(currentFullRole.substring(0, currentText.length + 1));
        setTypingSpeed(70);

        if (currentText === currentFullRole) {
          timer = setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
      } else {
        setCurrentText(currentFullRole.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient Radial background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-accentCyan/10 blur-[90px] md:blur-[130px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full bg-accentPurple/8 blur-[90px] md:blur-[130px] -z-10 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column - Content */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accentCyan/30 bg-cardBg text-xs font-semibold tracking-wider text-accentCyan uppercase mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
            <span>Available for Remote Projects & Contract Work</span>
          </motion.div>

          {/* Greeting & Name */}
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-foreground/70 font-display font-semibold text-lg md:text-xl">
              Hello, I&apos;m <strong className="text-foreground font-bold">Mohit Kushwah</strong>
            </span>
          </motion.div>

          {/* Client-Focused Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.15]"
          >
            I build <span className="gradient-text font-extrabold">fast, secure websites</span> and mobile apps for growing businesses.
          </motion.h1>

          {/* Dynamic Specialization Indicator */}
          <motion.div
            variants={itemVariants}
            className="font-display text-base sm:text-lg md:text-xl text-foreground/80 h-9 mb-6 font-semibold flex items-center justify-center lg:justify-start"
            aria-live="polite"
          >
            <span className="text-foreground/60 mr-2 font-normal">Specializing in</span>
            <span className="text-accentCyan font-code font-bold underline decoration-accentCyan/30 decoration-wavy decoration-2">
              {currentText}
            </span>
            <span className="w-[3px] h-5 bg-accentCyan ml-1 animate-pulse" />
          </motion.div>

          {/* Client-Focused Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-foreground/70 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
            id="hero-desc-para"
          >
            From idea to launch, I create high-quality websites, web applications, dashboards, ecommerce platforms, and Flutter mobile apps built for real users.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold tracking-wide bg-foreground text-background hover:opacity-90 active:scale-95 transition-all duration-200 shadow-xl group"
              id="hero-cta-start-project"
            >
              <Briefcase className="w-4 h-4 mr-2 text-accentCyan" />
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide border border-cardBorder bg-cardBg hover:bg-opacity-80 active:scale-95 transition-all duration-200 text-foreground shadow-sm"
              id="hero-cta-view-work"
            >
              <span>View My Work</span>
            </a>

            {/* Resume Button */}
            <a
              href="/Mohit_Kushwah_Resume.pdf"
              download="Mohit_Kushwah_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full text-xs font-semibold tracking-wide border border-cardBorder/60 text-foreground/75 hover:text-foreground hover:bg-cardBg transition-all duration-200"
              id="hero-cta-resume"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start space-x-6 text-foreground/50"
          >
            <a
              href="https://github.com/Mariobeats"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-code hover:text-foreground hover:scale-105 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-kushwah-a9b278297"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs font-code hover:text-foreground hover:scale-105 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:mk5819444@gmail.com"
              className="flex items-center space-x-2 text-xs font-code hover:text-foreground hover:scale-105 transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right column - Showcase Frame */}
        <motion.div
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="relative group w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden glass-panel border border-cardBorder shadow-2xl p-3">
            {/* Corner styling accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-accentCyan/40 rounded-tl" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-accentCyan/40 rounded-tr" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-accentCyan/40 rounded-bl" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-accentCyan/40 rounded-br" />

            {/* Backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accentCyan/15 to-accentPurple/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

            <div className="w-full h-full relative rounded-xl overflow-hidden border border-cardBorder">
              <Image
                src="/images/lakshya.jpg"
                alt="Mohit Kushwah - Full Stack & Mobile App Developer"
                fill
                priority
                sizes="(max-w-7xl) 360px, 320px"
                className="object-cover object-[center_28%] filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-102 hover:scale-105"
              />
            </div>

            {/* Floating Trust Badge on image */}
            <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-background/90 backdrop-blur-md border border-cardBorder shadow-xl text-center">
              <span className="block text-xs font-bold text-foreground">Mohit Kushwah</span>
              <span className="block text-[10px] text-accentCyan font-code font-semibold">Web, Backend & Flutter Developer</span>
            </div>

            {/* Glowing border outline */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-accentCyan/20 to-accentPurple/20 -z-20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down mouse Indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
        id="hero-scroll-btn"
        aria-label="Scroll down to Services Section"
      >
        <span className="w-5 h-9 rounded-full border border-foreground/30 flex justify-center p-1.5">
          <motion.span
            className="w-1.5 h-2 rounded-full bg-foreground/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 font-code">Explore Services</span>
      </a>
    </section>
  );
}
