"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  ChevronRight,
  X,
  LayoutGrid,
  List,
  Activity,
  CheckCircle2,
  FolderOpen,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PROJECTS, Project } from "@/data/portfolioData";

// Microfiche Evidence Viewport Header for each Case Card
const CaseEvidenceHeader: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const isSystems = project.category === "systems";
  const isDesktop = project.category === "desktop";

  const stampStyle = isSystems
    ? "text-amber-400 border-amber-500/40 bg-amber-500/10"
    : isDesktop
    ? "text-rose-400 border-rose-500/40 bg-rose-600/15"
    : "text-zinc-200 border-white/25 bg-white/5";

  return (
    <div className="relative h-36 w-full bg-[#07070a] border border-white/15 overflow-hidden p-4 flex flex-col justify-between mb-5 group-hover:border-rose-500/60 transition-all">
      {/* Subtle Crimson Pin & Thread Connection Node at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-rose-600 border border-white/40 z-20" />
      <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

      {/* Top Row: Case ID + Stamped Classification */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs font-bold tracking-widest text-rose-500 uppercase">
          CASE // #{String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 border ${stampStyle}`}
        >
          {project.badge || project.categoryLabel}
        </span>
      </div>

      {/* Middle Procedural Microfiche Telemetry */}
      <div className="relative z-10 my-auto flex items-center justify-between gap-2">
        {project.id === "gt-ai" ? (
          <div className="flex items-end gap-1 h-8">
            {[45, 90, 55, 100, 40, 85, 70, 50, 95, 60, 80, 50].map((h, i) => (
              <span
                key={i}
                className="w-1.5 bg-rose-600/80 group-hover:bg-amber-400 transition-all"
                style={{ height: `${h}%` }}
              />
            ))}
            <span className="ml-2 text-[10px] font-mono text-amber-400 uppercase tracking-wider">
              VOICE SYNTH // 24kHz
            </span>
          </div>
        ) : isSystems ? (
          <div className="font-mono text-[10px] text-amber-400/90 space-y-0.5">
            <div>OFFSET 0x004F2A10: MALI_BLUR_OVERRIDE</div>
            <div className="text-zinc-500">CLASS: ALTERED HARDWARE / KERNEL</div>
          </div>
        ) : isDesktop ? (
          <div className="font-mono text-[10px] text-rose-400/90 space-y-0.5">
            <div>BUS :: org.gnome.Shell.AuraGlass</div>
            <div className="text-zinc-500">GTK4 + LIBADWAITA // SOCKS5</div>
          </div>
        ) : (
          <div className="font-mono text-[10px] text-zinc-300 space-y-0.5">
            <div className="truncate max-w-[230px] text-amber-400">
              SITE: {project.liveUrl?.replace("https://", "") || "CLASSIFIED"}
            </div>
            <div className="text-zinc-500">ZERO-PLUGIN CUSTOM ARCHITECTURE</div>
          </div>
        )}

        <div className="h-9 w-9 bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:bg-rose-600 group-hover:border-rose-500 transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Microfiche Bar */}
      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-white/10 pt-2 uppercase tracking-wider">
        <span className="truncate">{project.role}</span>
        <span className="text-amber-400 font-bold flex-shrink-0">[DECLASSIFIED]</span>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "web" | "desktop" | "systems">("all");
  const [viewMode, setViewMode] = useState<"bento" | "index">("bento");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  // Flashlight spotlight tracking inside each Case Card
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 border-b border-white/15 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/15 border border-rose-500/40 text-rose-400 text-xs font-mono uppercase tracking-widest">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>[SEC-02 // INVESTIGATIVE CASE BOARD &amp; ARCHIVE]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.06em] text-white leading-[1.02]">
              THE CASE{" "}
              <span className="font-serif-editorial italic font-normal lowercase tracking-normal text-amber-400">
                board.
              </span>
            </h2>
            <p className="text-zinc-300 text-base max-w-2xl">
              Eleven declassified engineering case files linking global non-profit infrastructure, Swiss private banking, generative voice synthesis, Linux desktop compositors, and low-level kernel modifications.
            </p>
          </div>

          {/* Filter & View Mode Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1 p-1.5 glass-panel brutal-frame text-xs font-mono uppercase tracking-wider">
              <button
                onClick={() => setFilter("all")}
                data-cursor="FILTER"
                className={`px-3.5 py-2 transition-all ${
                  filter === "all"
                    ? "bg-rose-600 text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ALL [{PROJECTS.length}]
              </button>
              <button
                onClick={() => setFilter("web")}
                data-cursor="FILTER"
                className={`px-3.5 py-2 transition-all ${
                  filter === "web"
                    ? "bg-rose-600 text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                FIELD WEB [{PROJECTS.filter((p) => p.category === "web").length}]
              </button>
              <button
                onClick={() => setFilter("desktop")}
                data-cursor="FILTER"
                className={`px-3.5 py-2 transition-all ${
                  filter === "desktop"
                    ? "bg-rose-600 text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                LINUX OS [{PROJECTS.filter((p) => p.category === "desktop").length}]
              </button>
              <button
                onClick={() => setFilter("systems")}
                data-cursor="FILTER"
                className={`px-3.5 py-2 transition-all ${
                  filter === "systems"
                    ? "bg-rose-600 text-white font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                KERNEL / XDA [{PROJECTS.filter((p) => p.category === "systems").length}]
              </button>
            </div>

            <div className="flex items-center gap-1 p-1.5 glass-panel brutal-frame">
              <button
                onClick={() => setViewMode("bento")}
                title="Case Board Wall"
                className={`p-2 transition-all ${
                  viewMode === "bento"
                    ? "bg-amber-400 text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("index")}
                title="Bureau Archive Ledger"
                className={`p-2 transition-all ${
                  viewMode === "index"
                    ? "bg-amber-400 text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE A: THE INVESTIGATIVE CASE BOARD */}
        {viewMode === "bento" ? (
          <div className="relative">
            {/* Subtle Red Yarn / Vector Connection Line behind the Case Board */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-rose-600/20 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  key={project.id}
                  onMouseMove={handleCardMouseMove}
                  onClick={() => setSelectedProject(project)}
                  data-cursor="OPEN FILE"
                  className="group relative glass-panel-interactive brutal-frame p-6 flex flex-col justify-between cursor-pointer overflow-hidden"
                  style={{
                    backgroundImage:
                      "radial-gradient(480px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), rgba(245, 158, 11, 0.11), transparent 45%)",
                  }}
                >
                  <div>
                    <CaseEvidenceHeader project={project} index={idx} />

                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-300 mt-2.5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="mt-4 px-3 py-2 bg-black/60 border-l-2 border-rose-600 text-xs font-mono text-amber-300 flex items-center justify-between">
                        <span className="truncate">{project.metrics}</span>
                        <span className="text-[10px] text-rose-500 font-bold ml-2">
                          EVIDENCE
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack & Action */}
                  <div className="mt-6 pt-4 border-t border-white/15 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-white/[0.04] border border-white/10 text-[10px] text-zinc-300 font-mono uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-zinc-500 font-mono">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between gap-3 pt-1"
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 hover:text-amber-400 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>[EXAMINE CASE FILE]</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                            title="Source Archive"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-amber-400 inline-flex items-center gap-1"
                          >
                            <span>SITE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* VIEW MODE B: BRUTALIST BUREAU ARCHIVE LEDGER */
          <div className="divide-y divide-white/15 border-y border-white/15 bg-black/50">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor="EXAMINE"
                className="group py-6 px-5 hover:bg-rose-600/10 border-l-4 border-transparent hover:border-rose-600 transition-all cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-sm font-bold text-rose-500">
                    CASE #{String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      {project.role} // {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="hidden md:flex items-center gap-1.5">
                    {project.techStack.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/15 text-[10px] font-mono uppercase text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="px-3.5 py-1.5 bg-rose-600 text-white text-xs font-mono uppercase tracking-widest font-bold group-hover:bg-amber-400 group-hover:text-black transition-all">
                    DECLASSIFY ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DECLASSIFIED CASE FILE DOSSIER MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel brutal-frame w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-9 border-2 border-white/25 shadow-2xl space-y-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-rose-600 text-zinc-200 hover:text-white transition-colors"
                aria-label="Close Case File"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Stamped Header */}
              <div className="pr-12 border-b border-white/15 pb-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 bg-rose-600 text-white font-bold">
                    DECLASSIFIED // {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs text-amber-400 font-mono uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/15">
                    OFFICER: {selectedProject.role}
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-zinc-300 font-mono mt-1.5">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Execution Topology Schematic */}
              <div className="p-4 bg-black/75 border border-white/15 font-mono text-xs">
                <div className="text-[10px] text-rose-500 uppercase tracking-widest mb-3 flex items-center gap-2 font-bold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>SYSTEM TOPOLOGY &amp; CONTAINMENT PIPELINE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 bg-white/5 border border-white/10">
                    <div className="text-[10px] text-zinc-500">01 // VECTOR INPUT</div>
                    <div className="text-white font-bold mt-0.5 truncate">
                      {selectedProject.techStack[0] || "Client Layer"}
                    </div>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/10">
                    <div className="text-[10px] text-zinc-500">02 // CORE ENGINE</div>
                    <div className="text-amber-400 font-bold mt-0.5 truncate">
                      {selectedProject.techStack[1] || "Custom Core"}
                    </div>
                  </div>
                  <div className="p-2.5 bg-white/5 border border-white/10">
                    <div className="text-[10px] text-zinc-500">03 // FIELD STATUS</div>
                    <div className="text-rose-400 font-bold mt-0.5 truncate">
                      {selectedProject.metrics || "Operational"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenge & Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-black/50 border-l-2 border-rose-600 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">
                    01 // Incident Challenge
                  </h4>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {selectedProject.deepDive.challenge}
                  </p>
                </div>

                <div className="p-5 bg-black/50 border-l-2 border-amber-400 space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                    02 // Architectural Execution
                  </h4>
                  <p className="text-sm text-zinc-200 leading-relaxed">
                    {selectedProject.deepDive.architecture}
                  </p>
                </div>
              </div>

              {/* Verified Field Impact */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                  03 // Verified Field Outcomes
                </h4>
                <div className="space-y-2">
                  {selectedProject.deepDive.keyAchievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/[0.03] border border-white/10 text-sm text-zinc-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Tech Matrix */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                  Authorized Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono uppercase tracking-wider text-amber-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 text-white font-display font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      <span>Inspect Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider border border-white/20 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.xdaUrl && (
                    <a
                      href={selectedProject.xdaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-mono uppercase tracking-wider border border-amber-500/40 transition-all"
                    >
                      <span>XDA Archive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 bg-white/5 hover:bg-white/15 text-zinc-300 text-xs font-mono uppercase tracking-widest"
                >
                  Close File [ESC]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
