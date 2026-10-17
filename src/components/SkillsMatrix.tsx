"use client";

import React, { useState } from "react";
import { Cpu, Layers, Terminal, Globe } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const SkillsMatrix: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillarIcons = [
    <Globe key="web" className="w-5 h-5 text-rose-500" />,
    <Terminal key="linux" className="w-5 h-5 text-amber-400" />,
    <Cpu key="kernel" className="w-5 h-5 text-white" />,
  ];

  const clearanceLevels = [
    "CLEARANCE I // ENTERPRISE WEB & AI",
    "CLEARANCE II // LINUX OS & NETWORKING",
    "CLEARANCE III // SILICON, KERNEL & HAL",
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-white/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>[SEC-05 // STRUCTURAL CLEARANCE MATRIX]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] text-white leading-[1.02]">
              FROM KERNEL{" "}
              <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-rose-500">
                registers
              </span>{" "}
              TO REACTIVE UI.
            </h2>
            <p className="text-zinc-300 text-base max-w-2xl">
              Three authorized operational tiers—spanning high-concurrency enterprise web platforms, native Linux GTK4/D-Bus desktop suites, and hardware-level C/C++ drivers.
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 glass-panel brutal-frame px-4 py-2.5">
            AUTHORIZATION: <span className="text-amber-400 font-bold">RING 0 → RING 3</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const isHighlighted = activePillar === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                data-cursor={`TIER 0${idx + 1}`}
                className={`glass-panel-interactive brutal-frame p-6 sm:p-8 border transition-all flex flex-col justify-between ${
                  isHighlighted ? "border-rose-500" : "border-white/15"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-4">
                    <span className="text-rose-400 font-bold">{clearanceLevels[idx]}</span>
                    <span className="px-2 py-0.5 bg-white/5 text-white">
                      0{idx + 1} / 03
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/15">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-black/70 border border-white/15">
                        {pillarIcons[idx]}
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/skill p-3 bg-black/50 hover:bg-rose-600/15 border border-white/10 hover:border-rose-500/50 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="font-display font-bold uppercase tracking-wide text-white group-hover/skill:text-amber-400 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 px-2 py-0.5 border border-amber-500/30">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  <span>STATUS: FIELD VERIFIED</span>
                  <span className="text-rose-500 font-bold">[ACTIVE]</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
