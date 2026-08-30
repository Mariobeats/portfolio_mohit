"use client";

import { motion, Variants } from "framer-motion";
import { Globe, ShoppingBag, LayoutDashboard, Smartphone, Database, ShieldCheck, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  category: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  colorGradient: string;
}

export default function Services() {
  const servicesList: Service[] = [
    {
      title: "Business Websites & Landing Pages",
      category: "Web Development",
      description: "High-converting, mobile-responsive websites designed to present your brand professionally and generate real customer leads.",
      benefits: [
        "Fast page load speed & modern responsive design",
        "SEO-friendly HTML structure & meta optimization",
        "Clear call-to-actions to capture visitor enquiries"
      ],
      icon: <Globe className="w-6 h-6 text-accentCyan" />,
      colorGradient: "from-accentCyan/10 to-blue-900/5",
    },
    {
      title: "Ecommerce Websites",
      category: "Online Stores",
      description: "Custom online storefronts built to showcase products, manage inventory seamlessly, and convert visitors into buyers.",
      benefits: [
        "Secure checkout & payment gateway integrations",
        "Product catalog management & search filters",
        "Mobile-optimized shopping experience"
      ],
      icon: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
      colorGradient: "from-emerald-400/10 to-teal-900/5",
    },
    {
      title: "Custom Web Applications & Admin Dashboards",
      category: "SaaS & Portals",
      description: "Tailor-made web portals, SaaS platforms, and internal admin dashboards built with React, Next.js, and Node.js.",
      benefits: [
        "Custom workflow automation & real-time analytics",
        "Role-based access control & secure data storage",
        "Scalable database architecture (MongoDB / MySQL)"
      ],
      icon: <LayoutDashboard className="w-6 h-6 text-accentPurple" />,
      colorGradient: "from-accentPurple/10 to-indigo-900/5",
    },
    {
      title: "Android & iOS Flutter Apps",
      category: "Mobile Apps",
      description: "Cross-platform native mobile applications for iOS and Android built with Flutter for consistent performance and sleek UI.",
      benefits: [
        "Single codebase delivering native iOS & Android apps",
        "Smooth animations & offline data caching",
        "Push notifications & API backend integration"
      ],
      icon: <Smartphone className="w-6 h-6 text-[#00e2fe]" />,
      colorGradient: "from-[#00e2fe]/10 to-cyan-950/5",
    },
    {
      title: "API & Backend Development",
      category: "Backend Systems",
      description: "Reliable RESTful APIs and microservices to power your mobile apps, websites, and third-party integrations securely.",
      benefits: [
        "Clean, well-documented REST API architecture",
        "JWT authentication & defensive security practices",
        "High performance Node.js / Express backend servers"
      ],
      icon: <Database className="w-6 h-6 text-amber-400" />,
      colorGradient: "from-amber-400/10 to-yellow-950/5",
    },
    {
      title: "UI/UX Improvements, Maintenance & Support",
      category: "Optimization & Care",
      description: "Enhance your existing website or mobile app with modern visual designs, performance speedups, and ongoing technical support.",
      benefits: [
        "UI redesigns with modern dark & glassmorphism aesthetics",
        "Core Web Vitals & speed optimizations",
        "Regular bug fixes, security updates & feature additions"
      ],
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      colorGradient: "from-rose-400/10 to-pink-950/5",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-accentCyan/5 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-accentPurple/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Development Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            What I Can Build For You
          </h2>
          <p className="text-foreground/60 text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
            Client-focused development services designed to help startups, businesses, and creators launch high-quality digital products.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col justify-between p-7 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${service.colorGradient}`}
              variants={cardVariants}
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-background/60 border border-cardBorder shadow-sm">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-code font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cardBorder bg-background/40 text-foreground/60">
                    {service.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-foreground/65 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefit Bullet points */}
                <div className="mb-6 pt-4 border-t border-cardBorder/40">
                  <h4 className="text-[11px] font-code font-semibold uppercase tracking-wider text-foreground/45 mb-3">
                    Key Client Benefits:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start text-xs text-foreground/80 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-accentCyan mr-2.5 mt-1.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-cardBorder/40">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl border border-cardBorder bg-background/40 hover:bg-foreground hover:text-background text-xs font-bold tracking-wider uppercase transition-all duration-200 group text-foreground shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
