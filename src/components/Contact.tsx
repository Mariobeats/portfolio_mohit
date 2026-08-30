"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight, User, Send, CheckCircle2, MessageCircle, Calendar, DollarSign, Layers, Link as LinkIcon, Sparkles } from "lucide-react";

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
    projectType: "Website",
    budget: "₹25,000–₹75,000",
    launchDate: "Within 1 Month",
    requirements: "",
    references: "",
    contactMethod: "WhatsApp",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "sending" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Project Enquiry for Mohit Kushwah*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || "Client")}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || "Not specified")}%0A` +
      `*Project Type:* ${encodeURIComponent(formData.projectType)}%0A` +
      `*Estimated Budget:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Desired Launch Date:* ${encodeURIComponent(formData.launchDate)}%0A` +
      `*Preferred Contact Method:* ${encodeURIComponent(formData.contactMethod)}%0A` +
      `*Requirements:* ${encodeURIComponent(formData.requirements || "Details pending")}%0A` +
      `*Reference Apps/Websites:* ${encodeURIComponent(formData.references || "None provided")}%0A` +
      `*Additional Notes:* ${encodeURIComponent(formData.message || "None")}`;
    
    return `https://wa.me/917000753083?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.requirements) {
      setFormStatus({
        type: "error",
        message: "Please fill in your Name, Email Address, and Project Requirements.",
      });
      return;
    }

    setFormStatus({
      type: "sending",
      message: "",
    });

    // Simulate sending delay
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Thank you! Your project enquiry was sent successfully. I will review your details and get back to you within 1 business day.",
      });
    }, 1200);
  };

  const contactMethodsList = [
    {
      label: "Email",
      value: "mk5819444@gmail.com",
      href: "mailto:mk5819444@gmail.com",
      icon: <Mail className="w-5 h-5 text-accentCyan" />,
      colorClass: "hover:border-accentCyan/40",
    },
    {
      label: "Phone / WhatsApp",
      value: "+91 7000753083",
      href: "https://wa.me/917000753083",
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      colorClass: "hover:border-emerald-400/40",
    },
    {
      label: "LinkedIn Profile",
      value: "mohit-kushwah-a9b278297",
      href: "https://www.linkedin.com/in/mohit-kushwah-a9b278297",
      icon: <LinkedinIcon className="w-5 h-5 text-accentPurple" />,
      colorClass: "hover:border-accentPurple/40",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accentCyan/5 blur-[140px] rounded-t-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-accentCyan uppercase font-code mb-2">
            Start A Conversation
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Tell Me About Your Project
          </h2>
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
            Share a few details about your idea. I&apos;ll reply within one business day with the next steps and an estimate range.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accentCyan to-accentPurple rounded-full mt-4" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Direct Contact & Overview */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="p-6 rounded-2xl border border-cardBorder bg-cardBg glass-panel glow-card space-y-6">
              <h3 className="font-display font-bold text-xl text-foreground">
                Direct Contact Channels
              </h3>
              <p className="text-foreground/60 text-xs md:text-sm leading-relaxed">
                Prefer to discuss directly? Reach out via WhatsApp, Email, or LinkedIn and I&apos;ll respond promptly.
              </p>

              {/* Direct channels */}
              <div className="space-y-3.5">
                {contactMethodsList.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3.5 rounded-xl border border-cardBorder bg-background/40 hover:bg-background/80 transition-all duration-300 group ${method.colorClass}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-lg bg-background border border-cardBorder shadow-sm">
                        {method.icon}
                      </div>
                      <div>
                        <span className="block text-[10px] font-code font-semibold uppercase tracking-wider text-foreground/45">
                          {method.label}
                        </span>
                        <span className="text-xs font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                          {method.value}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                ))}
              </div>

              {/* Instant WhatsApp Quick CTA */}
              <div className="pt-4 border-t border-cardBorder/40">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs tracking-wide transition-all duration-200 shadow-lg group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-slate-950" />
                  <span>Send Quick Enquiry via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="p-5 rounded-2xl border border-cardBorder bg-cardBg glass-panel flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-background border border-cardBorder">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <span className="block text-[10px] font-code font-semibold uppercase tracking-wider text-foreground/45">
                  Location & Availability
                </span>
                <span className="text-xs font-bold text-foreground block">
                  Indore, Madhya Pradesh, India
                </span>
                <span className="text-[11px] text-accentCyan font-code">Remote Worldwide & In-Person</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Detailed Project Enquiry Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-2xl border border-cardBorder bg-cardBg glass-panel p-6 sm:p-8 glow-card">
              <form onSubmit={handleSubmit} className="space-y-6" id="project-enquiry-form">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                      <User className="w-3.5 h-3.5 mr-1.5 text-accentCyan" />
                      Your Name <span className="text-accentCyan ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                      <Mail className="w-3.5 h-3.5 mr-1.5 text-accentCyan" />
                      Email Address <span className="text-accentCyan ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@company.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Project Type & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label htmlFor="form-projectType" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                      <Layers className="w-3.5 h-3.5 mr-1.5 text-accentPurple" />
                      Project Type
                    </label>
                    <select
                      id="form-projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                    >
                      <option value="Website" className="bg-background text-foreground">Business Website / Landing Page</option>
                      <option value="Ecommerce" className="bg-background text-foreground">Ecommerce Website</option>
                      <option value="Web App" className="bg-background text-foreground">Custom Web App & Admin Dashboard</option>
                      <option value="Mobile App" className="bg-background text-foreground">Android & iOS Flutter Mobile App</option>
                      <option value="UI/UX & Maintenance" className="bg-background text-foreground">UI/UX Improvements & Maintenance</option>
                      <option value="API & Backend" className="bg-background text-foreground">API & Backend Development</option>
                      <option value="Other" className="bg-background text-foreground">Other Custom Project</option>
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div className="space-y-2">
                    <label htmlFor="form-budget" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                      <DollarSign className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                      Estimated Budget
                    </label>
                    <select
                      id="form-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                    >
                      <option value="Under ₹25,000" className="bg-background text-foreground">Under ₹25,000</option>
                      <option value="₹25,000–₹75,000" className="bg-background text-foreground">₹25,000 – ₹75,000</option>
                      <option value="₹75,000–₹2,00,000" className="bg-background text-foreground">₹75,000 – ₹2,00,000</option>
                      <option value="₹2,00,000+" className="bg-background text-foreground">₹2,00,000+</option>
                      <option value="Not sure yet" className="bg-background text-foreground">Not sure yet</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Launch Date & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Desired Launch Date */}
                  <div className="space-y-2">
                    <label htmlFor="form-launchDate" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                      Desired Launch Date
                    </label>
                    <select
                      id="form-launchDate"
                      name="launchDate"
                      value={formData.launchDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                    >
                      <option value="Urgent (Asap)" className="bg-background text-foreground">Urgent (Within 2 Weeks)</option>
                      <option value="Within 1 Month" className="bg-background text-foreground">Within 1 Month</option>
                      <option value="2-3 Months" className="bg-background text-foreground">2 – 3 Months</option>
                      <option value="Flexible Timeline" className="bg-background text-foreground">Flexible Timeline</option>
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2">
                    <label htmlFor="form-contactMethod" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                      <Phone className="w-3.5 h-3.5 mr-1.5 text-accentCyan" />
                      Preferred Contact Method
                    </label>
                    <select
                      id="form-contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                    >
                      <option value="WhatsApp" className="bg-background text-foreground">WhatsApp</option>
                      <option value="Email" className="bg-background text-foreground">Email</option>
                      <option value="Phone Call" className="bg-background text-foreground">Phone Call</option>
                    </select>
                  </div>
                </div>

                {/* Required Features / Requirements */}
                <div className="space-y-2">
                  <label htmlFor="form-requirements" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5 text-accentCyan" />
                    Required Features & Key Requirements <span className="text-accentCyan ml-1">*</span>
                  </label>
                  <textarea
                    id="form-requirements"
                    name="requirements"
                    rows={4}
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Describe what your app or website needs to do (e.g. user login, payment gateway, admin panel, product catalog, offline sync...)"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200 resize-none"
                  />
                </div>

                {/* Reference Websites or Apps */}
                <div className="space-y-2">
                  <label htmlFor="form-references" className="text-xs font-semibold uppercase tracking-widest text-foreground/60 font-code flex items-center">
                    <LinkIcon className="w-3.5 h-3.5 mr-1.5 text-foreground/45" />
                    Reference Websites or Apps (Optional)
                  </label>
                  <input
                    type="text"
                    id="form-references"
                    name="references"
                    value={formData.references}
                    onChange={handleInputChange}
                    placeholder="e.g. stripe.com, Airbnb app UI style..."
                    className="w-full px-4 py-3 rounded-xl border border-cardBorder bg-background/50 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-accentCyan focus:border-accentCyan text-sm transition-all duration-200"
                  />
                </div>

                {/* Buttons: Submit + WhatsApp Direct Send */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={formStatus.type === "sending"}
                    className="flex-1 inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold tracking-wide bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 shadow-lg"
                    id="form-submit-btn"
                  >
                    {formStatus.type === "sending" ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <span>Submit Project Enquiry</span>
                        <Send className="w-4 h-4 ml-2" />
                      </span>
                    )}
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-4 px-6 rounded-xl text-sm font-bold tracking-wide border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                {/* Notice text requested in prompt */}
                <p className="text-xs text-foreground/50 text-center font-code pt-1">
                  Share a few details about your idea. I’ll reply within one business day with the next steps and an estimate range.
                </p>

                {/* Form response display */}
                {formStatus.type !== "idle" && (
                  <motion.div
                    className={`p-4 rounded-xl border flex items-start space-x-3 text-xs font-semibold mt-4 ${
                      formStatus.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formStatus.type === "success" && <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 text-emerald-400" />}
                    <span className="leading-relaxed">{formStatus.message}</span>
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
