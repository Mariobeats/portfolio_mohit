"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, ShieldCheck, Code, Smartphone } from "lucide-react";

export default function About() {
  const codeContent = `{
  name: "Mohit Kushwah",
  role: "Web & Mobile Developer",
  location: "Indore, MP, India",
  education: "B.Tech CSE (Cybersecurity)",
  institution: "Acropolis Institute, Indore",
  coreFocus: [
    "Full-Stack Web Development",
    "Flutter Cross-Platform Apps",
    "Secure API Architectures",
    "Database System Design"
  ]
}`;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-full -translate-x-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-accentPurple/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Background & Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Terminal Emulator */}
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full rounded-2xl overflow-hidden border border-cardBorder bg-[#07070a]/90 shadow-2xl glass-panel glow-card">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0a0a0f] border-b border-cardBorder flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-code text-foreground/40">mohit_developer_profile.ts</span>
                <span className="w-8" />
              </div>
              {/* Terminal Window Body */}
              <div className="p-6 font-code text-xs md:text-sm leading-relaxed overflow-x-auto">
                <pre className="text-emerald-400">
                  <span className="text-accentPurple">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-accentCyan">=</span>{" "}
                  {codeContent}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right: Client-Focused Copy & Background Cards */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight">
                Turning Ideas Into Reliable Digital Products
              </h3>

              {/* Exact requested prompt copy */}
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg font-medium bg-cardBg p-5 rounded-2xl border border-cardBorder/70 glass-panel">
                “I help startups, creators, and growing businesses turn ideas into reliable digital products. My approach combines clean design, secure engineering, and practical development so every product is simple to use, fast, and ready to grow.”
              </p>

              <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                Whether you need a business landing page, an admin dashboard, a custom full-stack web platform, or a cross-platform Flutter mobile application for iOS and Android, I focus on delivering production-ready code built to last.
              </p>

              {/* Education & Cybersecurity Card */}
              <div className="p-5 rounded-2xl border border-cardBorder bg-cardBg glass-panel flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-accentCyan/10 border border-accentCyan/20 text-accentCyan mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base md:text-lg text-foreground">
                      Acropolis Institute of Technology & Research
                    </h4>
                    <p className="text-foreground/70 text-sm">
                      B.Tech – Computer Science Engineering (Cybersecurity)
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs text-foreground/50 font-code">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-accentCyan" /> Indore, MP, India
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-accentPurple" /> 2023 – 2027
                      </span>
                      <span className="flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Secure Engineering
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
