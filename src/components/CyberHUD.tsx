"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Cpu,
  Globe,
  Box,
  Terminal,
  Sun,
  Triangle,
  Eye,
  EyeOff,
} from "lucide-react";
import { ShaderMode } from "./QuantumCanvas3D";

// Analog Relay / Typewriter / Harmonic Resonance Synthesizer
let sharedAudioCtx: AudioContext | null = null;

export function playTactileSound(
  type: "hover" | "click" | "pulse" | "boot",
  enabled: boolean
) {
  if (!enabled || typeof window === "undefined") return;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    if (!sharedAudioCtx) {
      sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx.state === "suspended") {
      sharedAudioCtx.resume();
    }

    const osc = sharedAudioCtx.createOscillator();
    const gain = sharedAudioCtx.createGain();
    osc.connect(gain);
    gain.connect(sharedAudioCtx.destination);

    const now = sharedAudioCtx.currentTime;

    if (type === "hover") {
      // Subtle microfiche relay tick
      osc.type = "triangle";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(95, now + 0.025);
      gain.gain.setValueAtTime(0.018, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.035);
    } else if (type === "click") {
      // Heavy mechanical typewriter key strike
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(65, now + 0.065);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "pulse") {
      // Deep low-frequency Astral / Hedron resonance chord
      osc.type = "sine";
      osc.frequency.setValueAtTime(72, now);
      osc.frequency.exponentialRampToValueAtTime(144, now + 0.35);
      gain.gain.setValueAtTime(0.065, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.42);
    } else if (type === "boot") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.25);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch {
    // Ignore autoplay restrictions
  }
}

interface CyberHUDProps {
  fps: number;
  shaderMode: ShaderMode;
  setShaderMode: (mode: ShaderMode) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  flashlightBoost: boolean;
  setFlashlightBoost: (val: boolean) => void;
  declassified: boolean;
  setDeclassified: (val: boolean) => void;
  onTriggerPulse: () => void;
  onOpenTerminal: () => void;
}

const BOOT_DOSSIER_LINES = [
  "DOC-ID // FBC-SYS-2016-2026 // SUBJECT: ALKAWADRI, GHAITH [@DEVWEBELOPER]",
  "CLEARANCE: DIRECTORATE LEVEL 5 // FULL-STACK & LOW-LEVEL SYSTEMS ARCHITECT",
  "ARTIFACT 01: MALI-T830 GPU BINARY OVERRIDE (1,000,000+ FIELD INSTALLATIONS)",
  "ARTIFACT 02: AURA GLASS COMPOSITOR & SYNCPLAY FAIL-CLOSED EGRESS BRIDGE",
  "FIELD SITES: GENEVA [JAR] • OSLO [OFF] • NYC [HRF] • PARIS [CIDER] • NANTES [CRCDC]",
  "STATUS: CONTAINMENT STABLE // ALL PRODUCTION SYSTEMS OPERATIONAL",
];

