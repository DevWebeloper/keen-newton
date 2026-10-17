"use client";

import React from "react";
import { Layers } from "lucide-react";
import { TIMELINE } from "@/data/portfolioData";

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-white/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/15 border border-rose-500/40 text-rose-400 text-xs font-mono uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>[SEC-06 // CHRONOLOGICAL FIELD LOGS]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] text-white leading-[1.02]">
              A DECADE OF{" "}
              <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-amber-400">
                relentless
              </span>{" "}
              OPERATIONS.
            </h2>
          </div>
          <p className="text-zinc-300 text-sm sm:text-base max-w-md font-mono">
            2016 – 2026 // Ten years of continuous progression from mobile GPU binary reverse-engineering to enterprise web &amp; Linux desktop architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {TIMELINE.map((item, idx) => (
            <div
              key={idx}
              data-cursor={`LOG 0${idx + 1}`}
              className="glass-panel-interactive brutal-frame p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                  <span className="px-3 py-1 bg-rose-600 text-white text-xs font-mono font-bold uppercase tracking-widest">
                    {item.period}
                  </span>
                  <span className="font-display text-3xl font-bold text-white/15 group-hover:text-amber-400/50 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-rose-400 mt-1.5 font-bold">
                  {item.subtitle}
                </p>
                <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-black/60 border border-white/15 text-[10px] font-mono uppercase tracking-wider text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
