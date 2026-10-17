"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Terminal,
  Cpu,
  FileText,
  Globe,
  Box,
  Triangle,
  Eye,
  Radio,
} from "lucide-react";
import { PERSONAL_INFO, CORE_STATS } from "@/data/portfolioData";
import { ShaderMode } from "./QuantumCanvas3D";

interface HeroProps {
  onOpenTerminal: () => void;
  shaderMode?: ShaderMode;
  setShaderMode?: (mode: ShaderMode) => void;
  onTriggerPulse?: () => void;
  declassified?: boolean;
  setDeclassified?: (val: boolean) => void;
}

const MARQUEE_ITEMS = [
  "CASE #01 // HUMAN RIGHTS FOUNDATION (HRF.ORG)",
  "CASE #02 // OSLO FREEDOM FORUM",
  "CASE #03 // JAR CAPITAL GENEVA",
  "CASE #04 // GT-AI ELEVENLABS VOICE",
  "ARTIFACT #05 // AURA GLASS GNOME 48–51",
  "ARTIFACT #06 // NOVAOS 1,000,000+ XDA UNITS",
  "PROTOCOL #07 // SYNCPLAY TUNNEL (SSH / SOCKS5)",
  "PROTOCOL #08 // ALIENFX-LINUX USB HID SDK",
  "CASE #09 // CRCDC PAYS DE LA LOIRE",
  "CASE #10 // CIDER MOBILIER PARIS",
];

