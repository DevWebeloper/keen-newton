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
import { QuantumCanvas3D, ShaderMode } from "@/components/QuantumCanvas3D";
import { CyberHUD } from "@/components/CyberHUD";
import { BackgroundMusic } from "@/components/BackgroundMusic";

export default function Home() {
  const [blurIntensity, setBlurIntensity] = useState<number>(16);
  const [accentColor, setAccentColor] = useState<string>("#e11d48");
  const [shaderMode, setShaderMode] = useState<ShaderMode>("aura");
  const [pulseTrigger, setPulseTrigger] = useState<number>(0);
  const [fps, setFps] = useState<number>(60);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [flashlightBoost, setFlashlightBoost] = useState<boolean>(false);
  const [declassified, setDeclassified] = useState<boolean>(false);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  // Sync optical blur & threshold wavelength to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--glass-blur", `${blurIntensity}px`);
  }, [blurIntensity]);

  useEffect(() => {
    document.documentElement.style.setProperty("--reality-accent", accentColor);
  }, [accentColor]);

  const handleTriggerPulse = () => {
    setPulseTrigger((prev) => prev + 1);
  };

  return (
    <div
      className={`min-h-screen bg-[#060608] text-zinc-100 bg-grid-pattern relative overflow-x-hidden ${
        declassified ? "declassified-mode" : ""
      }`}
    >
      {/* Real-Time Three.js WebGL2 Engine: Inverted Obsidian Pyramid & Brutalist Slabs */}
      <QuantumCanvas3D
        shaderMode={shaderMode}
        accentColor={accentColor}
        blurIntensity={blurIntensity}
        onFpsUpdate={setFps}
        pulseTrigger={pulseTrigger}
      />

      {/* Volumetric Flashlight Beam, Brutalist Sector Title Cards & Control Dock */}
      <CyberHUD
        fps={fps}
        shaderMode={shaderMode}
        setShaderMode={setShaderMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        flashlightBoost={flashlightBoost}
        setFlashlightBoost={setFlashlightBoost}
        declassified={declassified}
        setDeclassified={setDeclassified}
        onTriggerPulse={handleTriggerPulse}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Brutalist Directorate Command Navigation */}
      <Navbar
        blurIntensity={blurIntensity}
        setBlurIntensity={setBlurIntensity}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        declassified={declassified}
        setDeclassified={setDeclassified}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Sector Content Stream */}
      <main className="relative z-10 space-y-6">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          shaderMode={shaderMode}
          setShaderMode={setShaderMode}
          onTriggerPulse={handleTriggerPulse}
          declassified={declassified}
          setDeclassified={setDeclassified}
        />
        <ProjectsSection />
        <OriginStorySection />
        <AuraGlassInteractive
          blurIntensity={blurIntensity}
          setBlurIntensity={setBlurIntensity}
          accentColor={accentColor}
          setAccentColor={setAccentColor}
        />
        <SkillsMatrix />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Brutalist Marquee Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Background music (YouTube embed) */}
      <BackgroundMusic />

      {/* Mainframe Console Modal (⌘K) */}
      <InteractiveConsole
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
