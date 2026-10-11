"use client";

import React from "react";
import { Terminal, ExternalLink, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Terminal className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                &ldquo;{PERSONAL_INFO.headline}&rdquo;
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#origin-story" className="hover:text-cyan-400 transition-colors">
              XDA Chapter
            </a>
            <a href="#aura-glass" className="hover:text-cyan-400 transition-colors">
              Aura Glass
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">
              Timeline
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.xda}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              XDA
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. All systems operational.
          </div>
          <div>
            Crafted with Next.js App Router, Tailwind CSS &amp; Aura Glass Shaders.
          </div>
        </div>
      </div>
    </footer>
  );
};
