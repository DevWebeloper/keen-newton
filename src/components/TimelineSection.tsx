"use client";

import React from "react";
import { Layers, Smartphone, Globe, Sparkles } from "lucide-react";
import { TIMELINE } from "@/data/portfolioData";

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>The 10-Year Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Kernel Tinkering to High-Impact Web
          </h2>
          <p className="text-slate-300 text-base mt-3">
            How a decade of continuous engineering formed a unique systems-to-pixels perspective.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-125 group-hover:border-emerald-400 transition-all">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Time pill */}
              <div className="text-xs font-mono text-cyan-400 mb-1">
                {item.period}
              </div>

              {/* Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-white/25 transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-emerald-300 mt-1">
                  {item.subtitle}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