export const Hero: React.FC<HeroProps> = ({
  onOpenTerminal,
  shaderMode = "aura",
  setShaderMode,
  onTriggerPulse,
  declassified = false,
  setDeclassified,
}) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Volumetric Crimson & Sodium-Vapor Ambient Haze */}
      <div className="absolute -top-28 left-1/4 w-[680px] h-[400px] bg-gradient-to-tr from-rose-600/15 via-amber-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Stamped Bureau Classification Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-white/15 font-mono text-xs"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/15 border border-rose-500/40 text-rose-400 uppercase tracking-widest">
              <span className="w-2 h-2 bg-rose-500 animate-status-pulse" />
              <span>CLEARANCE LEVEL 5 // {PERSONAL_INFO.availability}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-amber-400 uppercase tracking-widest">
              <Radio className="w-3.5 h-3.5" />
              <span>SIGNAL: 10Y KERNEL • 8Y ENTERPRISE WEB</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-zinc-400 tracking-widest uppercase">
            <span>DOC-ID: GA-884-SYS</span>
            <span className="text-rose-500">//</span>
            <span className="text-white">CONTAINMENT: ACTIVE</span>
          </div>
        </motion.div>

        {/* Asymmetric 12-Column Brutalist Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left 7 Columns: Brutalist Title Card + Typewriter Manuscript with [REDACTED] Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7 space-y-7 relative z-10"
          >
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-rose-500 font-bold">
              <span>[SEC-01 // EXECUTIVE DOSSIER]</span>
              <span className="w-10 h-px bg-rose-600" />
              <span className="text-zinc-300">{PERSONAL_INFO.name}</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold tracking-[0.04em] uppercase text-white leading-[0.96] resonance-hover">
              ARCHITECTING{" "}
              <span className="block mt-1">
                FROM THE{" "}
                <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-amber-400 pr-2">
                  metal up.
                </span>
              </span>
            </h1>

            {/* Stamped Directive Quote */}
            <div className="border-l-4 border-rose-600 pl-4 py-1 flex items-center justify-between">
              <p className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.12em] text-white">
                &ldquo;{PERSONAL_INFO.headline}&rdquo;
              </p>
              {setDeclassified && (
                <button
                  onClick={() => setDeclassified(!declassified)}
                  data-cursor="DECLASSIFY"
                  className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-white/5 hover:bg-amber-400 hover:text-black border border-white/15 text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3 h-3" />
                  <span>{declassified ? "Redact Record" : "Hover or Click to Declassify"}</span>
                </button>
              )}
            </div>

            {/* Typewriter Manuscript Excerpt with Interactive [REDACTED] Spans */}
            <div className="p-5 sm:p-6 bg-black/70 border border-white/15 brutal-frame space-y-3 font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-white/10 pb-2 uppercase tracking-widest">
                <span>MANUSCRIPT FRAGMENT // PAGE 01 OF 07</span>
                <span className="text-amber-400">HOVER BLACK BARS TO DECLASSIFY</span>
              </div>
              <p>
                Subject operates across both low-level operating system internals and high-traffic enterprise web infrastructure. Prior field logs confirm{" "}
                <span className="redacted-span">
                  reverse-engineering proprietary Mali GPU binaries
                </span>{" "}
                and distributing custom OS firmware to over{" "}
                <span className="redacted-span">1,000,000+ active devices</span> on XDA.
              </p>
              <p>
                In the production web sector, subject engineered zero-bloat architectures for{" "}
                <span className="redacted-span">
                  Human Rights Foundation &amp; Oslo Freedom Forum
                </span>
                , Swiss private wealth institution{" "}
                <span className="redacted-span">JAR Capital Geneva</span>, generative voice platform{" "}
                <span className="redacted-span">GT-AI (ElevenLabs)</span>, and the{" "}
                <span className="redacted-span">Aura Glass GNOME 50</span> desktop suite.
              </p>
            </div>

            {/* Primary Brutalist Action Controls */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                data-cursor="CASE BOARD"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-rose-600 text-white font-display font-bold text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black shadow-xl shadow-rose-600/20 transition-all"
              >
                <span>Enter The Case Board (11)</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/cv"
                data-cursor="DOSSIER"
                className="inline-flex items-center gap-2.5 px-5 py-4 glass-panel-interactive brutal-frame text-white font-display font-bold text-xs tracking-[0.16em] uppercase"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Personnel Dossier (CV)</span>
              </Link>

              <button
                onClick={onOpenTerminal}
                data-cursor="MAINFRAME"
                className="inline-flex items-center gap-2 px-5 py-4 bg-black/80 border border-white/20 hover:border-amber-400 text-amber-400 hover:text-white text-xs font-mono tracking-wider uppercase transition-all"
              >
                <Terminal className="w-4 h-4" />
                <span>[TERMINAL // ⌘K]</span>
              </button>
            </div>

            {/* Authorized Jurisdictions / Roles */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] font-mono">
              <span className="text-zinc-500 uppercase tracking-widest">
                JURISDICTION:
              </span>
              {PERSONAL_INFO.rolesTargeted.map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-zinc-300 uppercase tracking-wider"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right 5 Columns: Containment Chamber 01 — Interactive 3D Inverted Pyramid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="lg:col-span-5 relative z-10"
          >
            <div
              onClick={() => onTriggerPulse?.()}
              data-cursor="RESONATE"
              className="relative h-[390px] sm:h-[450px] border border-white/20 bg-gradient-to-b from-white/[0.02] to-black/65 backdrop-blur-[1px] p-6 flex flex-col justify-between cursor-pointer group overflow-hidden shadow-2xl brutal-frame"
            >
              {/* Top Containment Telemetry */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
                <div className="flex items-center gap-2 px-3 py-1 bg-black/80 border border-white/20 text-rose-400">
                  <Triangle className="w-3 h-3 rotate-180 fill-rose-600/40" />
                  <span>CHAMBER 01 // ASTRAL MONOLITH</span>
                </div>
                <span className="px-2.5 py-1 bg-amber-500/15 border border-amber-500/40 text-amber-300">
                  CLICK TO TRIGGER RESONANCE
                </span>
              </div>

              {/* Center Geometric Target Crosshair */}
              <div className="my-auto pointer-events-none flex flex-col items-center justify-center">
                <div className="w-48 h-48 border border-white/10 group-hover:border-rose-500/50 group-hover:scale-105 transition-all duration-700 flex items-center justify-center relative">
                  <div className="w-32 h-32 rounded-full border border-dashed border-amber-400/25" />
                  <span className="absolute -top-2 text-[9px] font-mono text-zinc-500 bg-black px-1">
                    APEX // INVERTED
                  </span>
                </div>
              </div>

              {/* Bottom 3D Artifact Selector */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="glass-panel p-3 border border-white/20 space-y-2"
              >
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-400 px-1 uppercase">
                  <span>SELECT CONTAINMENT ARTIFACT:</span>
                  <span className="text-rose-400 font-bold">{shaderMode} ACTIVE</span>
                </div>

                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    onClick={() => {
                      setShaderMode?.("aura");
                      onTriggerPulse?.();
                    }}
                    className={`py-2 px-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex flex-col items-center gap-1 border transition-all ${
                      shaderMode === "aura"
                        ? "bg-rose-600 border-rose-400 text-white"
                        : "bg-black/60 border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Triangle className="w-3.5 h-3.5 rotate-180" />
                    <span>Monolith</span>
                  </button>

                  <button
                    onClick={() => {
                      setShaderMode?.("silicon");
                      onTriggerPulse?.();
                    }}
                    className={`py-2 px-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex flex-col items-center gap-1 border transition-all ${
                      shaderMode === "silicon"
                        ? "bg-amber-500 border-amber-300 text-black"
                        : "bg-black/60 border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Catalyst</span>
                  </button>

                  <button
                    onClick={() => {
                      setShaderMode?.("globe");
                      onTriggerPulse?.();
                    }}
                    className={`py-2 px-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex flex-col items-center gap-1 border transition-all ${
                      shaderMode === "globe"
                        ? "bg-rose-600 border-rose-400 text-white"
                        : "bg-black/60 border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>World Map</span>
                  </button>

                  <button
                    onClick={() => {
                      setShaderMode?.("wireframe");
                      onTriggerPulse?.();
                    }}
                    className={`py-2 px-1.5 text-[10px] font-mono font-bold uppercase tracking-wider flex flex-col items-center gap-1 border transition-all ${
                      shaderMode === "wireframe"
                        ? "bg-white border-white text-black"
                        : "bg-black/60 border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Box className="w-3.5 h-3.5" />
                    <span>Astral Wire</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Pillar Verified Telemetry Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {CORE_STATS.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => onTriggerPulse?.()}
              data-cursor="EVIDENCE"
              className="glass-panel-interactive brutal-frame p-6 relative overflow-hidden group cursor-pointer"
            >
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">
                <span>RECORD // 0{idx + 1}</span>
                <span className="text-rose-500 font-bold">[VERIFIED]</span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wider uppercase group-hover:text-amber-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 mt-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Brutalist Classification Ticker */}
      <div className="mt-16 border-y border-white/15 bg-black/85 py-3.5 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-10 text-xs font-mono tracking-[0.25em] uppercase text-zinc-300">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 flex-shrink-0">
              <span className="hover:text-amber-400 transition-colors">{item}</span>
              <span className="text-rose-600 font-bold">■</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
