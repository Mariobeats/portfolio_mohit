"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Code2, FolderGit2, Cpu, CheckCircle2 } from "lucide-react";

export default function TrustCredibility() {
  const coreTech = [
    "Flutter", "React", "Next.js", "Node.js", "Firebase", "MongoDB", "MySQL", "REST APIs"
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#050507]/40 border-y border-cardBorder/60">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accentCyan/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2 block">
            Why Work With Me
          </span>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground">
            Proven Skills & Transparent Standards
          </h2>
        </div>

        {/* Credibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Projects Built */}
          <motion.div
            className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-xl bg-accentCyan/10 border border-accentCyan/20 text-accentCyan">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl text-accentCyan">10+</span>
                <span className="block text-xs font-bold text-foreground">Projects Built</span>
              </div>
            </div>
            <p className="text-foreground/60 text-xs leading-relaxed">
              Hands-on experience building mobile apps, web applications, dashboards, and IoT mesh networks.
            </p>
          </motion.div>

          {/* Card 2: Public Repositories */}
          <motion.div
            className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-xl bg-accentPurple/10 border border-accentPurple/20 text-accentPurple">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl text-accentPurple">45+</span>
                <span className="block text-xs font-bold text-foreground">Public Repositories</span>
              </div>
            </div>
            <p className="text-foreground/60 text-xs leading-relaxed">
              Transparent, open-source code activity on GitHub demonstrating clean code structure and version control.
            </p>
          </motion.div>

          {/* Card 3: Secure Mindset */}
          <motion.div
            className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-emerald-400">Secure-by-Design</span>
                <span className="block text-xs font-bold text-foreground">Engineering Mindset</span>
              </div>
            </div>
            <p className="text-foreground/60 text-xs leading-relaxed">
              Cybersecurity background ensuring authentication, data validation, and API defenses are integrated from day one.
            </p>
          </motion.div>

          {/* Card 4: Location & Remote Availability */}
          <motion.div
            className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-sm text-foreground block">Indore, MP, India</span>
                <span className="text-xs font-code text-accentCyan">Available Worldwide</span>
              </div>
            </div>
            <p className="text-foreground/60 text-xs leading-relaxed">
              Available for remote freelance, contract development, and technical consulting across timezones.
            </p>
          </motion.div>
        </div>

        {/* Core Tech Stack Bar */}
        <div className="mt-12 p-6 rounded-2xl border border-cardBorder bg-background/40 glass-panel">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-accentCyan flex-shrink-0" />
              <span className="font-display font-bold text-sm text-foreground">
                Core Production Stack:
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {coreTech.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-lg border border-cardBorder bg-cardBg text-xs font-semibold font-code text-foreground/80"
                >
                  <CheckCircle2 className="w-3 h-3 text-accentCyan mr-1.5" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
