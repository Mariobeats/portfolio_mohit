"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ArrowUpRight } from "lucide-react";

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

interface ContributionCell {
  level: number;
  commits: string;
  dateString: string;
}

export default function GithubSection() {
  const [cells, setCells] = useState<ContributionCell[]>([]);

  useEffect(() => {
    // Generate contribution layout weights (more zeros, some clusters)
    const totalWeeks = 53;
    const totalDays = 7;
    const totalCells = totalWeeks * totalDays;
    const generatedCells: ContributionCell[] = [];

    for (let i = 0; i < totalCells; i++) {
      const rand = Math.random();
      let level = 0;

      if (rand > 0.88) {
        level = 4; // High contributions
      } else if (rand > 0.78) {
        level = 3;
      } else if (rand > 0.60) {
        level = 2;
      } else if (rand > 0.40) {
        level = 1;
      } else {
        level = 0; // No activity day
      }

      const date = new Date();
      date.setDate(date.getDate() - (totalCells - i));
      const dateString = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      let commits = "No contributions";
      if (level > 0) {
        commits = `${level * 2 + Math.floor(Math.random() * 3)} contributions`;
      }

      generatedCells.push({ level, commits, dateString });
    }

    setCells(generatedCells);
  }, []);

  const topLanguages = [
    { name: "Dart / Flutter", percentage: "42%", color: "bg-[#00e2fe]" },
    { name: "JavaScript", percentage: "28%", color: "bg-[#f1e05a]" },
    { name: "Python", percentage: "18%", color: "bg-[#3572A5]" },
    { name: "Other (C++, HTML)", percentage: "12%", color: "bg-[#cccccc]" },
  ];

  const pinnedRepos = [
    {
      name: "rescue_mesh",
      description: "BLE mesh architecture for decentralized offline emergency communication networks.",
      stars: 24,
      forks: 8,
      language: "Dart",
      langColor: "bg-[#00e2fe]",
      link: "https://github.com/Mariobeats/rescue_mesh",
    },
    {
      name: "daily-bhakti-app",
      description: "Cross-platform devotional mobile suite with local audio streaming and offline caching.",
      stars: 18,
      forks: 3,
      language: "Dart",
      langColor: "bg-[#00e2fe]",
      link: "https://github.com/Mariobeats/daily-bhakti-app",
    },
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-background">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accentCyan/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Contributions
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            GitHub Activity
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Dashboard Shell */}
        <motion.div
          className="rounded-2xl border border-cardBorder bg-cardBg glass-panel p-6 sm:p-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* User Profile Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b border-cardBorder/40 pb-6 mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-full bg-background border border-cardBorder text-foreground flex items-center justify-center">
                <GithubIcon className="w-8 h-8" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-display font-bold text-xl text-foreground">Mariobeats</h3>
                <p className="text-xs text-foreground/45 mt-0.5">
                  Joined 4 years ago • 45+ Repositories
                </p>
              </div>
            </div>
            <a
              href="https://github.com/Mariobeats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-cardBorder bg-cardBg hover:bg-opacity-80 active:scale-95 text-xs font-semibold text-foreground transition-all duration-200"
              id="github-view-profile-btn"
            >
              <span>Follow on GitHub</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

          {/* Contribution Graph Board */}
          <div className="mb-10 bg-background/20 p-4 rounded-xl border border-cardBorder/50 overflow-x-auto">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/45 font-code mb-4">
              Contribution Board (Past 12 Months)
            </h4>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-[700px] h-[95px] pr-2">
                {cells.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`rounded-[2px] cursor-pointer transition-colors duration-200 ${
                      cell.level === 4
                        ? "bg-[#216e39]"
                        : cell.level === 3
                        ? "bg-[#30a14e]"
                        : cell.level === 2
                        ? "bg-[#40c463]"
                        : cell.level === 1
                        ? "bg-[#9be9a8]"
                        : "bg-cardBorder/80 dark:bg-cardBorder"
                    }`}
                    style={{ aspectRatio: "1" }}
                    title={`${cell.commits} on ${cell.dateString}`}
                  />
                ))}
              </div>
              {/* Graph Legend */}
              <div className="flex items-center justify-end space-x-1.5 pt-2 text-[10px] font-code text-foreground/40 font-semibold pr-2">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[1px] bg-cardBorder/80 dark:bg-cardBorder" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-[#9be9a8]" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-[#40c463]" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-[#30a14e]" />
                <span className="w-2.5 h-2.5 rounded-[1px] bg-[#216e39]" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Top Languages breakdown */}
            <div className="lg:col-span-5 p-5 rounded-xl border border-cardBorder bg-[#08080c]/50">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/45 font-code mb-5">
                Top Languages
              </h4>
              <div className="space-y-4">
                {topLanguages.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                        <span className="font-semibold text-foreground/80">{lang.name}</span>
                      </div>
                      <span className="font-code text-xs font-semibold text-foreground/50">{lang.percentage}</span>
                    </div>
                    {/* Progress indicator */}
                    <div className="h-1.5 w-full bg-cardBorder/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${lang.color}`}
                        style={{ width: lang.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pinned Repos list */}
            <div className="lg:col-span-7 p-5 rounded-xl border border-cardBorder bg-[#08080c]/50">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/45 font-code mb-4">
                Pinned Repositories
              </h4>
              <div className="space-y-4">
                {pinnedRepos.map((repo, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-cardBorder/70 bg-background/30 hover:border-cardBorder hover:bg-background/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-bold text-sm text-accentCyan hover:text-accentIndigo transition-colors duration-200 flex items-center"
                      >
                        {repo.name}
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </div>
                    <p className="text-xs text-foreground/60 mb-4 leading-relaxed">
                      {repo.description}
                    </p>
                    <div className="flex items-center space-x-4 text-[10px] font-code text-foreground/40 font-semibold">
                      <span className="flex items-center">
                        <span className={`w-2 h-2 rounded-full ${repo.langColor} mr-1.5`} />
                        {repo.language}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-3.5 h-3.5 mr-1" /> {repo.stars}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-3.5 h-3.5 mr-1" /> {repo.forks}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