export const CyberHUD: React.FC<CyberHUDProps> = ({
  fps,
  shaderMode,
  setShaderMode,
  soundEnabled,
  setSoundEnabled,
  flashlightBoost,
  setFlashlightBoost,
  declassified,
  setDeclassified,
  onTriggerPulse,
  onOpenTerminal,
}) => {
  const [booting, setBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSector, setActiveSector] = useState("SEC-01 // EXECUTIVE DOSSIER");
  const [sectorBanner, setSectorBanner] = useState<string | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(true);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const flashlightRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const lastSectorRef = useRef<string>("SEC-01 // EXECUTIVE DOSSIER");

  // Fast 1.05s Classified Microfiche Boot Sequence
  useEffect(() => {
    const start = performance.now();
    const duration = 1050;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setBootProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setBooting(false), 180);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Flashlight Beam, Cursor Reticle & Brutalist Sector Title Card Triggers
  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!hasFinePointer);

    let rafId: number;
    const updateCursor = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      if (flashlightRef.current) {
        flashlightRef.current.style.background = flashlightBoost
          ? `radial-gradient(650px circle at ${ringPos.current.x}px ${ringPos.current.y}px, rgba(245, 158, 11, 0.16), rgba(225, 29, 72, 0.08) 45%, rgba(4, 4, 6, 0.72) 85%)`
          : `radial-gradient(520px circle at ${ringPos.current.x}px ${ringPos.current.y}px, rgba(245, 158, 11, 0.08), rgba(225, 29, 72, 0.04) 45%, transparent 80%)`;
      }
      rafId = requestAnimationFrame(updateCursor);
    };

    if (hasFinePointer) {
      rafId = requestAnimationFrame(updateCursor);
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setCoords({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, [data-cursor], .redacted-span");
      if (interactive) {
        if (interactive.classList.contains("redacted-span")) {
          // Keep the cursor ring small and label-free so it doesn't cover the revealed text.
          setCursorHover(null);
        } else {
          const customLabel = interactive.getAttribute("data-cursor");
          setCursorHover(customLabel || "INSPECT");
        }
      } else {
        setCursorHover(null);
      }
    };

    const onScroll = () => {
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / maxScroll) * 100)));
      setScrollPct(pct);

      let nextSector = "SEC-01 // EXECUTIVE DOSSIER";
      if (pct < 14) nextSector = "SEC-01 // EXECUTIVE DOSSIER";
      else if (pct < 38) nextSector = "SEC-02 // THE CASE BOARD";
      else if (pct < 56) nextSector = "SEC-03 // ALTERED HARDWARE";
      else if (pct < 74) nextSector = "SEC-04 // RESEARCH SECTOR";
      else if (pct < 86) nextSector = "SEC-05 // STRUCTURAL MATRIX";
      else if (pct < 94) nextSector = "SEC-06 // FIELD LOGS";
      else nextSector = "SEC-07 // DIRECT HOTLINE";

      if (nextSector !== lastSectorRef.current) {
        lastSectorRef.current = nextSector;
        setActiveSector(nextSector);
        setSectorBanner(nextSector);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenTerminal();
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [flashlightBoost, onOpenTerminal]);

  // Auto-hide sector title card after 1.6s
  useEffect(() => {
    if (!sectorBanner) return;
    const timer = setTimeout(() => setSectorBanner(null), 1600);
    return () => clearTimeout(timer);
  }, [sectorBanner]);

  const modes: { id: ShaderMode; label: string; icon: React.ReactNode }[] = [
    { id: "aura", label: "MONOLITH", icon: <Triangle className="w-3 h-3 rotate-180" /> },
    { id: "silicon", label: "CATALYST", icon: <Cpu className="w-3 h-3" /> },
    { id: "globe", label: "WORLD MAP", icon: <Globe className="w-3 h-3" /> },
    { id: "wireframe", label: "ASTRAL WIRE", icon: <Box className="w-3 h-3" /> },
  ];

  return (
    <>
      {/* 1. VOLUMETRIC FLASHLIGHT / LIGHT-WELL OVERLAY */}
      <div
        ref={flashlightRef}
        className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Subtle 35mm Film Scanlines Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 3px)",
        }}
        aria-hidden="true"
      />

      {/* 2. BRUTALIST SECTOR ENTRY TITLE CARD OVERLAY (ON INITIAL BOOT) */}
      <AnimatePresence>
        {booting && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#060608] flex flex-col justify-between p-6 sm:p-12 font-mono select-none border-8 border-[#14151a]"
          >
            {/* Top Classification Header */}
            <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/15 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-rose-600 inline-block animate-pulse" />
                <span className="text-white font-bold tracking-[0.25em] uppercase">
                  DIRECTORATE OF SYSTEMS ARCHITECTURE // DOSSIER BOOT
                </span>
              </div>
              <button
                onClick={() => setBooting(false)}
                className="px-3 py-1 bg-white/5 hover:bg-rose-600 hover:text-white border border-white/20 text-zinc-200 text-[11px] tracking-widest uppercase transition-colors"
              >
                [BYPASS // ESC]
              </button>
            </div>

            {/* Center Massive Brutalist Sector Title */}
            <div className="my-auto max-w-4xl w-full mx-auto space-y-8">
              <div className="border-l-4 border-rose-600 pl-6 space-y-2">
                <div className="text-xs tracking-[0.35em] text-rose-500 uppercase font-bold">
                  CLASSIFIED TECHNICAL RECORD // CLEARANCE LEVEL 5
                </div>
                <div className="font-display text-4xl sm:text-7xl font-bold text-white tracking-[0.14em] uppercase">
                  GHAITH ALKAWADRI
                </div>
                <div className="text-sm sm:text-base font-mono text-amber-400 tracking-[0.2em] uppercase">
                  SYSTEMS-TO-PIXELS ARCHITECT // @DEVWEBELOPER
                </div>
              </div>

              {/* Brutalist Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs tracking-widest text-zinc-400">
                  <span>SYNCHRONIZING CONTAINMENT &amp; SHADER TELEMETRY</span>
                  <span className="text-rose-500 font-bold tabular-nums">
                    {String(bootProgress).padStart(3, "0")}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-600 via-amber-500 to-white transition-all duration-75"
                    style={{ width: `${bootProgress}%` }}
                  />
                </div>
              </div>

              {/* Microfiche Dossier Lines */}
              <div className="p-5 bg-black/80 border border-white/15 space-y-1.5 text-[11px] sm:text-xs text-zinc-300">
                {BOOT_DOSSIER_LINES.map((line, i) => {
                  const visible = bootProgress >= (i + 1) * 15;
                  return (
                    <div
                      key={i}
                      className={`transition-opacity duration-150 flex items-center gap-3 ${
                        visible ? "opacity-100" : "opacity-15"
                      }`}
                    >
                      <span className="text-rose-500 font-bold">[■]</span>
                      <span className="truncate tracking-wider">{line}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Stamp */}
            <div className="flex items-center justify-between text-[11px] text-zinc-500 border-t border-white/15 pt-4 tracking-widest uppercase">
              <span>MONOLITH ENGINE // WEBGL2 GLSL</span>
              <span>DO NOT DISTRIBUTE OUTSIDE AUTHORIZED SECTORS</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. BRIEF SECTOR TRANSITION TITLE FLASH (WHEN ENTERING NEW SECTORS) */}
      <AnimatePresence>
        {sectorBanner && !booting && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="px-6 py-2 bg-black/90 border-y-2 border-rose-600 text-center shadow-2xl">
              <div className="text-[9px] font-mono tracking-[0.35em] text-rose-500 uppercase">
                ENTERING ARCHITECTURAL JURISDICTION
              </div>
              <div className="font-display text-sm sm:text-base font-bold tracking-[0.28em] text-white uppercase mt-0.5">
                {sectorBanner}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. CUSTOM FLASHLIGHT & CROSSHAIR RETICLE CURSOR */}
      {!isTouch && (
        <>
          <div
            ref={cursorDotRef}
            className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 bg-amber-400 pointer-events-none z-[90]"
          />
          <div
            ref={cursorRingRef}
            className={`fixed top-0 left-0 pointer-events-none z-[89] -translate-x-1/2 -translate-y-1/2 border transition-all duration-200 flex items-center justify-center ${
              cursorHover
                ? "w-24 h-10 bg-rose-600/20 border-rose-500 backdrop-blur-xs"
                : "w-9 h-9 rounded-full border-amber-400/40 bg-transparent"
            }`}
          >
            {cursorHover && (
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-white uppercase px-1.5">
                {cursorHover}
              </span>
            )}
          </div>
        </>
      )}

      {/* 5. ARCHITECTURAL BRUTALIST MARGIN RAILS */}
      <div className="fixed inset-0 pointer-events-none z-30 hidden xl:block">
        <div className="absolute top-0 bottom-0 left-8 w-px bg-white/[0.06]" />
        <div className="absolute top-0 bottom-0 right-8 w-px bg-white/[0.06]" />
        <div className="absolute top-24 left-6 text-rose-500/50 font-mono text-xs">+</div>
        <div className="absolute top-24 right-6 text-rose-500/50 font-mono text-xs">+</div>
        <div className="absolute bottom-16 left-6 text-amber-400/50 font-mono text-xs">+</div>
        <div className="absolute bottom-16 right-6 text-amber-400/50 font-mono text-xs">+</div>
      </div>

      {/* 6. BOTTOM CONTAINMENT & FLASHLIGHT CONTROL DOCK */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[96%] max-w-6xl pointer-events-none">
        <div className="flex items-center justify-between gap-3">
          {/* Left Sector & Telemetry Readout */}
          <div className="pointer-events-auto hidden md:flex items-center gap-3 px-4 py-2.5 glass-panel brutal-frame text-[11px] font-mono text-zinc-300 shadow-2xl">
            <span className="flex items-center gap-1.5 text-rose-500 font-bold">
              <span className="w-2 h-2 bg-rose-600 animate-status-pulse" />
              {fps} HZ
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white font-bold tracking-wider">{activeSector}</span>
            <span className="text-white/20">|</span>
            <span className="text-amber-400 tabular-nums">
              DEPTH {String(scrollPct).padStart(3, "0")}%
            </span>
            <span className="text-white/20 hidden lg:inline">|</span>
            <span className="text-zinc-500 tabular-nums hidden lg:inline">
              LOC: {String(coords.x).padStart(4, "0")} // {String(coords.y).padStart(4, "0")}
            </span>
          </div>

          {/* Right Interactive Artifact & Flashlight Controls */}
          <div className="pointer-events-auto mx-auto md:mx-0 flex items-center gap-1.5 p-1.5 glass-panel brutal-frame shadow-2xl">
            {modes.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setShaderMode(m.id);
                  onTriggerPulse();
                  playTactileSound("pulse", soundEnabled);
                }}
                data-cursor="ARTIFACT"
                className={`px-2.5 py-1.5 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 transition-all ${
                  shaderMode === m.id
                    ? "bg-rose-600 text-white shadow-md shadow-rose-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {m.icon}
                <span className="hidden sm:inline">{m.label}</span>
              </button>
            ))}

            <div className="h-4 w-px bg-white/15 mx-0.5" />

            {/* Flashlight Focus Boost Toggle */}
            <button
              onClick={() => {
                setFlashlightBoost(!flashlightBoost);
                playTactileSound("click", soundEnabled);
              }}
              data-cursor="LIGHT BEAM"
              title="Toggle High-Beam Flashlight Focus"
              className={`px-2.5 py-1.5 border text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 transition-all ${
                flashlightBoost
                  ? "bg-amber-400 text-black border-amber-300 shadow-lg shadow-amber-500/25"
                  : "bg-white/5 border-white/10 text-amber-400 hover:bg-white/10"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">BEAM</span>
            </button>

            {/* Declassify All [REDACTED] Spans Toggle */}
            <button
              onClick={() => {
                setDeclassified(!declassified);
                onTriggerPulse();
                playTactileSound("click", soundEnabled);
              }}
              data-cursor="DECLASSIFY"
              title="Declassify or Redact All Classified Records"
              className={`px-2.5 py-1.5 border text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5 transition-all ${
                declassified
                  ? "bg-white text-black border-white"
                  : "bg-white/5 border-white/10 text-zinc-300 hover:text-white"
              }`}
            >
              {declassified ? (
                <Eye className="w-3.5 h-3.5" />
              ) : (
                <EyeOff className="w-3.5 h-3.5" />
              )}
              <span className="hidden lg:inline">
                {declassified ? "DECLASSIFIED" : "REDACTED"}
              </span>
            </button>

            {/* Audio Relay Synth Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playTactileSound("boot", true);
              }}
              data-cursor="AUDIO"
              title="Toggle Analog Relay & Resonance Audio"
              className={`p-1.5 border text-[10px] font-mono transition-all ${
                soundEnabled
                  ? "bg-rose-600/25 border-rose-500 text-rose-300"
                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white"
              }`}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-rose-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Mainframe Terminal (Cmd+K) */}
            <button
              onClick={() => {
                playTactileSound("click", soundEnabled);
                onOpenTerminal();
              }}
              data-cursor="TERMINAL"
              className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-white/5 hover:bg-white/15 border border-white/15 text-zinc-200 text-[10px] font-mono transition-all"
            >
              <Terminal className="w-3 h-3 text-amber-400" />
              <span>⌘K</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
