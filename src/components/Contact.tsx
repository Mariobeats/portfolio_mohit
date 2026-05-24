"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight, User, Bookmark, Send, CheckCircle2 } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "sending" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all the required fields.",
      });
      return;
    }

    setFormStatus({
      type: "sending",
      message: "",
    });

    // Simulate server side sending delay
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you! Your message was delivered successfully.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success notification after delay
      setTimeout(() => {
        setFormStatus({ type: "idle", message: "" });
      }, 5000);
    }, 1800);
  };

  const contactMethods = [
    {
      label: "Email",
      value: "mk5819444@gmail.com",
      href: "mailto:mk5819444@gmail.com",
      icon: <Mail className="w-5 h-5 text-accentCyan" />,
      colorClass: "hover:border-accentCyan/30",
    },
    {
      label: "Phone",
      value: "+91 7000753083",
      href: "tel:+917000753083",
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      colorClass: "hover:border-emerald-400/30",
    },
    {
      label: "LinkedIn",
      value: "mohit-kushwah-a9b278297",
      href: "https://www.linkedin.com/in/mohit-kushwah-a9b278297",
      icon: <LinkedinIcon className="w-5 h-5 text-accentPurple" />,
      colorClass: "hover:border-accentPurple/30",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accentPurple/5 blur-[120px] rounded-t-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Reach Out
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left - Details Info */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Let&apos;s collaborate
              </h3>
              <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-8">
                Have an exciting project idea, a position to fill, or just want to speak about full-stack engineering and security? Feel free to contact me using the options or submit the form.
              </p>

              {/* Cards list */}
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.href}
                    target={method.label !== "Phone" && method.label !== "Email" ? "_blank" : undefined}
                    rel={method.label !== "Phone" && method.label !== "Email" ? "noopener noreferrer" : undefined}
                    className={`flex items-center justify-between p-4 rounded-xl border border-cardBorder bg-cardBg glass-panel hover:bg-opacity-80 transition-all duration-300 group ${method.colorClass}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-background/50 border border-cardBorder">
                        {method.icon}
                      </div>
                      <div>
                        <span className="block text-[10px] font-code font-semibold uppercase tracking-wider text-foreground/45">
                          {method.label}
                        </span>
                        <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                          {method.value}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div className="mt-8 p-4 rounded-xl border border-cardBorder bg-[#08080c]/30 flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-background/50 border border-cardBorder">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <span className="block text-[10px] font-code font-semibold uppercase tracking-wider text-foreground/45">
                  Location
                </span>
                <span className="text-sm font-semibold text-foreground/75">
                  Indore, Madhya Pradesh, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-2xl border border-cardBorder bg-cardBg glass-panel p-6 sm:p-8 glow-card h-full">
              <form onSubmit={handleSubmit} className="space-y-5" id="portfolio-contact-form">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-widest text-foreground/50 font-code">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-foreground/35 pointer-events-none" />
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      autoComplete="name"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-cardBorder bg-background/40 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan/50 focus:border-accentCyan/40 text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-widest text-foreground/50 font-code">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-foreground/35 pointer-events-none" />
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        autoComplete="email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-cardBorder bg-background/40 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan/50 focus:border-accentCyan/40 text-sm transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="form-subject" className="text-xs font-semibold uppercase tracking-widest text-foreground/50 font-code">
                      Subject
                    </label>
                    <div className="relative">
                      <Bookmark className="absolute left-4 top-3.5 w-5 h-5 text-foreground/35 pointer-events-none" />
                      <input
                        type="text"
                        id="form-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Inquiry"
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-cardBorder bg-background/40 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan/50 focus:border-accentCyan/40 text-sm transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-widest text-foreground/50 font-code">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/40 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan/50 focus:border-accentCyan/40 text-sm transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus.type === "sending"}
                  className="w-full inline-flex items-center justify-center py-4 rounded-xl text-sm font-semibold tracking-wide bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
                  id="form-submit-btn"
                >
                  {formStatus.type === "sending" ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </button>

                {/* Form response display */}
                {formStatus.type !== "idle" && (
                  <motion.div
                    className={`p-4 rounded-xl border flex items-start space-x-2 text-xs font-semibold mt-4 ${
                      formStatus.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formStatus.type === "success" && <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0" />}
                    <span>{formStatus.message}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
