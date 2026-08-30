"use client";

import { motion, Variants } from "framer-motion";
import { Layers, Server, Database, Code2, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layers className="w-5 h-5 text-accentCyan" />,
      skills: ["Flutter", "Dart", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-accentPurple" />,
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      skills: ["MongoDB", "MySQL", "Firebase", "Supabase" ],
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      skills: ["Git", "GitHub", "REST APIs", "Cybersecurity", "Networking"],
    },
  ];

  const marqueeSkills = [
    "Flutter", "Dart", "React", "Next.js", "Tailwind CSS",
    "Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "Supabase",
    "JavaScript", "TypeScript", "Python", "C++", "Git", "GitHub", "REST APIs"
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[300px] h-[300px] bg-accentCyan/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Proficiencies
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Technical Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Horizontal Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-4 mb-16 border-y border-cardBorder bg-[#08080a]/30">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-track flex whitespace-nowrap">
            {/* First sequence */}
            {marqueeSkills.map((skill, index) => (
              <div
                key={`m1-${index}`}
                className="inline-flex items-center px-6 py-2 mx-4 rounded-full border border-cardBorder bg-cardBg text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:border-accentCyan/30 hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accentCyan mr-2.5" />
                {skill}
              </div>
            ))}
            {/* Second sequence for infinite looping */}
            {marqueeSkills.map((skill, index) => (
              <div
                key={`m2-${index}`}
                className="inline-flex items-center px-6 py-2 mx-4 rounded-full border border-cardBorder bg-cardBg text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:border-accentCyan/30 hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accentCyan mr-2.5" />
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-xl border border-cardBorder bg-cardBg">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-cardBorder bg-[#08080a]/50 text-foreground/70 hover:text-foreground hover:border-foreground/20 hover:bg-[#0c0c10] transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
