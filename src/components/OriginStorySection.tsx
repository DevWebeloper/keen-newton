"use client";

import React, { useState } from "react";
import {
  Cpu,
  Smartphone,
  ExternalLink,
  Flame,
  Binary,
  Sliders,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const OriginStorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"story" | "engineering" | "mindset">("story");
  const [gpuPatched, setGpuPatched] = useState<boolean>(true);

  return (
    <section id="origin-story" className="py-24 relative">
      {/* Ambient Crimson & Amber Threshold Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 border-b border-white/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest">
              <Binary className="w-3.5 h-3.5" />
              <span>[SEC-03 // ALTERED HARDWARE ARTIFACT • 1,000,000+ UNITS]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] text-white leading-[1.02]">
              BEFORE THE WEB, THERE WAS{" "}
              <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-rose-500">
                bare metal.
              </span>
            </h2>
            <p className="text-zinc-300 text-base max-w-2xl">
              Ten years ago on XDA Developers, I treated resource-constrained smartphones like mainframe nodes—patching proprietary Mali GPU binaries in hex, rewriting Exynos HAL routing, and shipping custom OS firmware to over 1,000,000 users.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={PERSONAL_INFO.xda}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="XDA ARCHIVE"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-rose-600 text-white hover:bg-white hover:text-black text-xs font-mono font-bold uppercase tracking-widest transition-all"
            >
              <span>Inspect XDA Dossier</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/DevWebeloper/device_xiaomi_perseus"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="DEVICE TREE"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/20 text-zinc-200 hover:text-amber-400 text-xs font-mono uppercase tracking-widest transition-all"
            >
              <span>Perseus Kernel Tree</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 12-Column Brutalist Hardware Bench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Classified Field Logs */}
          <div className="lg:col-span-7 glass-panel brutal-frame p-6 sm:p-9 flex flex-col justify-between">
            <div>
              {/* Brutalist Tab Bar */}
              <div className="flex flex-wrap gap-2 border-b border-white/15 pb-4 mb-6">
                <button
                  onClick={() => setActiveTab("story")}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                    activeTab === "story"
                      ? "bg-rose-600 text-white font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  LOG 01 // THE 1M+ ROM PORT
                </button>
                <button
                  onClick={() => setActiveTab("engineering")}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                    activeTab === "engineering"
                      ? "bg-rose-600 text-white font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  LOG 02 // GPU HEX OVERRIDE
                </button>
                <button
                  onClick={() => setActiveTab("mindset")}
                  className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                    activeTab === "mindset"
                      ? "bg-rose-600 text-white font-bold"
                      : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  LOG 03 // METAL-TO-WEB DNA
                </button>
              </div>

              {/* Log 01 */}
              {activeTab === "story" && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-2.5">
                    <Smartphone className="w-5 h-5 text-amber-400" />
                    Artifact #G610X — NovaOS &amp; NoteFE Full Port
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    The Samsung Galaxy J7 Prime (<code className="text-amber-400 font-mono">G610X</code>) was an Exynos 7870 device with locked compositor pipelines. I extracted, decompiled, and transplanted the complete{" "}
                    <span className="redacted-span">Samsung Note Fan Edition (Android 7.0)</span> firmware stack—rebuilding proprietary camera HAL blobs, Exynos audio mixer paths, and SELinux contexts.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-4 bg-black/60 border-l-2 border-rose-600">
                      <div className="font-display text-2xl font-bold text-white">1,000,000+</div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-rose-400 mt-0.5">
                        Field Installations
                      </div>
                    </div>
                    <div className="p-4 bg-black/60 border-l-2 border-amber-400">
                      <div className="font-display text-2xl font-bold text-white">15,000+</div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 mt-0.5">
                        Operative Network
                      </div>
                    </div>
                    <div className="p-4 bg-black/60 border-l-2 border-white">
                      <div className="font-display text-2xl font-bold text-white">12 Variants</div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 mt-0.5">
                        Blind Cross-Ported
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Log 02 */}
              {activeTab === "engineering" && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-2.5">
                    <Binary className="w-5 h-5 text-rose-500" />
                    Binary Override: Unlocking 60fps Hardware Blur
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Flagship interfaces relied on real-time Gaussian blur shaders inside{" "}
                    <code className="text-amber-400 font-mono">SurfaceFlinger</code>. On budget silicon, vendor drivers forced an opaque fallback. By disassembling the proprietary Mali-T830 binary (<span className="redacted-span">libGLES_mali.so</span>) and patching the branch instruction in hex, I unlocked native 60fps GPU-accelerated blur with zero thermal runaway.
                  </p>
                  <div className="p-4 bg-black/70 border-l-4 border-amber-400 text-xs font-mono text-zinc-200 space-y-1.5">
                    <div className="font-bold text-amber-400 uppercase tracking-widest">
                      BLIND CROSS-PORTING PROTOCOL:
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      By mapping SoC register trees, ramdisk init scripts, and vendor HAL headers, I compiled and shipped bugless builds across 12 device variants without physical access to the hardware.
                    </p>
                  </div>
                </div>
              )}

              {/* Log 03 */}
              {activeTab === "mindset" && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white flex items-center gap-2.5">
                    <Cpu className="w-5 h-5 text-amber-400" />
                    Why Low-Level Discipline Dominates Modern Web
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Tracking kernel panics without a debugger permanently changes how you engineer web applications:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 bg-black/60 border border-white/15">
                      <div className="font-mono font-bold text-rose-400 uppercase tracking-wider mb-1">
                        01 // COMPOSITOR DISCIPLINE
                      </div>
                      <p className="text-zinc-300">
                        Every transition is engineered for the GPU compositor thread—zero layout thrashing, zero frame drops.
                      </p>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/15">
                      <div className="font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                        02 // ZERO-PLUGIN ARCHITECTURE
                      </div>
                      <p className="text-zinc-300">
                        For HRF, Oslo Freedom Forum, and JAR Capital, I replace bloated plugins with surgical custom PHP &amp; JS modules.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between gap-4 text-xs font-mono text-zinc-400 uppercase tracking-wider">
              <span>&ldquo;When vendor specs declare it impossible, inspect the binary.&rdquo;</span>
              <span className="text-rose-500 font-bold">RECORD // VERIFIED</span>
            </div>
          </div>

          {/* Right 5 Columns: LIVE MALI GPU HEX OVERRIDE BENCH */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-panel brutal-frame p-6 border border-rose-500/40 shadow-2xl flex-1 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-rose-600 animate-ping" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-white">
                      HEX OVERRIDE BENCH // MALI-T830
                    </span>
                  </div>
                  <button
                    onClick={() => setGpuPatched(!gpuPatched)}
                    data-cursor="OVERRIDE"
                    className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border transition-all flex items-center gap-1.5 ${
                      gpuPatched
                        ? "bg-amber-400 text-black border-amber-300"
                        : "bg-rose-600/20 text-rose-300 border-rose-500/40"
                    }`}
                  >
                    <Sliders className="w-3 h-3" />
                    <span>{gpuPatched ? "OVERRIDE: ENGAGED" : "STOCK VENDOR LOCK"}</span>
                  </button>
                </div>

                {/* Memory Offset Inspector */}
                <div className="mt-4 p-3.5 bg-black/85 border border-white/15 font-mono text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-zinc-400 text-[10px] uppercase tracking-wider">
                    <span>BINARY: /vendor/lib64/egl/libGLES_mali.so</span>
                    <span className={gpuPatched ? "text-amber-400 font-bold" : "text-rose-500"}>
                      {gpuPatched ? "60.0 FPS STABLE" : "28.4 FPS FALLBACK"}
                    </span>
                  </div>
                  <div className="p-2 bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <span className="text-zinc-400">OFFSET 0x004F2A10:</span>
                    {gpuPatched ? (
                      <span className="text-amber-400 font-bold">
                        1F 20 03 D5 // NOP [BLUR_UNLOCKED]
                      </span>
                    ) : (
                      <span className="text-rose-500">
                        54 00 01 41 // B.NE #vendor_lock
                      </span>
                    )}
                  </div>
                </div>

                {/* Live Optical Chamber Preview */}
                <div className="mt-4 relative h-36 overflow-hidden border border-white/20 p-4 flex flex-col justify-between bg-[#08080c]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/45 via-amber-500/30 to-zinc-900 animate-pulse" />
                  <div className="absolute top-3 left-8 w-20 h-20 rounded-full bg-rose-600/70" />
                  <div className="absolute bottom-2 right-10 w-24 h-24 rounded-full bg-amber-400/70" />

                  <div
                    className="relative z-10 my-auto p-3.5 border transition-all duration-300"
                    style={{
                      backdropFilter: gpuPatched ? "blur(18px) saturate(160%)" : "blur(0px)",
                      WebkitBackdropFilter: gpuPatched ? "blur(18px) saturate(160%)" : "blur(0px)",
                      backgroundColor: gpuPatched
                        ? "rgba(12, 12, 18, 0.58)"
                        : "rgba(18, 18, 22, 0.98)",
                      borderColor: gpuPatched
                        ? "rgba(245, 158, 11, 0.55)"
                        : "rgba(225, 29, 72, 0.4)",
                    }}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-display font-bold uppercase tracking-wider text-white">
                        SurfaceFlinger Optical Field
                      </span>
                      <span className="font-mono text-[10px] text-amber-400 font-bold">
                        {gpuPatched ? "1.6ms GPU SHADER" : "OPAQUE LOCK"}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-200 mt-1 font-mono">
                      {gpuPatched
                        ? "Hardware Gaussian blur active across 12 device trees."
                        : "Vendor restriction active: GPU blur shader bypassed."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => setGpuPatched(!gpuPatched)}
                  className="text-amber-400 hover:text-white underline uppercase tracking-wider"
                >
                  {gpuPatched
                    ? "[Revert to Stock Vendor Binary]"
                    : "[Inject 0x004F2A10 Hex Override]"}
                </button>
                <span className="text-zinc-500">AARCH64 // ELF64</span>
              </div>
            </div>

            {/* XDA Dossier Footer Card */}
            <div className="glass-panel brutal-frame p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-rose-600/15 text-rose-500 border border-rose-500/40">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold uppercase tracking-wider text-white">
                    XDA Recognized Developer Record
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">
                    Thread #3682256 // NovaOS NoteFE Full Port
                  </p>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.xda}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-rose-600 border border-white/15 text-white transition-all"
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
