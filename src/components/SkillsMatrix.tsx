"use client";

import React from "react";
import { Code2, Cpu, Terminal, Shield, CheckCircle } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Full-Spectrum Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Architecture & Skills
          </h2>
          <p className="text-slate-300 text-base mt-3">
            From low-level Android driver registers and Linux GTK stylesheets to modern reactive web frameworks and AI voice APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.name}
                  </h3>
                  <div
                    className={`h-2.5 w-8 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                </div>

                <div className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between gap-3 text-xs"
                    >
                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 text-right">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                Pillar {idx + 1} of 3 // Production Proven
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
