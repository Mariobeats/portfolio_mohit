"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, CheckCircle2, Radio, Users, Compass } from "lucide-react";

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

interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: "Daily Bhakti",
      category: "Mobile Application",
      description: "A devotional mobile application designed to deliver a modern spiritual experience through a beautiful UI and interactive features, including background audio stream controls.",
      highlights: [
        "Spiritual user experience & modern UI",
        "Interactive devotional calendar & trackers",
        "Cross-platform audio management",
        "Local caching & offline playlist integration"
      ],
      tech: ["Flutter", "Dart", "Firebase", "SQLite"],
      github: "https://github.com/Mariobeats/daily-bhakti-app",
      demo: "#",
      icon: <Compass className="w-6 h-6 text-[#ff9900]" />,
      colorClass: "from-[#ff9900]/10 to-[#ff5500]/5 hover:shadow-[#ff9900]/5",
    },
    {
      title: "Rescue Mesh",
      category: "IoT & Mobile Application",
      description: "An offline emergency communication platform that enables SOS alerts and message exchanges between nearby devices over Bluetooth Low Energy (BLE) mesh topologies in disaster scenarios.",
      highlights: [
        "Offline emergency communication nodes",
        "Peer-to-peer mesh packet routing",
        "Dynamic GPS triangulation sharing",
        "Encrypted payload security in crisis"
      ],
      tech: ["Flutter", "Dart", "BLE Mesh", "Cryptography"],
      github: "https://github.com/Mariobeats/rescue_mesh",
      demo: "#",
      icon: <Radio className="w-6 h-6 text-accentCyan" />,
      colorClass: "from-accentCyan/10 to-[#0083b0]/5 hover:shadow-accentCyan/5",
    },
    {
      title: "SkillSwap",
      category: "Web Application",
      description: "A peer-to-peer knowledge barter platform where users connect, match complementary expertise, and schedule interactive sessions without currency transactions.",
      highlights: [
        "Secure auth & user profile portfolios",
        "Complementary skill matchmaking engine",
        "Real-time chat & WebSocket sessions",
        "Peer feedback & verification system"
      ],
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      github: "https://github.com/Mariobeats/skillswap",
      demo: "#",
      icon: <Users className="w-6 h-6 text-accentPurple" />,
      colorClass: "from-accentPurple/10 to-indigo-900/5 hover:shadow-accentPurple/5",
    },
    {
      title: "A.A.R.Y.A.",
      category: "AI & Voice Assistant",
      description: "Artificial Assistant Responsive To Your Actions. A Python-based desktop voice assistant utilizing speech recognition and natural language processing to automate workflow operations.",
      highlights: [
        "Speech-to-text recognition & feedback",
        "Workflow task automation scripting",
        "Hands-free operating system control",
        "Conversational natural language parser"
      ],
      tech: ["Python", "Speech Recognition", "NLP", "Pyttsx3"],
      demo: "#",
      icon: <Radio className="w-6 h-6 text-emerald-400" />,
      colorClass: "from-emerald-400/10 to-teal-900/5 hover:shadow-emerald-400/5",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050507]/30">
      {/* Decorative background gradients */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accentIndigo/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsList.map((project, index) => (
            <motion.article
              key={index}
              className={`flex flex-col rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${project.colorClass}`}
              variants={cardVariants}
            >
              {/* Header Visual Icon block */}
              <div className="p-6 pb-2 flex items-center justify-between border-b border-cardBorder/40 bg-background/20 backdrop-blur-sm">
                <span className="text-xs font-code font-semibold uppercase tracking-wider text-foreground/40">
                  {project.category}
                </span>
                <div className="p-2 rounded-xl bg-background/50 border border-cardBorder">
                  {project.icon}
                </div>
              </div>

              {/* Body details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/45 font-code mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs sm:text-sm text-foreground/75 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-accentCyan mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Badges & Actions */}
                <div className="mt-4 pt-6 border-t border-cardBorder/30">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded bg-background/40 border border-cardBorder/80 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold tracking-wide text-foreground/60 hover:text-foreground transition-colors duration-200"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        Code Link
                      </a>
                    )}
                    <a
                      href={project.demo}
                      className="inline-flex items-center text-xs font-semibold tracking-wide text-foreground/60 hover:text-foreground transition-colors duration-200"
                      aria-label={`Live Demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
