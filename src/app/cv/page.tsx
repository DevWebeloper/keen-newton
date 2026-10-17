"use client";

import React from "react";
import Link from "next/link";
import { Printer, ArrowLeft, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const CV_MARKDOWN = `# Ghaith Alkawadri
**Senior Full-Stack Web Developer**  
gheith.sy@gmail.com | +20 113 112 4952 | https://github.com/DevWebeloper | Remote

## Summary
Full-stack web developer with 8+ years of experience building and maintaining production websites, custom WordPress architectures, PHP backends, and JavaScript/TypeScript frontends (React, Next.js, Angular). Strong systems background in Linux desktop tooling (Python, GTK4, C/C++, Bash) and Android ROM/kernel development (1M+ downloads on XDA). Experienced delivering fast, maintainable platforms for international non-profits, Swiss financial firms, French healthcare organizations, and AI startups without relying on bloated off-the-shelf plugins.

## Technical Skills
- **Languages:** PHP, JavaScript (ES6+), TypeScript, Python, SQL, Bash, HTML5, CSS3 / SCSS, C / C++
- **Frontend:** React, Next.js, Angular, Tailwind CSS, Vanilla JS, GTK4 / libadwaita, Core Web Vitals & Accessibility
- **Backend & CMS:** WordPress (Bespoke Theme Development, Custom Plugins/Shortcodes, JetEngine, ACF, REST API), Custom PHP CMS/MVC, REST APIs, ElevenLabs Voice API
- **Systems & Infrastructure:** Linux (Arch, Fedora, Ubuntu), Git, SSH / SOCKS5 / HTTP Proxy Networking, Nginx / Apache, Multi-Tier Caching & CDN Tuning, CMake / Ninja, Android AOSP / HAL / Device Trees

## Work Experience

### Senior Web Developer — XonBoard
*2019 – Present | Remote*
- **Human Rights Foundation (hrf.org) & Oslo Freedom Forum (oslofreedomforum.com):** Built and maintained the primary web platforms for HRF and its annual global conference using custom WordPress PHP templates and vanilla JavaScript. Replaced heavy third-party plugins with lean custom post types, speaker directories, interactive summit schedules, live stream embeds, and server-side caching to handle large traffic spikes during international events.
- **GT-AI (gt-ai.io):** Engineered a custom PHP CMS and REST backend paired with an Angular frontend for an AI sales automation platform. Integrated ElevenLabs voice synthesis APIs with custom audio streaming configurations for interactive AI voice demos.
- **JAR Capital (jarcapital.swiss/geneva):** Developed a 100% custom WordPress PHP theme from scratch for a Geneva-based private wealth management firm, focusing on fast load times, clean markup, and a simplified editorial back-office for financial partners.
- **OmniClouds (omniclouds.com), IPH Studios (iphstudios.com) & Tania Production (taniaproduction.com):** Built and optimized production WordPress sites for an enterprise cloud/SD-WAN provider and two creative/film production studios, implementing lazy-loaded HD video showreels, responsive layouts, and technical SEO within tight delivery timelines.

### Full-Stack Web Developer — Freelance & Independent Contract
*2018 – Present | Remote*
- **CRCDC Pays de la Loire (depistagecancers.fr):** Developed custom PHP shortcodes, JetEngine dynamic content structures, and interactive screening guides for the regional public health cancer screening authority in Pays de la Loire, France, including appointment booking integrations, structured JSON-LD schema, and French GDPR compliance.
- **Cider Mobilier de Bureau (cider.fr):** Built custom WordPress PHP templates, responsive CSS/Sass layouts, and catalog filtering for a Parisian corporate furniture and interior architecture brand, optimizing high-resolution media delivery across desktop and mobile.
- **Technical Consulting & Maintenance:** Handled custom theme development, database query optimization, Core Web Vitals improvements, and security hardening for international clients across Europe and MENA.

## Open-Source & Systems Engineering
- **Syncplay Tunnel (github.com/DevWebeloper/syncplay-tunnel)** — *Python, GTK4, SSH, SOCKS5, mpv*: Built a fail-closed GTK4 desktop application that routes Syncplay and mpv traffic through a remote SSH host over Tailscale and verifies the exit IP before playback starts. Wrote a local HTTP CONNECT-to-SOCKS5 proxy bridge to fix an mpv/FFmpeg limitation where socks5:// proxy flags are ignored by FFmpeg's HTTP layer, preventing silent direct-IP traffic leaks across native and Distrobox installations.
- **Aura Glass Desktop Suite (github.com/DevWebeloper/aura-glass)** — *GTK4, libadwaita, GNOME Shell JS/CSS, D-Bus, Bash*: Created a frosted-glass desktop environment suite for GNOME Shell 48–51 (GTK3/GTK4/libadwaita). Built a first-party GNOME Shell extension (Aura Glass Helper) with per-window blur controls and a D-Bus bridge connected to a native GTK4/libadwaita settings application, alongside custom Blur My Shell patches and a rootless user-space installer for Arch, Fedora, Ubuntu, and CachyOS.
- **AlienFX-Linux (github.com/DevWebeloper/alienfx-linux)** — *C/C++, CMake, Ninja, Linux USB HID / ACPI*: Ported the AlienFX and AlienFan SDKs and CLI (alienfx-cli) to Linux, implementing direct USB HID report packet control (API v1–v8) and ACPI sensor access for Dell G-Series and Alienware per-key RGB lighting and fan profiles without Windows software.
- **NovaOS Android ROMs — XDA Recognized Developer** — *Android AOSP/HAL, C, Kernel*: Ported full Samsung Note Fan Edition (Android 7.0) firmware to the Galaxy J7 Prime (G610X) and maintained Xiaomi Mi MIX 3 (perseus) device trees. Patched proprietary Mali GPU libraries to enable hardware-accelerated UI blur on budget chipsets, resolved camera and Exynos audio HAL bugs, and supported 1,000,000+ cumulative downloads and a 15,000-member Telegram community across 12 device variants.

## Languages
- **Arabic:** Native
- **English:** Full Professional Proficiency
`;

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([CV_MARKDOWN], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ghaith_Alkawadri_CV.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-neutral-200 text-neutral-900 print:bg-white print:text-black">
      {/* Top Toolbar - Hidden when printing */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950 text-neutral-100 print:hidden">
        <div className="mx-auto max-w-[210mm] px-4 py-3 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-medium text-neutral-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white hover:bg-neutral-100 text-neutral-950 font-semibold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save as PDF / Print</span>
            </button>
          </div>
        </div>
      </header>

      {/* A4 Sheet */}
      <main className="mx-auto max-w-[210mm] my-6 sm:my-8 bg-white shadow-xl border border-neutral-300 px-6 py-8 sm:px-12 sm:py-10 print:m-0 print:max-w-none print:shadow-none print:border-0 print:p-0">
        {/* HEADER */}
        <header className="border-b-2 border-neutral-900 pb-3">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-neutral-700 mt-0.5">
                Senior Full-Stack Web Developer
              </p>
            </div>

            <div className="text-xs text-neutral-700 sm:text-right space-y-0.5 leading-snug">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:underline font-medium text-neutral-900"
                >
                  {PERSONAL_INFO.email}
                </a>
                {" • "}
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="hover:underline font-medium text-neutral-900"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/DevWebeloper
                </a>
                {" • "}
                <span>Remote</span>
              </div>
            </div>
          </div>
        </header>

        {/* SUMMARY */}
        <section className="mt-3.5">
          <p className="text-[12.5px] leading-[1.55] text-neutral-800">
            Full-stack web developer with <strong>8+ years of experience</strong>{" "}
            building and maintaining production websites, custom WordPress
            architectures, PHP backends, and JavaScript/TypeScript frontends
            (React, Next.js, Angular). Strong systems background in Linux
            desktop tooling (Python, GTK4, C/C++, Bash) and Android ROM/kernel
            development (1M+ downloads on XDA). Experienced delivering fast,
            maintainable platforms for international non-profits, Swiss
            financial firms, French healthcare organizations, and AI startups
            without relying on bloated off-the-shelf plugins.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="text-[12px] leading-[1.55] text-neutral-800 space-y-1">
            <div>
              <strong className="font-semibold text-neutral-950">
                Languages:
              </strong>{" "}
              PHP, JavaScript (ES6+), TypeScript, Python, SQL, Bash, HTML5, CSS3
              / SCSS, C / C++
            </div>
            <div>
              <strong className="font-semibold text-neutral-950">
                Frontend & UI:
              </strong>{" "}
              React, Next.js, Angular, Tailwind CSS, Vanilla JS, GTK4 /
              libadwaita, Core Web Vitals & Accessibility
            </div>
            <div>
              <strong className="font-semibold text-neutral-950">
                Backend & CMS:
              </strong>{" "}
              WordPress (Bespoke Theme Development, Custom Plugins & Shortcodes,
              JetEngine, ACF, REST API), Custom PHP CMS/MVC, REST APIs,
              ElevenLabs Voice API
            </div>
            <div>
              <strong className="font-semibold text-neutral-950">
                Systems & Infrastructure:
              </strong>{" "}
              Linux (Arch, Fedora, Ubuntu), Git, SSH / SOCKS5 / HTTP Proxy
              Networking, Nginx / Apache, Multi-Tier Caching & CDN Tuning, CMake
              / Ninja, Android AOSP / HAL / Device Trees
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mt-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2.5">
            Work Experience
          </h2>

          <div className="space-y-4">
            {/* Role 1: XonBoard */}
            <div className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13.5px] font-bold text-neutral-950">
                  Senior Web Developer{" "}
                  <span className="font-normal text-neutral-700">
                    — XonBoard
                  </span>
                </h3>
                <span className="text-xs font-medium text-neutral-600">
                  2019 – Present | Remote
                </span>
              </div>

              <ul className="mt-1.5 list-disc list-outside ml-4 space-y-1.5 text-[12px] leading-[1.52] text-neutral-800">
                <li>
                  <strong className="font-semibold text-neutral-950">
                    Human Rights Foundation (
                    <a
                      href="https://hrf.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      hrf.org
                    </a>
                    ) & Oslo Freedom Forum (
                    <a
                      href="https://oslofreedomforum.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      oslofreedomforum.com
                    </a>
                    ):
                  </strong>{" "}
                  Built and maintained the primary web platforms for HRF and its
                  annual global summit using custom WordPress PHP templates and
                  vanilla JavaScript. Replaced heavy third-party plugins with
                  lean custom post types, speaker directories, interactive event
                  schedules, live stream embeds, and server-side caching to
                  handle large traffic spikes during international broadcasts.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-950">
                    GT-AI (
                    <a
                      href="https://gt-ai.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      gt-ai.io
                    </a>
                    ):
                  </strong>{" "}
                  Engineered a custom PHP CMS and REST backend paired with an{" "}
                  <strong>Angular</strong> frontend for an AI sales automation
                  platform. Integrated <strong>ElevenLabs</strong> voice
                  synthesis APIs with custom audio streaming configurations for
                  interactive AI voice workflows.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-950">
                    JAR Capital (
                    <a
                      href="https://jarcapital.swiss/geneva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      jarcapital.swiss/geneva
                    </a>
                    ):
                  </strong>{" "}
                  Developed a 100% custom WordPress PHP theme from scratch for a
                  Geneva-based private wealth management firm, focusing on fast
                  load times, clean markup, and a simplified editorial
                  back-office for financial partners.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-950">
                    OmniClouds (
                    <a
                      href="https://www.omniclouds.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      omniclouds.com
                    </a>
                    ), IPH Studios (
                    <a
                      href="https://iphstudios.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      iphstudios.com
                    </a>
                    ) & Tania Production (
                    <a
                      href="https://taniaproduction.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      taniaproduction.com
                    </a>
                    ):
                  </strong>{" "}
                  Built and optimized production WordPress sites for an
                  enterprise cloud/SD-WAN provider and two creative/film
                  production studios, implementing lazy-loaded HD video
                  showreels, responsive layouts, and technical SEO within tight
                  delivery timelines.
                </li>
              </ul>
            </div>

            {/* Role 2: Freelance */}
            <div className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13.5px] font-bold text-neutral-950">
                  Full-Stack Web Developer{" "}
                  <span className="font-normal text-neutral-700">
                    — Freelance & Independent Contract
                  </span>
                </h3>
                <span className="text-xs font-medium text-neutral-600">
                  2018 – Present | Remote
                </span>
              </div>

              <ul className="mt-1.5 list-disc list-outside ml-4 space-y-1.5 text-[12px] leading-[1.52] text-neutral-800">
                <li>
                  <strong className="font-semibold text-neutral-950">
                    CRCDC Pays de la Loire (
                    <a
                      href="https://depistagecancers.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      depistagecancers.fr
                    </a>
                    ):
                  </strong>{" "}
                  Developed custom PHP shortcodes, <strong>JetEngine</strong>{" "}
                  dynamic content structures, and interactive screening guides
                  for the regional public health cancer screening authority in
                  Pays de la Loire, France, including appointment booking
                  integrations, structured JSON-LD schema, and French GDPR
                  compliance.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-950">
                    Cider Mobilier de Bureau (
                    <a
                      href="https://www.cider.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-neutral-400 hover:text-black"
                    >
                      cider.fr
                    </a>
                    ):
                  </strong>{" "}
                  Built custom WordPress PHP templates, responsive CSS/Sass
                  layouts, and catalog filtering for a Parisian corporate
                  furniture and interior architecture brand, optimizing
                  high-resolution media delivery across desktop and mobile.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-950">
                    Technical Consulting & Performance Optimization:
                  </strong>{" "}
                  Handled custom theme development, database query cleanup, Core
                  Web Vitals optimization, and security hardening for
                  international clients across Europe and MENA.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* OPEN SOURCE & SYSTEMS ENGINEERING */}
        <section className="mt-4 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2.5">
            Open-Source & Systems Engineering
          </h2>

          <ul className="list-disc list-outside ml-4 space-y-1.5 text-[12px] leading-[1.52] text-neutral-800">
            <li>
              <strong className="font-semibold text-neutral-950">
                Syncplay Tunnel (
                <a
                  href="https://github.com/DevWebeloper/syncplay-tunnel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-400 hover:text-black"
                >
                  github.com/DevWebeloper/syncplay-tunnel
                </a>
                )
              </strong>{" "}
              <span className="text-neutral-600 italic">
                — Python, GTK4, SSH, SOCKS5, mpv:
              </span>{" "}
              Built a fail-closed GTK4 desktop app that routes{" "}
              <code>Syncplay</code> and <code>mpv</code> traffic through a
              remote SSH host over Tailscale and verifies exit IP before
              playback begins. Wrote a local HTTP CONNECT-to-SOCKS5 proxy bridge
              to fix an <code>mpv</code>/FFmpeg limitation where{" "}
              <code>socks5://</code> flags are ignored by FFmpeg&apos;s HTTP
              layer, preventing silent direct-IP leaks across native and
              Distrobox setups.
            </li>

            <li>
              <strong className="font-semibold text-neutral-950">
                Aura Glass Desktop Suite (
                <a
                  href="https://github.com/DevWebeloper/aura-glass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-400 hover:text-black"
                >
                  github.com/DevWebeloper/aura-glass
                </a>
                )
              </strong>{" "}
              <span className="text-neutral-600 italic">
                — GTK4, libadwaita, GNOME Shell JS/CSS, D-Bus, Bash:
              </span>{" "}
              Created a frosted-glass desktop environment suite for GNOME Shell
              48–51 (<code>GTK3</code>/<code>GTK4</code>/<code>libadwaita</code>
              ). Built a first-party GNOME Shell extension (
              <em>Aura Glass Helper</em>) with per-window blur controls and a
              D-Bus bridge connected to a native GTK4/libadwaita settings app,
              custom <em>Blur My Shell</em> patches, and a rootless user-space
              installer for Arch, Fedora, Ubuntu, and CachyOS.
            </li>

            <li>
              <strong className="font-semibold text-neutral-950">
                AlienFX-Linux (
                <a
                  href="https://github.com/DevWebeloper/alienfx-linux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-400 hover:text-black"
                >
                  github.com/DevWebeloper/alienfx-linux
                </a>
                )
              </strong>{" "}
              <span className="text-neutral-600 italic">
                — C/C++, CMake, Ninja, Linux USB HID / ACPI:
              </span>{" "}
              Ported the AlienFX and AlienFan SDKs and CLI (
              <code>alienfx-cli</code>) to Linux, implementing direct USB HID
              report packet control (API v1–v8) and ACPI sensor access for Dell
              G-Series and Alienware per-key RGB lighting and fan profiles
              without Windows software.
            </li>

            <li>
              <strong className="font-semibold text-neutral-950">
                NovaOS Android ROMs — XDA Recognized Developer (
                <a
                  href={PERSONAL_INFO.xda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-400 hover:text-black"
                >
                  XDA Release Thread
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/DevWebeloper/device_xiaomi_perseus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-400 hover:text-black"
                >
                  device_xiaomi_perseus
                </a>
                )
              </strong>{" "}
              <span className="text-neutral-600 italic">
                — Android AOSP/HAL, C, Kernel:
              </span>{" "}
              Ported full Samsung Note Fan Edition (Android 7.0) firmware to the
              Galaxy J7 Prime (<code>G610X</code>) and maintained Xiaomi Mi MIX
              3 (<code>perseus</code>) device trees. Patched proprietary Mali
              GPU libraries to enable hardware-accelerated UI blur on budget
              chipsets, resolved camera and Exynos audio HAL bugs, and supported{" "}
              <strong>1,000,000+ cumulative downloads</strong> and a{" "}
              <strong>15,000-member Telegram community</strong> across 12 device
              variants.
            </li>
          </ul>
        </section>

        {/* LANGUAGES */}
        <section className="mt-4 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-1.5">
            Languages
          </h2>
          <p className="text-[12px] text-neutral-800">
            <strong className="font-semibold text-neutral-950">Arabic:</strong>{" "}
            Native {" • "}
            <strong className="font-semibold text-neutral-950">English:</strong>{" "}
            Full Professional Proficiency
          </p>
        </section>
      </main>
    </div>
  );
}
