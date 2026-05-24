"use client";

import { motion } from "framer-motion";
import { Award, Brain, Compass, Cpu } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

export default function Certifications() {
  const certs: Certificate[] = [
    {
      title: "IBM Granite Models for Software Development",
      issuer: "IBM SkillsBuild",
      year: "2025",
      description: "Advanced training in leveraging IBM's Granite LLM structures to automate code refactoring, enforce styling guidelines, and optimize script compilation workflows.",
      icon: <Cpu className="w-6 h-6 text-accentCyan" />,
    },
    {
      title: "IBM Machine Learning Professional",
      issuer: "IBM",
      year: "2025",
      description: "Comprehensive study covering supervised learning algorithms, unsupervised clustering, deep neural architectures, and data cleaning/sanitization routines.",
      icon: <Brain className="w-6 h-6 text-accentPurple" />,
    },
    {
      title: "Career Planning & Professional Skills",
      issuer: "IBM SkillsBuild",
      year: "2024",
      description: "Core competencies in agile design workflows, software engineering collaboration principles, project tasking, and secure engineering practices.",
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#050507]/30">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Credentials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-background/60 border border-cardBorder">
                    {cert.icon}
                  </div>
                  <span className="text-xs font-code font-semibold px-2.5 py-1 rounded-full bg-accentCyan/10 text-accentCyan border border-accentCyan/20">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-code font-bold text-accentPurple mb-4 uppercase tracking-widest">
                  {cert.issuer}
                </p>

                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cardBorder/30 flex items-center text-xs text-foreground/40 font-code font-semibold">
                <Award className="w-4 h-4 mr-2 text-accentCyan" />
                Verified IBM Credential
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
