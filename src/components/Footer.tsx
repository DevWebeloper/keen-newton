"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/15 bg-[#040406] pt-12 pb-24 relative overflow-hidden">
      {/* Giant Brutalist Monolith Marquee */}
      <div className="border-b border-white/15 pb-10 mb-10 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.06em] uppercase">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-12 flex-shrink-0">
              <span className="text-white">GHAITH ALKAWADRI</span>
              <span className="text-outline-crimson">@DEVWEBELOPER</span>
              <span className="font-serif-editorial italic font-normal text-amber-400 lowercase tracking-normal">
                i can make it happen.
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-1">
            <div className="font-display font-bold uppercase tracking-wider text-white text-lg">
              {PERSONAL_INFO.name} — Directorate of Systems &amp; Web Architecture
            </div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              1,000,000+ ROM Units • 9 Enterprise Platforms • Creator of Aura Glass
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-300">
            <a href="#projects" className="hover:text-rose-500 transition-colors">
              01 // Case Board
            </a>
            <a href="#origin-story" className="hover:text-amber-400 transition-colors">
              02 // Altered Hardware
            </a>
            <a href="#aura-glass" className="hover:text-rose-500 transition-colors">
              03 // Research Lab
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              04 // Clearance Matrix
            </a>
            <Link
              href="/cv"
              className="text-amber-400 hover:text-white inline-flex items-center gap-1 font-bold"
            >
              <span>05 // Full Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono uppercase tracking-widest">
          <div>© 2026 {PERSONAL_INFO.name}. All containment protocols operational.</div>
          <div>Next.js 16 • Three.js Monolith Engine • GLSL Shaders</div>
        </div>
      </div>
    </footer>
  );
};
