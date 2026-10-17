"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Terminal,
  Sliders,
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Triangle,
  Eye,
  EyeOff,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  blurIntensity: number;
  setBlurIntensity: (val: number) => void;
  accentColor?: string;
  setAccentColor?: (color: string) => void;
  declassified?: boolean;
  setDeclassified?: (val: boolean) => void;
  onOpenTerminal: () => void;
}

const RESONANCE_FREQUENCIES = [
  { name: "Crimson Resonance", hex: "#e11d48", badge: "bg-rose-600" },
  { name: "Threshold Amber", hex: "#f59e0b", badge: "bg-amber-500" },
  { name: "Monolith Bone", hex: "#f4f4f0", badge: "bg-zinc-100" },
  { name: "Astral Cold", hex: "#38bdf8", badge: "bg-sky-400" },
];

export const Navbar: React.FC<NavbarProps> = ({
  blurIntensity,
  setBlurIntensity,
  accentColor = "#e11d48",
  setAccentColor,
  declassified = false,
  setDeclassified,
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="glass-panel brutal-frame px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
          {/* Directorate Monogram & Inverted Pyramid Emblem */}
          <a
            href="#"
            data-cursor="SECTOR 00"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative h-10 w-10 bg-black border border-white/25 flex items-center justify-center text-rose-500 group-hover:border-rose-500 transition-all">
              <Triangle className="h-4 w-4 rotate-180 fill-rose-600/30 text-rose-500" />
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-amber-400 animate-status-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2.5">
                <span className="font-display font-bold tracking-[0.12em] uppercase text-white text-sm sm:text-base">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-rose-600/15 border border-rose-600/40 text-rose-400 font-mono tracking-widest uppercase hidden sm:inline-block">
                  LVL-5 // @{PERSONAL_INFO.handle}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.16em] text-zinc-400 uppercase">
                <span className="hidden md:inline">
                  DIRECTORATE OF SYSTEMS &amp; WEB ARCHITECTURE
                </span>
              </div>
            </div>
          </a>

          {/* Brutalist Sector Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-black/60 border border-white/15 p-1 text-[11px] font-mono tracking-wider uppercase">
            <a
              href="#projects"
              data-cursor="CASE BOARD"
              className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-rose-600/20 transition-all flex items-center gap-1.5"
            >
              <span className="text-rose-500 font-bold">01</span>
              <span>Case Board</span>
            </a>
            <a
              href="#origin-story"
              data-cursor="HARDWARE"
              className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-rose-600/20 transition-all flex items-center gap-1.5"
            >
              <span className="text-amber-400 font-bold">02</span>
              <span>Altered Hardware</span>
            </a>
            <a
              href="#aura-glass"
              data-cursor="RESEARCH"
              className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-rose-600/20 transition-all flex items-center gap-1.5"
            >
              <span className="text-rose-500 font-bold">03</span>
              <span>Research Lab</span>
            </a>
            <a
              href="#skills"
              data-cursor="CLEARANCE"
              className="px-3 py-1.5 text-zinc-300 hover:text-white hover:bg-rose-600/20 transition-all flex items-center gap-1.5"
            >
              <span className="text-amber-400 font-bold">04</span>
              <span>Matrix</span>
            </a>
            <Link
              href="/cv"
              data-cursor="DOSSIER"
              className="px-3 py-1.5 bg-white/10 border border-white/25 text-white hover:bg-white hover:text-black transition-all flex items-center gap-1.5 font-bold"
            >
              <FileText className="w-3.5 h-3.5 text-rose-500" />
              <span>Full Dossier</span>
            </Link>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* Declassify Toggle Button */}
            {setDeclassified && (
              <button
                onClick={() => setDeclassified(!declassified)}
                data-cursor="DECLASSIFY"
                title="Declassify [REDACTED] Dossier Entries"
                className={`hidden sm:flex items-center gap-1.5 px-2.5 py-2 border text-[11px] font-mono tracking-wider uppercase transition-all ${
                  declassified
                    ? "bg-amber-400 text-black border-amber-300 font-bold"
                    : "bg-black/60 border-white/15 text-zinc-300 hover:border-amber-400/50 hover:text-amber-300"
                }`}
              >
                {declassified ? (
                  <Eye className="w-3.5 h-3.5" />
                ) : (
                  <EyeOff className="w-3.5 h-3.5 text-amber-400" />
                )}
                <span className="hidden xl:inline">
                  {declassified ? "Unredacted" : "Declassify"}
                </span>
              </button>
            )}

            {/* Resonance Frequency & Optical Refraction Tuner */}
            <div className="relative">
              <button
                onClick={() => setSliderOpen(!sliderOpen)}
                data-cursor="RESONANCE"
                title="Calibrate Resonance Frequency & Optical Refraction"
                className="px-2.5 py-2 bg-black/60 border border-white/15 hover:border-rose-500 text-zinc-200 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
              >
                <Sliders className="h-3.5 w-3.5 text-rose-500" />
                <span className="hidden sm:inline">{blurIntensity}px</span>
              </button>

              {sliderOpen && (
                <div className="absolute right-0 mt-3 w-76 glass-panel brutal-frame p-5 border border-rose-500/40 shadow-2xl z-50 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                    <span className="text-xs font-display font-bold tracking-widest uppercase text-white flex items-center gap-2">
                      <Triangle className="w-3 h-3 rotate-180 text-rose-500" />
                      Resonance Calibration
                    </span>
                    <button
                      onClick={() => setSliderOpen(false)}
                      className="text-zinc-400 hover:text-white text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Blur Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                        Optical Glass Density
                      </span>
                      <span className="text-[11px] font-mono text-amber-400 font-bold">
                        {blurIntensity}px
                      </span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="36"
                      step="2"
                      value={blurIntensity}
                      onChange={(e) => setBlurIntensity(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 appearance-none cursor-pointer accent-rose-600"
                    />
                  </div>

                  {/* Reality Shift Wavelength Picker */}
                  {setAccentColor && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 block">
                        Threshold Wavelength:
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {RESONANCE_FREQUENCIES.map((preset) => (
                          <button
                            key={preset.hex}
                            onClick={() => setAccentColor(preset.hex)}
                            className={`px-2.5 py-2 text-[10px] font-mono uppercase tracking-wider flex items-center gap-2 border transition-all ${
                              accentColor === preset.hex
                                ? "bg-white/15 border-rose-500 text-white font-bold"
                                : "bg-black/50 border-white/10 text-zinc-400 hover:text-white"
                            }`}
                          >
                            <span className={`w-2 h-2 ${preset.badge}`} />
                            <span className="truncate">{preset.name.split(" ")[0]}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mainframe Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              data-cursor="MAINFRAME"
              title="Open Mainframe Console (⌘K)"
              className="px-2.5 py-2 bg-black/60 border border-white/15 hover:border-amber-400/60 text-zinc-300 hover:text-amber-300 transition-all hidden sm:flex items-center gap-1.5 text-xs font-mono"
            >
              <Terminal className="h-3.5 w-3.5 text-amber-400" />
              <span>CLI</span>
            </button>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="ARCHIVE"
              aria-label="GitHub Profile"
              className="p-2 bg-black/60 border border-white/15 hover:border-white/40 text-zinc-300 hover:text-white transition-all"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            {/* Primary Hotline CTA */}
            <a
              href="#contact"
              data-cursor="HOTLINE"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-rose-600 text-white hover:bg-white hover:text-black font-display font-bold text-xs tracking-wider uppercase shadow-lg shadow-rose-600/25 transition-all"
            >
              <span>Direct Hotline</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-black/60 border border-white/15 text-zinc-300"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 glass-panel brutal-frame p-5 border border-white/20 shadow-2xl flex flex-col gap-3 text-xs font-mono uppercase tracking-wider">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-rose-400 py-1.5 flex items-center justify-between border-b border-white/10"
            >
              <span>01 // The Case Board (11 Files)</span>
              <ArrowUpRight className="w-4 h-4 text-rose-500" />
            </a>
            <a
              href="#origin-story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1.5 flex items-center justify-between border-b border-white/10"
            >
              <span>02 // Altered Hardware (1M+ Units)</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href="#aura-glass"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-rose-400 py-1.5 flex items-center justify-between border-b border-white/10"
            >
              <span>03 // Research Sector (Linux Suite)</span>
              <ArrowUpRight className="w-4 h-4 text-rose-500" />
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-200 hover:text-amber-400 py-1.5 flex items-center justify-between border-b border-white/10"
            >
              <span>04 // Clearance Matrix</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </a>
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="text-amber-400 font-bold py-1.5 flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              <span>05 // Declassified CV Dossier</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="text-rose-400 py-1.5 text-left flex items-center gap-2"
            >
              <Terminal className="h-4 w-4" />
              <span>Open Mainframe Terminal</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
