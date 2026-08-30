"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Radio, Users, Compass, Lock, MessageSquareCode } from "lucide-react";

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
  problemSolved: string;
  businessBenefit: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demoUrl?: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      title: "Daily Bhakti",
      category: "Mobile Application (Flutter)",
      problemSolved: "Devotional users lacked a single, distraction-free app for daily spiritual routines, media streaming, and offline prayer tracking.",
      businessBenefit: "Delivers a high-retention mobile experience with background audio streaming and local offline data management.",
      highlights: [
        "Spiritual user experience & modern dark UI",
        "Interactive devotional calendar & routine trackers",
        "Cross-platform background audio playback engine",
        "Local SQLite database caching & offline playlist support"
      ],
      tech: ["Flutter", "Dart", "Firebase", "SQLite"],
      github: "https://github.com/Mariobeats/daily-bhakti-app",
      icon: <Compass className="w-6 h-6 text-[#ff9900]" />,
      colorClass: "from-[#ff9900]/10 to-[#ff5500]/5 hover:shadow-[#ff9900]/5",
    },
    {
      title: "Rescue Mesh",
      category: "IoT & Mobile Application",
      problemSolved: "Cellular infrastructure outages during disasters leave victims and rescue teams isolated without SOS communication channels.",
      businessBenefit: "Enables lifesaving peer-to-peer message routing and location broadcasts without cellular or internet connectivity.",
      highlights: [
        "Decentralized Bluetooth Low Energy (BLE) mesh routing",
        "Dynamic GPS coordinate triangulation & sharing",
        "Encrypted offline message payload transmission",
        "Emergency broadcast protocol for crisis management"
      ],
      tech: ["Flutter", "Dart", "BLE Mesh", "Cryptography"],
      github: "https://github.com/Mariobeats/rescue_mesh",
      icon: <Radio className="w-6 h-6 text-accentCyan" />,
      colorClass: "from-accentCyan/10 to-[#0083b0]/5 hover:shadow-accentCyan/5",
    },
    {
      title: "SkillSwap",
      category: "Custom Web Application (MERN)",
      problemSolved: "Learners and professionals need a currency-free barter platform to exchange skills, schedule interactive sessions, and verify expertise.",
      businessBenefit: "Facilitates real-time skill matchmaking and peer learning through secure websockets and interactive scheduling.",
      highlights: [
        "Secure user authentication & portfolio profiles",
        "Complementary skill matchmaking algorithm",
        "Real-time WebSocket chat & interactive session manager",
        "Peer verification, rating, and feedback system"
      ],
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      github: "https://github.com/Mariobeats/skillswap",
      icon: <Users className="w-6 h-6 text-accentPurple" />,
      colorClass: "from-accentPurple/10 to-indigo-900/5 hover:shadow-accentPurple/5",
    },
    {
      title: "A.A.R.Y.A.",
      category: "Desktop AI & Voice Assistant",
      problemSolved: "Repetitive daily system actions and script executions slow down workstation developer productivity.",
      businessBenefit: "Saves developer time through hands-free voice commands, automated script execution, and intent parsing.",
      highlights: [
        "Speech-to-text recognition & audio feedback loop",
        "Custom workflow task automation scripting",
        "Hands-free operating system control & application launching",
        "Conversational natural language intent parser"
      ],
      tech: ["Python", "Speech Recognition", "NLP", "Pyttsx3"],
      icon: <MessageSquareCode className="w-6 h-6 text-emerald-400" />,
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
      {/* Background gradients */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accentIndigo/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Selected Work
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
            Real-world applications built with modern frameworks, clean code, and practical problem-solving architecture.
          </p>
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
              className={`flex flex-col justify-between rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br ${project.colorClass}`}
              variants={cardVariants}
            >
              {/* Card Header */}
              <div className="p-6 pb-4 flex items-center justify-between border-b border-cardBorder/40 bg-background/30 backdrop-blur-sm">
                <span className="text-[11px] font-code font-bold uppercase tracking-wider text-accentCyan">
                  {project.category}
                </span>
                <div className="p-2.5 rounded-xl bg-background/60 border border-cardBorder shadow-sm">
                  {project.icon}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    {project.title}
                  </h3>

                  {/* Problem & Benefit Blocks */}
                  <div className="space-y-3 mb-6 bg-background/30 p-4 rounded-xl border border-cardBorder/40">
                    <div>
                      <span className="block text-[10px] font-code font-bold uppercase tracking-wider text-foreground/45">
                        Problem Solved:
                      </span>
                      <p className="text-xs text-foreground/75 leading-relaxed mt-0.5">
                        {project.problemSolved}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-code font-bold uppercase tracking-wider text-accentCyan">
                        User / Business Benefit:
                      </span>
                      <p className="text-xs text-foreground/90 font-medium leading-relaxed mt-0.5">
                        {project.businessBenefit}
                      </p>
                    </div>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50 font-code mb-3">
                      Key Technical Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs text-foreground/80 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accentCyan mr-2.5 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Badges & Action Links */}
                <div className="mt-4 pt-5 border-t border-cardBorder/30">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold font-code rounded bg-background/50 border border-cardBorder text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg border border-cardBorder bg-background/40 hover:bg-foreground hover:text-background text-xs font-semibold transition-all duration-200"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4 mr-2" />
                        <span>View Repository</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-code text-foreground/40">Private Source</span>
                    )}

                    {/* Live Demo or Demo Available on Request Indicator */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-accentCyan text-background font-bold text-xs hover:opacity-90 transition-opacity"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-[11px] font-code font-semibold text-foreground/50 bg-background/30 px-3 py-1.5 rounded-lg border border-cardBorder/50">
                        <Lock className="w-3 h-3 mr-1.5 text-accentCyan" />
                        Demo available on request
                      </span>
                    )}
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
