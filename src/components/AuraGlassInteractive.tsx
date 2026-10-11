"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Sliders,
  Copy,
  Check,
  Terminal,
  Monitor,
  Video,
  Fan,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface AuraGlassProps {
  blurIntensity: number;
  setBlurIntensity: (val: number) => void;
}

export const AuraGlassInteractive: React.FC<AuraGlassProps> = ({
  blurIntensity,
  setBlurIntensity,
}) => {
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState<"subtle" | "balanced" | "ultra">("balanced");

  const installScript =
    "curl -sSL https://raw.githubusercontent.com/DevWebeloper/aura-glass/main/install.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setPreset = (preset: "subtle" | "balanced" | "ultra") => {
    setActivePreset(preset);
    if (preset === "subtle") setBlurIntensity(8);
    if (preset === "balanced") setBlurIntensity(16);
    if (preset === "ultra") setBlurIntensity(28);
  };

  return (
    <section id="aura-glass" className="py-20 relative">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Monitor className="w-3.5 h-3.5" />
            <span>Open Source Desktop Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Aura Glass & Linux Desktop Innovation
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Translating 8 years of web design systems into the Linux OS. Bringing cohesive frosted glass, libadwaita styling, and desktop utilities to thousands of Linux power users.
          </p>
        </div>

        {/* Aura Glass Interactive Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background art elements */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: The Theme Info & Install */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                  GNOME Shell 48–50
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono">
                  GTK4 + libadwaita
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-mono">
                  Zero Root Required
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Aura Glass — Frosted-Glass GNOME Theme
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Linux desktop theming is notoriously fragmented. I engineered unified CSS stylesheets that harmoniously synchronize with <span className="text-cyan-300 font-medium">Blur my Shell</span>, top panel widgets, and GTK4 apps across Arch, Fedora, Ubuntu, and CachyOS.
              </p>

              {/* Install script copy box */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>One-Script Fast Installer:</span>
                  <span className="text-[11px] text-emerald-400">Arch • Fedora • Ubuntu • CachyOS</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/15 flex items-center justify-between gap-3 font-mono text-xs text-cyan-300 overflow-x-auto">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-slate-500 select-none">$</span>
                    <span className="truncate">{installScript}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-all flex items-center gap-1.5 flex-shrink-0"
                    title="Copy command"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/DevWebeloper/aura-glass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Star on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Live Interactive Glass Preview Card */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-6 border border-white/20 shadow-2xl transition-all relative overflow-hidden"
                style={{
                  backdropFilter: `blur(${blurIntensity}px)`,
                  WebkitBackdropFilter: `blur(${blurIntensity}px)`,
                  background: `rgba(255, 255, 255, 0.05)`,
                  boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.45)`,
                }}
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-300 ml-2">
                      Live Aura Glass Shaders
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300">
                    {blurIntensity}px blur
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-slate-200">
                    Interact with the slider below to test the live backdrop blur that powers this portfolio and Aura Glass:
                  </p>

                  {/* Slider Control */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Blur Radius</span>
                      <span className="text-cyan-400">{blurIntensity}px</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="32"
                      step="2"
                      value={blurIntensity}
                      onChange={(e) => setBlurIntensity(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Preset Pills */}
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => setPreset("subtle")}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        activePreset === "subtle"
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                          : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      Subtle (8px)
                    </button>
                    <button
                      onClick={() => setPreset("balanced")}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        activePreset === "balanced"
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                          : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      Balanced (16px)
                    </button>
                    <button
                      onClick={() => setPreset("ultra")}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                        activePreset === "ultra"
                          ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                          : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      Ultra (28px)
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono text-slate-300">
                    <span className="text-purple-400">backdrop-filter</span>: blur(
                    <span className="text-cyan-400">{blurIntensity}px</span>);
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companion Linux Projects: Syncplay Tunnel & AlienFX Linux */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Syncplay Tunnel */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Video className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Python • GTK4 • SSH
              </span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              Syncplay Tunnel
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              GTK4 desktop app created to watch synchronized movies and series with remote friends & family. Features zero-config GUI, pause/resume lockstep, and cryptographic proof that all traffic routes through a verified SSH egress before playback starts.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">MIT License</span>
              <a
                href="https://github.com/DevWebeloper/syncplay-tunnel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 font-medium"
              >
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* AlienFX Linux */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Fan className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Kernel • sysfs • C / Python
              </span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              AlienFX Linux SDK
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Built an Alienware RGB lighting & fan control SDK for Linux from scratch because Dell offered no Linux Command Center. Reverse-engineered hardware USB controllers and sysfs endpoints for the open-source community.
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">GPL-3.0 License</span>
              <a
                href="https://github.com/DevWebeloper/alienfx-linux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium"
              >
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
