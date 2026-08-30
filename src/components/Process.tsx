"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code, CheckCircle, Rocket } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Process() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Share Your Idea",
      description: "Submit your project details, feature requirements, reference links, and preferred contact method via the enquiry form.",
      icon: <MessageSquare className="w-5 h-5 text-accentCyan" />,
    },
    {
      number: "02",
      title: "Project Planning & Estimate",
      description: "I review your scope, map out technical architecture, and provide a clear estimate range and timeline within 24 hours.",
      icon: <FileText className="w-5 h-5 text-accentPurple" />,
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Building your web or mobile application with clean architecture, responsive styling, secure backend APIs, and regular progress updates.",
      icon: <Code className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: "04",
      title: "Testing & Feedback",
      description: "Thorough quality assurance testing across devices, browsers, and screen sizes to fix bugs and refine user experience.",
      icon: <CheckCircle className="w-5 h-5 text-[#00e2fe]" />,
    },
    {
      number: "05",
      title: "Launch & Ongoing Support",
      description: "Deploying your application to production (Vercel, App Stores, AWS) and providing post-launch support and feature maintenance.",
      icon: <Rocket className="w-5 h-5 text-[#ff9900]" />,
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-background">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentPurple/5 blur-[140px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Workflow
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            How I Work
          </h2>
          <p className="text-foreground/60 text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
            A practical, transparent 5-step development process from initial contact to successful product launch.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-cardBorder z-10" />
              )}

              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-code font-bold text-2xl text-accentCyan/40">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-background/60 border border-cardBorder">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Status indicator */}
              <div className="mt-6 pt-3 border-t border-cardBorder/30 text-[10px] font-code font-semibold uppercase tracking-wider text-accentCyan">
                Step {step.number} of 05
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
