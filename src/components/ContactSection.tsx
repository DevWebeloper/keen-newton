"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
  PhoneCall,
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
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-rose-600/15 via-amber-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 border-b border-white/15 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/15 border border-rose-500/40 text-rose-400 text-xs font-mono uppercase tracking-widest">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>[SEC-07 // DIRECT HOTLINE &amp; DISPATCH]</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] text-white leading-[1.02]">
            READY TO{" "}
            <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-amber-400">
              make it happen?
            </span>
          </h2>
          <p className="text-zinc-300 text-base max-w-2xl">
            Available for remote full-time senior roles, lead frontend/full-stack engineering positions, and high-impact architectural contracts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 Columns: Direct Hotline Channels */}
          <div className="lg:col-span-5 glass-panel brutal-frame p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                Direct Hotline Channels
              </h3>
              <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                Reach out directly via encrypted email, WhatsApp, or GitHub to initiate a technical briefing.
              </p>
            </div>

            <div className="p-4 bg-black/80 border border-white/15 space-y-3.5">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  PRIMARY DISPATCH (EMAIL):
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <span className="text-sm font-mono font-bold text-amber-400 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    data-cursor="COPY"
                    className="px-3 py-1.5 bg-white/10 hover:bg-rose-600 text-white transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest flex-shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                        <span>Copied</span>
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

              <div className="pt-3 border-t border-white/15">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  DIRECT LINE / WHATSAPP:
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-mono font-bold text-rose-400 hover:underline mt-1 inline-block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="p-4 bg-rose-600/10 border-l-4 border-rose-600 text-xs font-mono text-rose-300 space-y-1">
              <div className="font-bold flex items-center gap-2 uppercase tracking-widest">
                <span className="w-2 h-2 bg-rose-500 animate-status-pulse" />
                STATUS: CLEARED FOR IMMEDIATE DEPLOYMENT
              </div>
              <p className="text-zinc-300 text-[11px] font-sans">
                Remote Worldwide (US, Switzerland, France, UK, EU, MENA).
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-black/60 hover:bg-rose-600/15 border border-white/15 hover:border-rose-500 text-zinc-200 hover:text-white flex items-center justify-between text-xs font-mono uppercase tracking-wider transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-amber-400" />
                  <span>github.com/DevWebeloper</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-rose-500" />
              </a>

              <a
                href={PERSONAL_INFO.xda}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-black/60 hover:bg-rose-600/15 border border-white/15 hover:border-rose-500 text-zinc-200 hover:text-white flex items-center justify-between text-xs font-mono uppercase tracking-wider transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-rose-500" />
                  <span>XDA Recognized Developer Archive</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Dispatch Terminal Form */}
          <div className="lg:col-span-7 glass-panel brutal-frame p-6 sm:p-9">
            {formSent ? (
              <div className="py-14 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-400 text-black flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-white">
                  Dispatch Logged
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto">
                  Your transmission has been recorded in the directorate log. For immediate priority, email{" "}
                  <span className="text-amber-400 font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-5 py-2.5 bg-white/10 hover:bg-rose-600 text-xs font-mono uppercase tracking-widest text-white transition-colors"
                >
                  Transmit Another Dispatch
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    Transmit Official Dispatch
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    CHANNEL // SECURE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      01 // SENDER IDENTITY
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Directorate / Hiring Lead"
                      className="w-full px-4 py-3 bg-black/75 border border-white/15 focus:border-rose-500 text-white placeholder:text-zinc-600 text-xs font-mono focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      02 // RETURN FREQUENCY (EMAIL)
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="lead@organization.com"
                      className="w-full px-4 py-3 bg-black/75 border border-white/15 focus:border-rose-500 text-white placeholder:text-zinc-600 text-xs font-mono focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    03 // ASSIGNMENT OR ROLE CLASSIFICATION
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="Senior Full-Stack / Systems Engineer Role"
                    className="w-full px-4 py-3 bg-black/75 border border-white/15 focus:border-rose-500 text-white placeholder:text-zinc-600 text-xs font-mono focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    04 // BRIEFING PAYLOAD
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Specify architectural requirements, team scope, or timeline..."
                    className="w-full px-4 py-3 bg-black/75 border border-white/15 focus:border-rose-500 text-white placeholder:text-zinc-600 text-xs font-mono focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="DISPATCH"
                  className="w-full py-4 bg-rose-600 text-white font-display font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black shadow-xl shadow-rose-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Dispatch to Ghaith</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
