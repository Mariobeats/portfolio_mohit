"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Sparkles, Music, Star, Briefcase } from "lucide-react";

interface TimelineEvent {
  role: string;
  organization: string;
  period: string;
  details: string;
  icon: React.ReactNode;
}

export default function Experience() {
  const events: TimelineEvent[] = [
    {
      role: "Student Coordinator",
      organization: "RAMSITA 2026 Conference",
      period: "2026",
      details: "Orchestrated schedules, technical configurations, and speaker logistics for the national academic conference, hosting industry specialists and researchers.",
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
    },
    {
      role: "Organizing Team Member",
      organization: "E-Summit 2025",
      period: "2025",
      details: "Collaborated on event organization, startup showcase setups, and hospitality management during the flagship entrepreneurship summit at Acropolis.",
      icon: <Sparkles className="w-5 h-5 text-accentCyan" />,
    },
    {
      role: "Leader (Music Club)",
      organization: "CSIT Department",
      period: "2024 - Present",
      details: "Direct department musical sessions, band alignments, and cultural performances for institute festivals, encouraging artistic exposure.",
      icon: <Music className="w-5 h-5 text-accentPurple" />,
    },
    {
      role: "Team Member",
      organization: "Yavnika Hobby Club",
      period: "2024",
      details: "Supported theatre, street play scripting, and dramatic presentations raising public awareness about social values and creative acting styles.",
      icon: <Star className="w-5 h-5 text-[#ff5500]" />,
    },
    {
      role: "Clix Member",
      organization: "IENX",
      period: "2023 - Present",
      details: "Engaged in collaborative tech seminars, creative problem solving hacks, and college community networking operations.",
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[350px] h-[350px] bg-accentCyan/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Leadership
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Achievements & Activity
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l-2 border-cardBorder ml-4 md:ml-32 pl-8 md:pl-10 space-y-12">
          {/* Vertical line gradient overlay */}
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-accentCyan via-accentPurple to-transparent pointer-events-none" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Event Icon positioned on the timeline line */}
              <div className="absolute left-[-42px] md:left-[-50px] top-1.5 w-8 h-8 rounded-full border border-cardBorder bg-[#08080a] flex items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform duration-200">
                {event.icon}
              </div>

              {/* Organization/Period label for desktop (hidden on mobile, shown on md screens to the left) */}
              <div className="hidden md:block absolute left-[-168px] top-2.5 w-28 text-right text-xs font-code font-bold text-foreground/40 uppercase tracking-widest">
                {event.period}
              </div>

              {/* Event Content Card */}
              <div className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:border-cardBorder/40 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-lg md:text-xl text-foreground">
                    {event.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs font-code text-foreground/40 md:hidden">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.period}</span>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-accentCyan mb-4 tracking-wide font-display">
                  {event.organization}
                </h4>

                <p className="text-foreground/60 text-sm leading-relaxed">
                  {event.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
