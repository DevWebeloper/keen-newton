"use client";

import React from "react";
import {
  Download,
  Users,
  Code2,
  Globe,
  ArrowRight,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { PERSONAL_INFO, CORE_STATS } from "@/data/portfolioData";

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-status-pulse"></span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Systems-to-Pixels Engineer</span>
          </div>
        </div>

        {/* Hero Title & Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            <span className="block text-slate-300 text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              Hi, I&apos;m {PERSONAL_INFO.name}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
              &ldquo;{PERSONAL_INFO.headline}&rdquo;
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            I don&apos;t just build interfaces—I architect entire experiences from the metal up. 
            From <span className="text-cyan-300 font-medium">reverse-engineering Android GPU libraries</span> and distributing ROMs to over <span className="text-emerald-300 font-medium">1M+ users</span>, to engineering mission-critical platforms for high-traffic global NGOs (<span className="text-slate-100 font-medium">HRF</span>, <span className="text-slate-100 font-medium">Oslo Freedom Forum</span>), Swiss private wealth, and custom voice AI systems.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-semibold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Production Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#origin-story"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel-interactive text-slate-200 font-semibold text-sm hover:text-white transition-all"
            >
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>The 10Y XDA Origin Story</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-sm font-mono transition-all"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Launch Terminal</span>
            </button>
          </div>

          {/* Targeted Role Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-mono">Targeting:</span>
            {PERSONAL_INFO.rolesTargeted.map((role) => (
              <span
                key={role}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CORE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-cyan-400 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
