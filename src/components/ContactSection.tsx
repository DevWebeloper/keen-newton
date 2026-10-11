"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
  FileText,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let&apos;s Build Together</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready to Make It Happen?
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Available for remote full-time positions, senior frontend/full-stack roles, and high-impact engineering contracts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Whether you have an open senior role, a high-traffic platform to scale, or want to discuss low-level systems and design engineering:
              </p>
            </div>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-slate-400">Direct Email:</div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono text-cyan-300 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition-colors flex items-center gap-1.5 text-xs flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability status card */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 space-y-1">
              <div className="font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse" />
                Current Status: Available
              </div>
              <p className="text-slate-300 text-[11px] font-sans">
                Open to Remote Worldwide (US, Europe, Middle East, Global). Full-time and Contract.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-slate-400">Profiles & Repositories:</div>
              <div className="flex flex-col gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white flex items-center justify-between text-xs transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub (@DevWebeloper)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.xda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white flex items-center justify-between text-xs transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>XDA Developers (NovaOS Thread)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
            {formSent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. I will review your message and reply promptly. You can also email me directly at{" "}
                  <span className="text-cyan-300 font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 text-white placeholder:text-slate-600 text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 text-white placeholder:text-slate-600 text-xs focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Role / Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="Senior Full-Stack Engineer / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 text-white placeholder:text-slate-600 text-xs focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about the role, project requirements, or challenges you're looking to solve..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400 text-white placeholder:text-slate-600 text-xs focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
