"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Code2,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  X,
  Sparkles,
  Smartphone,
  Globe,
  Sliders,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { PROJECTS, Project } from "@/data/portfolioData";

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "web" | "desktop" | "systems">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Shipped Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Engineering Portfolio
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mt-3">
              From global non-profits and Swiss private wealth to custom voice AI platforms and low-level kernel ports.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border border-white/10">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === "web"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Live Production Web (8)
            </button>
            <button
              onClick={() => setFilter("desktop")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === "desktop"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Linux & Desktop (2)
            </button>
            <button
              onClick={() => setFilter("systems")}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === "systems"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Low-Level & XDA (2)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-3xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Top badges & links */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                    {project.badge || project.categoryLabel}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                        title="Open Live Site"
                        aria-label={`Open ${project.title} live site`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Role: <span className="text-slate-200">{project.role}</span>
                </p>

                <p className="text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Highlight if present */}
                {project.metrics && (
                  <div className="mt-3 p-2 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Bottom: Tech Stack & Case Study Modal Trigger */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] text-slate-400 font-mono">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                    >
                      <span>Visit Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Role: {selectedProject.role}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-cyan-400 font-mono mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* The Challenge */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                The Engineering Challenge
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed p-4 rounded-2xl bg-white/5 border border-white/10">
                {selectedProject.deepDive.challenge}
              </p>
            </div>

            {/* The Architecture */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Technical Architecture & Execution
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed p-4 rounded-2xl bg-white/5 border border-white/10">
                {selectedProject.deepDive.architecture}
              </p>
            </div>

            {/* Key Deliverables / Achievements */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Key Deliverables & Impact
              </h4>
              <ul className="space-y-2">
                {selectedProject.deepDive.keyAchievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Full */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Complete Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                )}
                {selectedProject.xdaUrl && (
                  <a
                    href={selectedProject.xdaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-xs font-mono border border-emerald-500/30 transition-all"
                  >
                    <span>XDA Thread</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-mono transition-colors"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
