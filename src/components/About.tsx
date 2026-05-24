"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

export default function About() {
  const codeContent = `{
  name: "Mohit Kushwah",
  education: "B.Tech CSE (Cybersecurity)",
  institution: "Acropolis Institute, Indore",
  currentYear: "3rd Year (2023 - 2027)",
  cgpa: "6.02",
  passions: [
    "Flutter Development",
    "MERN Full Stack",
    "Cybersecurity",
    "Mesh Networking"
  ]
}`;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-full -translate-x-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-accentPurple/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Introduction
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
            <div className="w-full rounded-2xl overflow-hidden border border-cardBorder bg-[#07070a]/80 shadow-2xl glass-panel glow-card">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0a0a0f] border-b border-cardBorder flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-code text-foreground/40">mohit_profile.ts</span>
                <span className="w-8" />
              </div>
              {/* Terminal Window Body */}
              <div className="p-6 font-code text-sm leading-relaxed overflow-x-auto">
                <pre className="text-emerald-400">
                  <span className="text-accentPurple">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-accentCyan">=</span>{" "}
                  {codeContent}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal Detail Cards */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                Combining Code, Design, and Security
              </h3>

              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
                I am currently pursuing a **Bachelor of Technology** in Computer Science Engineering (specializing in **Cybersecurity**) at the **Acropolis Institute of Technology & Research, Indore** (2023 - 2027).
              </p>

              <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
                My primary focus is Flutter Mobile Development and Full Stack Web projects. I enjoy transforming ideas into practical products that solve real-world problems. This focus allows me to not only build feature-rich web and mobile applications but also ensure they are built with defensive, secure design principles.
              </p>

              {/* Education Grid Card */}
              <div className="p-5 rounded-2xl border border-cardBorder bg-cardBg glass-panel flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-accentCyan/10 border border-accentCyan/20 text-accentCyan mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-foreground">
                      Acropolis Institute of Technology & Research
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      B.Tech – Computer Science Engineering (Cybersecurity)
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-xs text-foreground/40 font-code">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" /> Indore, MP, India
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> 2023 – 2027
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="w-3 h-3 mr-1" /> 3rd Year
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end justify-center px-4 py-2 border-t md:border-t-0 md:border-l border-cardBorder">
                  <span className="text-xs text-foreground/40 font-code">CURRENT CGPA</span>
                  <span className="text-3xl font-display font-extrabold text-accentCyan">6.02</span>
                </div>
              </div>

              {/* Small Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-cardBorder bg-cardBg glass-panel text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accentCyan">10+</div>
                  <div className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-widest font-semibold mt-1">
                    Projects Built
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-cardBorder bg-cardBg glass-panel text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accentCyan">3+</div>
                  <div className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-widest font-semibold mt-1">
                    IBM Credentials
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-cardBorder bg-cardBg glass-panel text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accentCyan">100%</div>
                  <div className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-widest font-semibold mt-1">
                    Secure Mindset
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
