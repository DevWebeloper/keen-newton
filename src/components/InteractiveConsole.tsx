"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, X, CornerDownLeft, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface InteractiveConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveConsole: React.FC<InteractiveConsoleProps> = ({
  isOpen,
  onClose,
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "init --profile",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Ghaith Alkawadri (DevWebeloper) Systems Console v2.4
          </p>
          <p className="text-slate-400">
            Full-Stack Web & Systems Engineer. 10Y Low-Level DNA • 8Y Production Web.
          </p>
          <p className="text-emerald-400">
            Type <span className="underline font-bold">help</span> to view available system commands.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-300 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300 font-mono">
              <div><span className="text-emerald-400">whoami</span> - Identity & philosophy</div>
              <div><span className="text-emerald-400">stats</span> - ROM downloads & community scale</div>
              <div><span className="text-emerald-400">novaos</span> - XDA NoteFE port & GPU details</div>
              <div><span className="text-emerald-400">aura-glass</span> - GNOME theme install script</div>
              <div><span className="text-emerald-400">projects</span> - Live client websites list</div>
              <div><span className="text-emerald-400">skills</span> - Full engineering matrix</div>
              <div><span className="text-emerald-400">contact</span> - Email & hire information</div>
              <div><span className="text-emerald-400">clear</span> - Clear console screen</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-cyan-400">Name:</span> Ghaith Alkawadri</p>
            <p><span className="text-cyan-400">Handle:</span> DevWebeloper</p>
            <p><span className="text-cyan-400">Headline:</span> &ldquo;I can make it happen&rdquo;</p>
            <p><span className="text-cyan-400">Availability:</span> Remote Worldwide (Full-time & High-Impact Contracts)</p>
            <p className="text-slate-400 italic mt-1">
              &ldquo;I started 10 years ago reverse-engineering GPU drivers for Android ROMs on XDA, and brought that same zero-lag obsession to high-traffic enterprise web platforms.&rdquo;
            </p>
          </div>
        );
        break;

      case "stats":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-emerald-400 font-bold">Systems & Production Metrics:</p>
            <p>• 1,000,000+ Custom ROM downloads across 12 devices</p>
            <p>• 15,000+ Active Telegram community developers</p>
            <p>• 8+ Years Production Web Engineering</p>
            <p>• 8 Live Enterprise & Client Deployments (HRF, Oslo, JAR Capital, GT-AI, Cider)</p>
          </div>
        );
        break;

      case "novaos":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-bold">[ROM][7.0] NovaOS J7Prime G610X NoteFE Port:</p>
            <p>• Reverse-engineered Mali GPU libraries to unlock real-time blur shaders on budget SoC.</p>
            <p>• Fixed camera HAL, Exynos audio routing, and memory throttling.</p>
            <p>• Abstracted porting workflow to successfully flash devices without hardware in hand.</p>
            <p className="text-cyan-300">Thread: xdaforums.com/t/rom-7-0-novaos-j7prime-g610x-notefe-full-port-stable-bugless.3682256</p>
          </div>
        );
        break;

      case "aura-glass":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Aura Glass (GTK4 + libadwaita):</p>
            <p>Run the one-script installer in terminal:</p>
            <p className="text-emerald-300 font-mono bg-black/50 p-2 rounded">
              curl -sSL https://raw.githubusercontent.com/DevWebeloper/aura-glass/main/install.sh | bash
            </p>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Shipped Platforms:</p>
            <p>• Human Rights Foundation (hrf.org) - Global NGO, high traffic</p>
            <p>• Oslo Freedom Forum (oslofreedomforum.com) - World human rights summit</p>
            <p>• JAR Capital Geneva (jarcapital.swiss/geneva/) - Swiss wealth management</p>
            <p>• GT-AI (gt-ai.io) - Custom PHP/Angular CMS + ElevenLabs AI</p>
            <p>• Cider (cider.fr) - French workspace designer catalog</p>
            <p>• OmniClouds (omniclouds.com) - SASE & Cloud Telco</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-purple-400 font-bold">Full Stack & Systems Spectrum:</p>
            <p>• Frontend: React, Next.js, Angular, TypeScript, Tailwind CSS, Frosted Glass CSS</p>
            <p>• Backend: Custom PHP Architecture, WordPress Core/Headless, REST, Python</p>
            <p>• Systems: GTK4/libadwaita, Linux Kernel sysfs, Android HAL, GPU Libs, Reverse Engineering</p>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">Get In Touch:</p>
            <p>Email: {PERSONAL_INFO.email}</p>
            <p>GitHub: {PERSONAL_INFO.github}</p>
            <p>Status: Ready for remote roles</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-red-400 text-xs">
            command not found: {cleanCmd}. Type <span className="underline">help</span> for commands list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-3xl h-[560px] rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-slate-900/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              ghaith@devwebeloper-box: ~
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content Screen */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4 bg-black/60">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-cyan-300 font-bold">~</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input prompt */}
        <form
          onSubmit={handleCommand}
          className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2 font-mono text-xs"
        >
          <span className="text-emerald-400 font-bold pl-2">➜</span>
          <span className="text-cyan-300 font-bold">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'whoami', 'novaos', 'projects'..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-slate-600 text-xs"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
