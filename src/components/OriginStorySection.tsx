"use client";

import React, { useState } from "react";
import {
  Cpu,
  Smartphone,
  Terminal,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Users,
  Download,
  Flame,
  Binary,
  Layers,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const OriginStorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"story" | "engineering" | "mindset">("story");

  return (
    <section id="origin-story" className="py-20 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
              <Binary className="w-3.5 h-3.5" />
              <span>The Hacker DNA • 10-Year XDA Chapter</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Before the Web, There Was <span className="text-emerald-400">Low-Level Metal</span>.
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mt-3">
              A decade ago on XDA, I was reverse-engineering GPU libraries, compiling custom Linux/Android kernels, and porting flagship OS builds onto budget hardware.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href={PERSONAL_INFO.xda}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 text-xs font-mono transition-all"
            >
              <span>View XDA Release Thread</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/DevWebeloper/device_xiaomi_perseus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
            >
              <span>Perseus Device Tree</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Feature Grid / Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Story & Feats */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              {/* Tab Selector */}
              <div className="flex gap-2 border-b border-white/10 pb-4 mb-6">
                <button
                  onClick={() => setActiveTab("story")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "story"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  01 // The Origin
                </button>
                <button
                  onClick={() => setActiveTab("engineering")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "engineering"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  02 // GPU & HAL Reverse-Eng
                </button>
                <button
                  onClick={() => setActiveTab("mindset")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === "mindset"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  03 // Why It Superpowers My Web Work
                </button>
              </div>

              {/* Tab 1: The Origin */}
              {activeTab === "story" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                    NovaOS & Galaxy NoteFE Full Port (Galaxy J7 Prime)
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The Samsung Galaxy J7 Prime was a budget handset that choked on heavy operations. Samsung reserved their fluid, high-end TouchWiz / Note Fan Edition interface for flagship devices. I refused to accept that limit.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I extracted, decompiled, and ported the entire Samsung Note Fan Edition Nougat system to the J7 Prime. By fixing missing vendor blobs, audio routing HAL, and camera libraries, I delivered a 100% bugless daily-driver ROM.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2 font-mono">
                    <div className="text-emerald-400 font-semibold">Community Scale & Impact:</div>
                    <ul className="space-y-1.5 text-slate-300">
                      <li>• Over 1,000,000+ total downloads across all versions & 12 devices.</li>
                      <li>• 15,000+ active members in the dedicated Telegram community.</li>
                      <li>• Still maintaining custom ROMs on personal daily drivers 10 years later.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 2: GPU & Reverse-Engineering */}
              {activeTab === "engineering" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Binary className="w-5 h-5 text-emerald-400" />
                    Reverse-Engineering GPU Libraries for Real-Time Blur
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Flagship ROMs relied on hardware GPU blur and backdrop shaders that were forcibly disabled by Samsung drivers on budget SoCs. Instead of stripping out the aesthetic, I dug into the Mali GPU libraries.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    By reverse-engineering proprietary graphics libraries and modifying the compositor pipeline, I forced real-time blur and smooth alpha blending at 60 FPS without overheating or battery drain.
                  </p>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 font-mono">
                    <span className="font-bold">The &ldquo;Device-Less&rdquo; Porting Feat:</span>
                    <p className="mt-1 text-slate-300">
                      I developed an abstraction workflow that allowed me to port ROMs to devices I didn&apos;t physically possess. By mapping SoC register maps, binder IPC, and kernel headers, the builds booted bugless on the very first flash.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 3: Mindset for Web */}
              {activeTab === "mindset" && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-400" />
                    From 256MB RAM Constraints to 60fps Web Performance
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Many modern web developers write code assuming infinite memory and Gigabit fiber. Coming from low-level systems means I view the DOM, memory allocations, and network packets through a completely different lens.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-semibold text-cyan-300 mb-1">Zero-Lag Discipline</div>
                      <p className="text-slate-400">Every extra JS bundle, repaint, or unoptimized loop triggers an immediate visceral reaction.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-semibold text-emerald-300 mb-1">Relentless Debugging</div>
                      <p className="text-slate-400">If you&apos;ve tracked kernel panics without an interactive debugger, solving production web bugs is trivial.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-semibold text-purple-300 mb-1">Aesthetic Precision</div>
                      <p className="text-slate-400">My love for frosted glass started when I forced GPU blur on Android; it lives today in Aura Glass.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-semibold text-amber-300 mb-1">Full Systems Empathy</div>
                      <p className="text-slate-400">I know what happens from the OS kernel up to the GPU compositor and the browser layout engine.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quote strip */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 italic">
              <span className="text-emerald-400 font-bold text-lg">&ldquo;</span>
              I don&apos;t just copy-paste solutions. When something is declared impossible by vendor specs, I inspect the binaries and make it happen.
            </div>
          </div>

          {/* Right Column: Terminal Spec Box */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-panel rounded-3xl p-6 border border-emerald-500/20 shadow-2xl relative overflow-hidden flex-1">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">novaos_j7prime_kernel.log</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  STABLE • BUGLESS
                </span>
              </div>

              <div className="mt-4 font-mono text-xs space-y-2 text-slate-300">
                <p className="text-slate-400"># System Identity</p>
                <p className="text-emerald-400">$ uname -a</p>
                <p className="text-slate-400 text-[11px]">
                  Linux android 3.18.14 #1 SMP PREEMPT NovaOS-J7Prime aarch64
                </p>

                <p className="text-slate-400 pt-2"># Key Deliverables</p>
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Samsung NoteFE Full UI Port (Android 7.0)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Real-time GPU Blur & Hardware Composer</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Native Camera HAL & Exynos Audio Fixed</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Cross-ported to 12 variations without devices</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs">
                  <div>
                    <div className="text-white font-bold text-lg">1,000,000+</div>
                    <div className="text-slate-400 text-[10px]">Total ROM Downloads</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-bold text-lg">15,000+</div>
                    <div className="text-slate-400 text-[10px]">Telegram Members</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-lg">10 Years</div>
                    <div className="text-slate-400 text-[10px]">Tinkering & Community</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live XDA Snapshot Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">XDA Recognized Porter</h4>
                  <p className="text-xs text-slate-400">Thread: [ROM][7.0] NovaOS J7Prime G610X NoteFE</p>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.xda}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all flex-shrink-0"
                aria-label="Visit XDA Forum Thread"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
