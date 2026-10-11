"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { OriginStorySection } from "@/components/OriginStorySection";
import { AuraGlassInteractive } from "@/components/AuraGlassInteractive";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { InteractiveConsole } from "@/components/InteractiveConsole";

export default function Home() {
  const [blurIntensity, setBlurIntensity] = useState<number>(16);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  // Sync blurIntensity to CSS variable for dynamic frosted glass feel
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--glass-blur",
      `${blurIntensity}px`
    );
  }, [blurIntensity]);

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 bg-grid-pattern selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Dynamic ambient background light matching Aura Glass */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[170px]" />
      </div>

      {/* Main Navigation */}
      <Navbar
        blurIntensity={blurIntensity}
        setBlurIntensity={setBlurIntensity}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Content Stream */}
      <main className="space-y-12">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <ProjectsSection />
        <OriginStorySection />
        <AuraGlassInteractive
          blurIntensity={blurIntensity}
          setBlurIntensity={setBlurIntensity}
        />
        <SkillsMatrix />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Hacker Console Modal / Drawer */}
      <InteractiveConsole
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
