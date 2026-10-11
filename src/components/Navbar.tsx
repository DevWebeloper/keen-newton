"use client";

import React, { useState } from "react";
import { Terminal, Mail, Sliders, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  blurIntensity: number;
  setBlurIntensity: (val: number) => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  blurIntensity,
  setBlurIntensity,
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between border border-white/10 shadow-2xl">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-sky-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-tight text-white text-sm sm:text-base">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono hidden sm:inline-block">
                  @{PERSONAL_INFO.handle}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                Systems & Web Architect
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300 font-medium">
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#origin-story"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Origin Story (XDA)
            </a>
            <a
              href="#aura-glass"
              className="hover:text-cyan-400 transition-colors"
            >
              Aura Glass
            </a>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#journey"
              className="hover:text-cyan-400 transition-colors"
            >
              Timeline
            </a>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Aura Glass Blur Controller Trigger */}
            <div className="relative">
              <button
                onClick={() => setSliderOpen(!sliderOpen)}
                title="Customize Glassmorphism Blur"
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-1.5 text-xs font-mono"
              >
                <Sliders className="h-4 w-4 text-cyan-400" />
                <span className="hidden sm:inline">{blurIntensity}px</span>
              </button>

              {sliderOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-panel p-4 rounded-xl border border-cyan-500/30 shadow-2xl z-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-white">
                      Aura Glass Blur
                    </span>
                    <span className="text-xs font-mono text-cyan-400">
                      {blurIntensity}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="32"
                    step="2"
                    value={blurIntensity}
                    onChange={(e) => setBlurIntensity(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <p className="text-[10px] text-slate-400 mt-2">
                    Direct live CSS backdrop-filter intensity (inspired by Aura Glass theme).
                  </p>
                </div>
              )}
            </div>

            {/* Quick Terminal Button */}
            <button
              onClick={onOpenTerminal}
              title="Open Systems Console"
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 transition-all hidden sm:flex items-center gap-1.5 text-xs font-mono"
            >
              <Terminal className="h-4 w-4 text-emerald-400" />
              <span className="text-xs">Console</span>
            </button>

            {/* GitHub Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white transition-all"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            {/* CTA Contact */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 border border-white/10 shadow-2xl flex flex-col gap-3 text-sm">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-1"
            >
              Projects & Work
            </a>
            <a
              href="#origin-story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-1 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Origin Story (10Y XDA)
            </a>
            <a
              href="#aura-glass"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-1"
            >
              Aura Glass (Desktop Theme)
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-1"
            >
              Skills & Architecture
            </a>
            <a
              href="#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400 py-1"
            >
              Timeline
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="text-emerald-400 py-1 text-left flex items-center gap-2"
            >
              <Terminal className="h-4 w-4" />
              Launch Systems Console
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold text-xs mt-1"
            >
              Contact Ghaith
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
