"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Monitor,
  Video,
  Fan,
  ExternalLink,
  Wifi,
  Triangle,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

interface AuraGlassProps {
  blurIntensity: number;
  setBlurIntensity: (val: number) => void;
  accentColor?: string;
  setAccentColor?: (color: string) => void;
}

export const AuraGlassInteractive: React.FC<AuraGlassProps> = ({
  blurIntensity,
  setBlurIntensity,
  accentColor = "#e11d48",
  setAccentColor,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeApp, setActiveApp] = useState<"aura" | "syncplay" | "alienfx">("aura");
  const [tunnelAlive, setTunnelAlive] = useState(true);
  const [fanMode, setFanMode] = useState<"balanced" | "performance" | "gmode">("gmode");

  const installScript =
    "curl -sSL https://raw.githubusercontent.com/DevWebeloper/aura-glass/main/install.sh | bash";

  const handleCopy = () => {
    navigator.clipboard.writeText(installScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="aura-glass" className="py-24 relative">
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[350px] bg-rose-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/15 border border-rose-500/40 text-rose-400 text-xs font-mono uppercase tracking-widest">
              <Monitor className="w-3.5 h-3.5" />
              <span>[SEC-04 // RESEARCH SECTOR • LINUX DESKTOP &amp; HARDWARE LAB]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] text-white leading-[1.02]">
              LINUX{" "}
              <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-amber-400">
                containment
              </span>{" "}
              SUITE.
            </h2>
            <p className="text-zinc-300 text-base max-w-2xl">
              Operate three open-source Linux desktop &amp; hardware utilities live in the research console: calibrate the{" "}
              <span className="text-white font-semibold">Aura Glass GNOME 50</span> D-Bus compositor, trigger a fail-closed{" "}
              <span className="text-white font-semibold">Syncplay Tunnel</span> proxy cutoff, or transmit raw USB HID packets via{" "}
              <span className="text-white font-semibold">AlienFX-Linux</span>.
            </p>
          </div>

          {/* Protocol Switcher Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 glass-panel brutal-frame font-mono text-xs uppercase tracking-wider">
            <button
              onClick={() => setActiveApp("aura")}
              className={`px-4 py-2 flex items-center gap-2 transition-all ${
                activeApp === "aura"
                  ? "bg-rose-600 text-white font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Triangle className="w-3 h-3 rotate-180" />
              <span>01 // Aura Glass</span>
            </button>
            <button
              onClick={() => setActiveApp("syncplay")}
              className={`px-4 py-2 flex items-center gap-2 transition-all ${
                activeApp === "syncplay"
                  ? "bg-amber-400 text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>02 // Syncplay Tunnel</span>
            </button>
            <button
              onClick={() => setActiveApp("alienfx")}
              className={`px-4 py-2 flex items-center gap-2 transition-all ${
                activeApp === "alienfx"
                  ? "bg-white text-black font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Fan className="w-3.5 h-3.5" />
              <span>03 // AlienFX CLI</span>
            </button>
          </div>
        </div>

        {/* BRUTALIST GNOME 50 RESEARCH TERMINAL WORKSPACE */}
        <div className="border-2 border-white/20 overflow-hidden shadow-2xl relative bg-[#050508] brutal-frame">
          {/* Dynamic Threshold Light behind the Optical Glass Window */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -top-16 left-1/4 w-96 h-96 rounded-full blur-[90px] opacity-40 transition-colors duration-500"
              style={{ backgroundColor: accentColor }}
            />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/25 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-pattern opacity-45" />
          </div>

          {/* GNOME Shell 50 Brutalist Top Bar */}
          <div className="relative z-10 px-5 py-2.5 bg-black/85 border-b border-white/15 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-300">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-bold text-white">
                <span className="w-3 h-2 bg-rose-600 inline-block" />
                <span>GNOME 50 // SHELL</span>
              </div>
              <span className="text-zinc-500 hidden sm:inline">
                {activeApp === "aura"
                  ? "BUS: org.devwebeloper.AuraGlassSettings"
                  : activeApp === "syncplay"
                  ? "WATCHDOG: org.devwebeloper.SyncplayTunnel"
                  : "HID: alienfx-cli // USB APIv8"}
              </span>
            </div>

            <div className="text-amber-400 font-bold hidden md:block">
              OPTICAL REFRACTION: {blurIntensity}PX
            </div>

            <div className="flex items-center gap-3 text-[11px]">
              <span
                className={`px-2 py-0.5 border font-bold ${
                  tunnelAlive
                    ? "bg-amber-500/15 border-amber-500/40 text-amber-300"
                    : "bg-rose-600/25 border-rose-500 text-rose-300"
                }`}
              >
                {tunnelAlive ? "EGRESS: VERIFIED" : "BREACH HALTED"}
              </span>
              <Wifi className="w-3.5 h-3.5 text-rose-500" />
            </div>
          </div>

          {/* Stage Content */}
          <div className="relative z-10 p-6 sm:p-10">
            {/* PROTOCOL 01: AURA GLASS */}
            {activeApp === "aura" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-rose-600/20 text-rose-300 border border-rose-500/40 text-xs font-mono uppercase tracking-wider">
                      GNOME 48–51 Extension
                    </span>
                    <span className="px-3 py-1 bg-white/5 text-amber-400 border border-white/15 text-xs font-mono uppercase tracking-wider">
                      GTK4 + libadwaita + D-Bus
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
                    Aura Glass Desktop Suite
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    A complete optical-glass desktop environment unifying GTK3, GTK4, libadwaita, and GNOME Shell. Includes the first-party{" "}
                    <span className="redacted-span">Aura Glass Helper extension</span> connected via a D-Bus bridge to a native GTK4 settings GUI, alongside 3 custom{" "}
                    <code className="text-amber-400 font-mono">Blur My Shell v73</code> patches.
                  </p>

                  {/* Rootless Installer */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400">
                      <span>Rootless User-Space Deployment:</span>
                      <span className="text-amber-400">Arch • Fedora • Ubuntu • CachyOS</span>
                    </div>
                    <div className="p-3.5 bg-black/90 border border-white/20 flex items-center justify-between gap-3 font-mono text-xs text-amber-400">
                      <span className="truncate">$ {installScript}</span>
                      <button
                        onClick={handleCopy}
                        className="px-3 py-1.5 bg-white/10 hover:bg-rose-600 text-white transition-all flex items-center gap-1.5 flex-shrink-0 uppercase tracking-widest"
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

                  <div className="pt-1">
                    <a
                      href="https://github.com/DevWebeloper/aura-glass"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white font-display font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Inspect Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Live GTK4 Optical Calibrator Window */}
                <div className="lg:col-span-6">
                  <div
                    className="p-6 border border-white/25 shadow-2xl transition-all space-y-5 brutal-frame"
                    style={{
                      backdropFilter: `blur(${blurIntensity}px) saturate(150%)`,
                      WebkitBackdropFilter: `blur(${blurIntensity}px) saturate(150%)`,
                      backgroundColor: "rgba(14, 15, 20, 0.62)",
                    }}
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/15 font-mono text-xs uppercase tracking-wider">
                      <span className="font-bold text-white">
                        GTK4 // Optical Compositor Control
                      </span>
                      <span className="text-rose-400 font-bold">D-BUS ACTIVE</span>
                    </div>

                    <div className="p-4 bg-black/60 border border-white/15 space-y-2">
                      <div className="flex justify-between text-xs font-mono uppercase tracking-wider">
                        <span className="text-zinc-300">Global Refraction Sigma</span>
                        <span className="text-amber-400 font-bold">{blurIntensity}px</span>
                      </div>
                      <input
                        type="range"
                        min="4"
                        max="36"
                        step="2"
                        value={blurIntensity}
                        onChange={(e) => setBlurIntensity(Number(e.target.value))}
                        className="w-full h-2 bg-zinc-800 appearance-none cursor-pointer accent-rose-600"
                      />
                    </div>

                    <div className="p-4 bg-black/60 border border-white/15 space-y-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                        Threshold Wavelength Splicing (3D Monolith + OS):
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: "Crimson", hex: "#e11d48" },
                          { label: "Amber", hex: "#f59e0b" },
                          { label: "Bone", hex: "#f4f4f0" },
                          { label: "Astral", hex: "#38bdf8" },
                        ].map((col) => (
                          <button
                            key={col.hex}
                            onClick={() => setAccentColor?.(col.hex)}
                            className={`py-2 px-2 text-xs font-mono uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-all ${
                              accentColor === col.hex
                                ? "bg-white/20 border-rose-500 text-white font-bold"
                                : "bg-black/50 border-white/10 text-zinc-400 hover:text-white"
                            }`}
                          >
                            <span
                              className="w-2.5 h-2.5"
                              style={{ backgroundColor: col.hex }}
                            />
                            <span>{col.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROTOCOL 02: SYNCPLAY TUNNEL */}
            {activeApp === "syncplay" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono uppercase tracking-widest">
                    Python • GTK4 • SSH SOCKS5 • mpv / FFmpeg
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
                    Syncplay Tunnel — Fail-Closed Proxy Bridge
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Passing <code className="text-amber-400 font-mono">--http-proxy=socks5://...</code> to{" "}
                    <code className="text-rose-400 font-mono">mpv</code> fails silently because FFmpeg&apos;s HTTP layer ignores{" "}
                    <code className="text-amber-400 font-mono">socks5://</code> flags—leaking video traffic over the client&apos;s real IP. I built a local Python{" "}
                    <span className="redacted-span">HTTP CONNECT-to-SOCKS5 proxy bridge</span> and GTK4 watchdog that verifies the remote SSH exit IP and halts playback immediately if the tunnel drops.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => setTunnelAlive(!tunnelAlive)}
                      className={`px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-widest border transition-all ${
                        tunnelAlive
                          ? "bg-rose-600 text-white border-rose-500"
                          : "bg-amber-400 text-black border-amber-300"
                      }`}
                    >
                      {tunnelAlive
                        ? "⚡ Simulate SSH Tunnel Breach"
                        : "↻ Restore Verified SSH Tunnel"}
                    </button>
                    <a
                      href="https://github.com/DevWebeloper/syncplay-tunnel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-widest border border-white/20"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 bg-black/85 border border-white/20 font-mono text-xs space-y-4 brutal-frame">
                    <div className="flex items-center justify-between pb-3 border-b border-white/15 uppercase tracking-widest">
                      <span className="text-white font-bold">
                        EGRESS WATCHDOG // FAIL-CLOSED
                      </span>
                      <span
                        className={
                          tunnelAlive ? "text-amber-400 font-bold" : "text-rose-500 font-bold"
                        }
                      >
                        {tunnelAlive ? "CONTAINMENT INTACT" : "EMERGENCY CUTOFF"}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                        <span>01 // mpv / FFmpeg Stream</span>
                        <span className="text-amber-400">HTTP CONNECT :8889</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/10 flex items-center justify-between">
                        <span>02 // Local Python Bridge</span>
                        <span className="text-zinc-200">SOCKS5 :1080 TUNNEL</span>
                      </div>
                      <div
                        className={`p-3 border flex items-center justify-between ${
                          tunnelAlive
                            ? "bg-amber-500/10 border-amber-500/40 text-amber-300"
                            : "bg-rose-600/20 border-rose-500 text-rose-300"
                        }`}
                      >
                        <span>03 // Tailscale Remote Exit Node</span>
                        <span className="font-bold">
                          {tunnelAlive
                            ? "0 IP LEAKS [VERIFIED]"
                            : "SIGKILL -> MPV HALTED"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROTOCOL 03: ALIENFX-LINUX */}
            {activeApp === "alienfx" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="px-3 py-1 bg-white/10 text-white border border-white/25 text-xs font-mono uppercase tracking-widest">
                    C / C++ • CMake • Ninja • USB HID API v1–v8 • ACPI
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
                    AlienFX-Linux Hardware SDK &amp; CLI
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Ported the AlienFX and AlienFan SDKs and CLI (<code className="text-amber-400 font-mono">alienfx-cli</code>) to Linux, transmitting direct USB HID report packets (9-byte to 65-byte protocols) and ACPI thermal sensor overrides without Windows bloatware.
                  </p>
                  <a
                    href="https://github.com/DevWebeloper/alienfx-linux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white font-display font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Inspect C/C++ SDK</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-6 bg-black/85 border border-white/20 font-mono text-xs space-y-4 brutal-frame">
                    <div className="flex items-center justify-between pb-3 border-b border-white/15">
                      <span className="text-amber-400 font-bold">
                        $ sudo alienfx-cli --probe
                      </span>
                      <span className="text-zinc-400">VID: 0x187C // APIv8</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {["ZONE 01", "ZONE 02", "ZONE 03", "ZONE 04"].map((zone, i) => (
                        <div
                          key={i}
                          onClick={() =>
                            setAccentColor?.(
                              ["#e11d48", "#f59e0b", "#f4f4f0", "#38bdf8"][i]
                            )
                          }
                          className="p-3 border text-center cursor-pointer hover:scale-105 transition-transform"
                          style={{
                            boxShadow: `0 0 20px -4px ${accentColor}`,
                            borderColor: accentColor,
                          }}
                        >
                          <div className="text-[10px] text-zinc-400">{zone}</div>
                          <div className="text-white font-bold mt-1">{accentColor}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="text-zinc-400 text-[11px] uppercase tracking-wider">
                        ACPI Thermal Fan Override:
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "balanced", label: "NOMINAL (2400 RPM)" },
                          { id: "performance", label: "HIGH (4100 RPM)" },
                          { id: "gmode", label: "G-MODE (5400 RPM)" },
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() =>
                              setFanMode(m.id as "balanced" | "performance" | "gmode")
                            }
                            className={`p-2 border text-[10px] font-bold transition-all ${
                              fanMode === m.id
                                ? "bg-rose-600 border-rose-400 text-white"
                                : "bg-white/5 border-white/10 text-zinc-400"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
