export interface Project {
  id: string;
  title: string;
  category: "web" | "desktop" | "systems";
  categoryLabel: string;
  role: string;
  description: string;
  deepDive: {
    challenge: string;
    architecture: string;
    keyAchievements: string[];
  };
  metrics?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  xdaUrl?: string;
  featured?: boolean;
  tagline: string;
  badge?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface CareerMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Ghaith Alkawadri",
  handle: "DevWebeloper",
  headline: "I can make it happen.",
  subheadline:
    "Senior Web & Systems Engineer. Blending low-level OS internals, 1M+ Android ROM downloads, and high-traffic enterprise architectures.",
  bio: "With over 8 years in modern web development and 10 years of low-level systems tinkering (Android kernels, GPU reverse engineering, GNOME desktop theming), I bridge the gap between metal-level performance and pixel-perfect design.",
  availability: "Available for Remote Roles Worldwide",
  github: "https://github.com/DevWebeloper",
  xda: "https://xdaforums.com/t/rom-7-0-novaos-j7prime-g610x-notefe-full-port-stable-bugless.3682256/",
  email: "gheith.sy@gmail.com",
  phone: "+20 1131124952",
  location: "Remote (Global)",
  rolesTargeted: [
    "Senior Full-Stack Engineer",
    "Senior Frontend / UI Engineer",
    "Creative Technologist",
    "Systems & Web Solutions Architect",
  ],
};

export const CORE_STATS: StatItem[] = [
  {
    value: "1,000,000+",
    label: "Total ROM Downloads",
    sublabel: "Across 12 Android devices & NovaOS releases",
    iconName: "Download",
  },
  {
    value: "15,000+",
    label: "Developer Community",
    sublabel: "Active members in community channels & support",
    iconName: "Users",
  },
  {
    value: "8+ Years",
    label: "Production Engineering",
    sublabel: "High-traffic web apps, enterprise & fintech",
    iconName: "Code2",
  },
  {
    value: "9 Live",
    label: "Client Deployments",
    sublabel: "From Swiss banking & French healthcare to global NGOs & AI",
    iconName: "Globe",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "hrf",
    title: "Human Rights Foundation (HRF)",
    category: "web",
    categoryLabel: "High-Traffic Non-Profit",
    role: "Lead Web Developer",
    tagline: "Global non-profit platform standing with activists against authoritarian regimes.",
    description:
      "Engineered the primary online presence for the Human Rights Foundation using a robust WordPress architecture with heavily customized PHP and vanilla JavaScript.",
    deepDive: {
      challenge:
        "HRF faces intense traffic surges during global geopolitical events, human rights reports, and international press coverage, requiring strict security, anti-censorship resilience, and instantaneous page delivery.",
      architecture:
        "Constructed custom PHP templates and modular components without bloated plugins. Implemented multi-tier caching, optimized database queries for large advocacy archives, and crafted responsive, lightweight frontend scripts.",
      keyAchievements: [
        "Handled massive global traffic spikes during major international human rights announcements.",
        "Zero plugin bloat: Built lean, maintainable custom PHP and JavaScript functionality.",
        "Delivered accessible, multi-lingual structure for human rights activists and international journalists.",
      ],
    },
    metrics: "High-Traffic Global NGO",
    techStack: ["WordPress", "Custom PHP", "JavaScript (ES6+)", "Tailwind/CSS", "Cache Tuning", "Security Hardening"],
    liveUrl: "https://hrf.org/",
    featured: true,
    badge: "Enterprise NGO",
  },
  {
    id: "oslo",
    title: "Oslo Freedom Forum",
    category: "web",
    categoryLabel: "Flagship Global Summit",
    role: "Lead Web Developer",
    tagline: "The world's premier human rights conference connecting leaders, activists, and technologists.",
    description:
      "Developed and maintained the official platform for the Oslo Freedom Forum, featuring speaker databases, live stream integrations, and interactive summit agendas.",
    deepDive: {
      challenge:
        "Needed a flexible, dynamic event platform that could handle live international broadcasts, fast updates during live stages, and heavy media assets without buffering or UI stutter.",
      architecture:
        "Crafted a custom WordPress theme engineered specifically for summit workflows, integrating high-throughput video embeds, speaker galleries, and schedule filtering powered by fast PHP backend logic.",
      keyAchievements: [
        "Seamless performance during live international summit broadcasts with thousands of concurrent visitors.",
        "Dynamic speaker directories and schedule management with zero latency.",
        "Responsive, high-contrast visual design accessible across desktop, mobile, and tablets.",
      ],
    },
    metrics: "Global Summit Hub",
    techStack: ["WordPress", "PHP", "Vanilla JS", "Video Streaming APIs", "Performance Optimization"],
    liveUrl: "https://oslofreedomforum.com/",
    featured: true,
    badge: "Global Conference",
  },
  {
    id: "jar-capital",
    title: "JAR Capital (Geneva)",
    category: "web",
    categoryLabel: "Fintech & Wealth Management",
    role: "Full-Stack Architect & Theme Developer",
    tagline: "Swiss wealth management and private banking institution digital platform.",
    description:
      "Engineered a bespoke, from-scratch PHP theme compatible with WordPress CMS to meet the stringent aesthetic and regulatory demands of Swiss private wealth management.",
    deepDive: {
      challenge:
        "The client required the sophistication and minimalism of Swiss private banking, uncompromising loading speed, and an intuitive CMS backend so wealth managers could update reports without touching code.",
      architecture:
        "Built a 100% custom PHP theme from zero—no pre-made bloated templates. Hand-crafted responsive typography, micro-interactions, and secure data handling conforming to Swiss standards.",
      keyAchievements: [
        "Delivered a bespoke Swiss banking aesthetic with pixel-perfect typographic rhythm.",
        "Created an intuitive custom editing experience tailored specifically for financial partners.",
        "Achieved near-instantaneous page loads with clean markup and zero extraneous dependencies.",
      ],
    },
    metrics: "Swiss Private Wealth",
    techStack: ["Bespoke PHP Theme", "WordPress CMS", "Modern CSS", "JavaScript", "Security Architecture"],
    liveUrl: "https://jarcapital.swiss/geneva/",
    featured: true,
    badge: "Fintech & Swiss Luxury",
  },
  {
    id: "gt-ai",
    title: "GT-AI Voice Intelligence",
    category: "web",
    categoryLabel: "AI & Full Custom CMS",
    role: "Full-Stack Engineer",
    tagline: "Next-generation generative voice platform with custom PHP backend and Angular frontend.",
    description:
      "Designed and built a full custom CMS from scratch using PHP and Angular, natively integrated with ElevenLabs voice synthesis APIs and custom audio configurations.",
    deepDive: {
      challenge:
        "Off-the-shelf CMS solutions could not handle the proprietary audio pipelines and dynamic voice configuration flows needed to showcase generative AI voice models.",
      architecture:
        "Engineered a custom PHP backend API coupled with a reactive Angular frontend. Implemented seamless webhook and REST communication with ElevenLabs AI endpoints, allowing fine-tuned parameter customization.",
      keyAchievements: [
        "Developed custom CMS architecture from the ground up tailored specifically to voice AI workflows.",
        "Integrated ElevenLabs generative voice engine with custom latency-optimized streaming configs.",
        "Built a modular, responsive Angular interface for fluid audio auditioning and state management.",
      ],
    },
    metrics: "Custom CMS + ElevenLabs AI",
    techStack: ["Angular", "Custom PHP CMS", "ElevenLabs AI API", "Audio Streaming", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://gt-ai.io/",
    featured: true,
    badge: "Generative AI Platform",
  },
  {
    id: "aura-glass",
    title: "Aura Glass Desktop Suite",
    category: "desktop",
    categoryLabel: "Open Source / Desktop UI",
    role: "Creator & Maintainer",
    tagline: "Frosted-glass GNOME Shell 48–51 environment, Shell extension, D-Bus bridge & GTK4/libadwaita settings app.",
    description:
      "A complete frosted-glass desktop suite for GNOME Shell 48–51 unifying GTK3, GTK4, libadwaita, and Shell stylesheets with a first-party GNOME Shell extension, D-Bus bridge, and native GTK4 settings app.",
    deepDive: {
      challenge:
        "Linux desktop theming is fragmented across GNOME Shell, GTK3, GTK4, and libadwaita. Standard themes break window shadows, hard-code accent colors, and require re-running shell scripts to adjust blur or opacity.",
      architecture:
        "Built a modular desktop suite in user-space ($HOME): patched Blur My Shell v73 (overview, sub-windows, notification blur) and Custom OSD for GNOME 50/51, wrote the Aura Glass Helper GNOME Shell extension ('Blur This App' window menu + adaptive performance toggle), and connected it via a D-Bus bridge to a native GTK4 + libadwaita settings GUI.",
      keyAchievements: [
        "Engineered a first-party GNOME Shell extension with a D-Bus bridge to a native GTK4/libadwaita settings GUI.",
        "Shipped 3 custom Blur My Shell v73 patches and dynamic GNOME accent color splicing across GTK3/GTK4.",
        "Zero-root user-space installer & clean uninstaller supporting Arch, Fedora, Ubuntu, and CachyOS.",
      ],
    },
    metrics: "GNOME Shell 48–51 • Extension + GTK4 GUI",
    techStack: ["GTK4", "libadwaita", "GNOME Shell Extension", "D-Bus", "CSS", "Bash"],
    githubUrl: "https://github.com/DevWebeloper/aura-glass",
    featured: true,
    badge: "Open Source Showcase",
  },
  {
    id: "novaos-xda",
    title: "NovaOS & NoteFE Full Port (XDA)",
    category: "systems",
    categoryLabel: "Android Systems & ROM Porting",
    role: "Lead Systems Developer / XDA Recognized",
    tagline: "Full Android 7.0 Note Fan Edition port to Galaxy J7 Prime & Xiaomi Perseus trees.",
    description:
      "Ported full Samsung Note Fan Edition firmware to budget hardware and maintained Xiaomi Mi MIX 3 (perseus) device trees, patching Mali GPU libraries for 60fps hardware blur and reaching 1M+ downloads.",
    deepDive: {
      challenge:
        "The Galaxy J7 Prime (G610X) was a budget handset with disabled compositor blur, incompatible camera vendor blobs, and Exynos audio routing differences compared to the flagship Note Fan Edition.",
      architecture:
        "Patched proprietary Mali GPU libraries to unlock hardware-accelerated real-time blur in SurfaceFlinger without frame drops. Resolved camera HAL and audio routing tables, and developed a register/header mapping workflow to cross-port ROM builds across 12 device variants without owning the physical hardware.",
      keyAchievements: [
        "Surpassed 1,000,000+ cumulative downloads across 12 supported device variants.",
        "Built and supported a 15,000+ member Telegram developer and user community.",
        "Maintained Xiaomi Mi MIX 3 (device_xiaomi_perseus) device trees and kernel configurations.",
      ],
    },
    metrics: "1,000,000+ Downloads • 15K Community",
    techStack: ["Android AOSP / HAL", "C / C++", "Kernel Patching", "GPU Binary Patching", "Device Trees", "Bash"],
    xdaUrl: "https://xdaforums.com/t/rom-7-0-novaos-j7prime-g610x-notefe-full-port-stable-bugless.3682256/",
    githubUrl: "https://github.com/DevWebeloper/device_xiaomi_perseus",
    featured: true,
    badge: "The Hacker Origin Story",
  },
  {
    id: "cider",
    title: "Cider Mobilier de Bureau",
    category: "web",
    categoryLabel: "Design & Workspace Studio",
    role: "Frontend & WordPress Engineer",
    tagline: "Leading Parisian workspace & designer furniture brand interactive showcase.",
    description:
      "Customized WordPress platform with bespoke PHP templates, CSS/Sass, and JavaScript powering an architectural furniture catalog and workspace showcase.",
    deepDive: {
      challenge:
        "Displaying high-resolution designer furniture collections and material variants without degrading mobile load speeds or layout stability.",
      architecture:
        "Built custom WordPress PHP templates with optimized image delivery, responsive CSS/Sass layouts, and catalog filtering tailored to corporate interior designers.",
      keyAchievements: [
        "Fast, responsive media catalog with custom filtering for collections and finishes.",
        "Clean PHP template hierarchy built for straightforward client content updates.",
      ],
    },
    techStack: ["WordPress", "Custom PHP", "CSS3 / Sass", "JavaScript", "Responsive Design"],
    liveUrl: "https://www.cider.fr/",
    badge: "Parisian Design",
  },
  {
    id: "syncplay-tunnel",
    title: "Syncplay Tunnel",
    category: "desktop",
    categoryLabel: "Desktop Networking & Python",
    role: "Creator",
    tagline: "Fail-closed GTK4 app routing Syncplay and mpv over SSH/Tailscale with an HTTP CONNECT-to-SOCKS5 bridge.",
    description:
      "A fail-closed GTK4 desktop app that routes Syncplay and mpv through a remote SSH host over Tailscale, fixing FFmpeg's SOCKS5 proxy bypass leak and verifying exit IP before playback starts.",
    deepDive: {
      challenge:
        "Passing --http-proxy=socks5://... to mpv fails silently for video streams because mpv hands the flag to FFmpeg, which only speaks HTTP CONNECT and ignores socks5:// URLs—causing yt-dlp to resolve over the tunnel while FFmpeg streams video directly from the client's real IP.",
      architecture:
        "Wrote a local HTTP CONNECT proxy in Python that bridges FFmpeg traffic into the SSH SOCKS5 tunnel over Tailscale. Built a GTK4 interface that scans native and Distrobox containers for Syncplay/mpv, resolves episodes onto the shared playlist, verifies the remote egress IP before starting playback, and terminates playback immediately if the tunnel drops.",
      keyAchievements: [
        "Fixed mpv/FFmpeg's silent socks5:// direct-IP leak via a local HTTP CONNECT-to-SOCKS5 proxy bridge.",
        "Implemented fail-closed egress verification that kills playback if the SSH tunnel drops.",
        "Auto-detects native and Distrobox Syncplay/mpv installations and syncs resolved playlists.",
      ],
    },
    techStack: ["Python", "GTK4", "SSH / SOCKS5", "HTTP CONNECT Proxy", "mpv / FFmpeg", "Tailscale"],
    githubUrl: "https://github.com/DevWebeloper/syncplay-tunnel",
    badge: "Network Utility",
  },
  {
    id: "alienfx-linux",
    title: "AlienFX-Linux SDK & CLI",
    category: "systems",
    categoryLabel: "Hardware Control & Linux SDK",
    role: "Creator & Maintainer",
    tagline: "Linux C/C++ SDK and CLI for Dell G-Series & Alienware USB HID RGB lighting and ACPI fan control.",
    description:
      "Ported the AlienFX and AlienFan SDKs and CLI (alienfx-cli) to Linux, providing direct USB HID and ACPI hardware control for Alienware and Dell G-Series systems (2010–2025).",
    deepDive: {
      challenge:
        "Dell and Alienware ELC/Darfon hardware controllers rely on proprietary USB HID report packets (API v1–v8) and ACPI calls for zonal/per-key RGB lighting and fan curves, with official tooling restricted to Windows.",
      architecture:
        "Built a CMake/Ninja C/C++ static library (AlienFX-SDK) and CLI (alienfx-cli) that communicates directly with USB HID report/feature endpoints (9-byte to 65-byte protocols across APIv1–v8) and AlienFan ACPI interfaces with minimal RAM footprint.",
      keyAchievements: [
        "Direct hardware USB HID control supporting Alienware/Dell notebooks, desktops, keyboards, mice, and monitors (API v1–v8).",
        "Zero background bloat: tiny C/C++ static library and terminal CLI built with CMake and Ninja.",
      ],
    },
    techStack: ["C / C++", "CMake / Ninja", "USB HID Protocols", "ACPI / Fan Control", "Linux CLI"],
    githubUrl: "https://github.com/DevWebeloper/alienfx-linux",
    badge: "Hardware & Kernel",
  },
  {
    id: "omniclouds",
    title: "OmniClouds",
    category: "web",
    categoryLabel: "Cloud & Telecom",
    role: "Web Developer",
    tagline: "Global Cloud and SASE service provider delivering SD-WAN solutions.",
    description:
      "Cost-optimized enterprise WordPress deployment engineered to deliver maximum brand impact and speed within tight client budget parameters.",
    deepDive: {
      challenge:
        "Delivering a corporate enterprise telecom presence with rapid turnaround and budget constraints.",
      architecture:
        "Engineered lean custom WordPress components, prioritizing SEO, responsive layout fidelity, and fast initial server response times.",
      keyAchievements: [
        "Delivered a modern telecom brand aesthetic aligned with corporate cloud services.",
        "Cost-effective architecture that eliminated recurring plugin subscription overhead.",
      ],
    },
    techStack: ["WordPress", "Custom PHP", "CSS3", "JavaScript"],
    liveUrl: "https://www.omniclouds.com/",
    badge: "Enterprise Telecom",
  },
  {
    id: "iph-studios",
    title: "IPH Studios",
    category: "web",
    categoryLabel: "Creative Agency",
    role: "Web Developer",
    tagline: "Creative design and production studio showcase.",
    description:
      "Custom WordPress development delivering an immersive visual portfolio for creative campaigns and branding work.",
    deepDive: {
      challenge: "Showcasing creative studio work with fast asset loading and fluid grid aesthetics.",
      architecture: "Custom WordPress styling with responsive video embeds and interactive project galleries.",
      keyAchievements: ["Smooth responsive showcase for high-resolution brand visuals."],
    },
    techStack: ["WordPress", "PHP", "Interactive CSS"],
    liveUrl: "https://iphstudios.com/",
    badge: "Creative Studio",
  },
  {
    id: "depistage-cancers",
    title: "CRCDC Pays de la Loire (Dépistage Cancers)",
    category: "web",
    categoryLabel: "Public Health & Healthcare",
    role: "Independent Full-Stack & WordPress Engineer",
    tagline: "French Regional Center for Cancer Screening Coordination public health portal.",
    description:
      "Engineered and customized a regional French public health platform promoting national organized cancer screening programs across Pays de la Loire with custom PHP shortcodes, dynamic content models, and booking workflows.",
    deepDive: {
      challenge:
        "Delivering an accessible, trustworthy, and easy-to-navigate public health portal for diverse demographics and healthcare practitioners across western France.",
      architecture:
        "Developed custom WordPress PHP shortcodes, dynamic JetEngine data structures, and integrated appointment/screening workflows with strict French GDPR (Axeptio) compliance and SEO schema optimization.",
      keyAchievements: [
        "Engineered custom header modules, interactive multi-tab screening guides, and regional health directories.",
        "Optimized Core Web Vitals, accessibility contrast, and mobile responsiveness for public health outreach.",
        "Implemented structured GovernmentOrganization JSON-LD schema and GDPR-compliant analytics.",
      ],
    },
    metrics: "French Regional Healthcare Portal",
    techStack: ["WordPress", "Custom PHP Shortcodes", "JetEngine", "JavaScript", "GDPR / Accessibility"],
    liveUrl: "https://depistagecancers.fr/",
    featured: true,
    badge: "Public Health (France)",
  },
  {
    id: "tania-production",
    title: "Tania Production",
    category: "web",
    categoryLabel: "Media & Film",
    role: "Web Developer",
    tagline: "Film, commercial, and visual media production company showcase.",
    description:
      "Dynamic portfolio website engineered for high-definition video showreels and commercial production case studies.",
    deepDive: {
      challenge: "Embedding heavy video showreels seamlessly across mobile and desktop without layout shift.",
      architecture: "Engineered responsive video containers, lazy-loaded visual previews, and clean CMS editorial controls.",
      keyAchievements: ["Optimized media delivery for commercial video directors and producers."],
    },
    techStack: ["WordPress", "Custom PHP", "Fluid CSS", "Video Embed Optimization"],
    liveUrl: "https://taniaproduction.com/",
    badge: "Film Production",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Web & Full-Stack",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "JavaScript / TypeScript", level: "Senior (8+ yrs)" },
      { name: "PHP & Custom Themes", level: "Expert" },
      { name: "WordPress Internals / Headless", level: "Expert (Zero-bloat)" },
      { name: "React & Next.js", level: "Advanced" },
      { name: "Angular", level: "Production" },
      { name: "Tailwind CSS & Modern CSS", level: "Mastery" },
      { name: "ElevenLabs & AI APIs", level: "Production" },
      { name: "REST & GraphQL APIs", level: "Advanced" },
    ],
  },
  {
    name: "Systems & Linux Engineering",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "GTK4 & libadwaita Theming", level: "Creator (Aura Glass)" },
      { name: "Linux Desktop Internals & Shell", level: "Advanced" },
      { name: "Python Systems & GUI", level: "Production (Syncplay)" },
      { name: "SSH & Network Egress Tunnels", level: "Advanced" },
      { name: "Hardware Control / USB Protocols", level: "Specialist (AlienFX)" },
      { name: "System Performance Profiling", level: "Advanced" },
    ],
  },
  {
    name: "Low-Level & Android ROM Hacker Roots",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Android HAL & Device Trees", level: "10+ Years Tinkering" },
      { name: "GPU Library Reverse Engineering", level: "Real-time blur on budget chips" },
      { name: "Kernel Patching & Compilation", level: "Expert" },
      { name: "Blind Device Cross-Porting", level: "Proven Architecture" },
      { name: "ARM & Driver Debugging", level: "Systems-level" },
      { name: "15K Community Leadership", level: "Community Driven" },
    ],
  },
];

export const TIMELINE: CareerMilestone[] = [
  {
    period: "2016 – 2018",
    title: "The XDA & Android ROM Era",
    subtitle: "Reverse Engineering GPU Drivers & 1M+ Downloads",
    description:
      "Treated budget smartphones like supercomputers. Reverse-engineered proprietary GPU libraries to bring real-time blur and fluid Samsung NoteFE interfaces to budget devices. Built a 15,000+ member Telegram developer community and generated over 1 million ROM downloads across 12 devices.",
    tags: ["Android HAL", "C/C++", "Kernel Patching", "GPU Reverse Engineering", "1M+ Downloads"],
    icon: "Smartphone",
  },
  {
    period: "2018 – 2022",
    title: "High-Traffic Enterprise & Client Engineering",
    subtitle: "High-Profile NGOs, Swiss Wealth & Media Houses",
    description:
      "Transitioned metal-level optimization instincts to the web. Engineered custom PHP architectures and bespoke themes for international clients including Human Rights Foundation (HRF), Oslo Freedom Forum, JAR Capital in Geneva, CRCDC Pays de la Loire, and Cider in Paris.",
    tags: ["High-Traffic Web", "Custom PHP", "WordPress CMS", "Fintech Compliance", "Client Strategy"],
    icon: "Globe",
  },
  {
    period: "2023 – Present",
    title: "Linux Desktop Innovation & AI Systems",
    subtitle: "Aura Glass, Voice AI & Modern Full-Stack Platforms",
    description:
      "Created Aura Glass (frosted glass GTK4 theme for GNOME Shell 48–50), developed GT-AI with custom PHP/Angular and ElevenLabs voice models, and built desktop networking tools like Syncplay Tunnel. Continuing to bridge OS-level aesthetics with high-performance web engineering.",
    tags: ["Next.js", "GTK4 / libadwaita", "ElevenLabs AI", "Angular", "Open Source"],
    icon: "Layers",
  },
];

export interface CVRole {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: {
    project: string;
    url?: string;
    badge: string;
    description: string;
    stack: string[];
  }[];
}

export const CV_META = {
  title: "Senior Full-Stack Web & Systems Engineer",
  subtitle: "React • Next.js • TypeScript • Custom PHP / WordPress Architecture • Generative AI • Linux Systems",
  languages: [
    { name: "English", proficiency: "Full Professional Proficiency" },
    { name: "Arabic", proficiency: "Native / Bilingual Proficiency" },
  ],
  education: {
    headline: "10+ Years Self-Taught Systems & Full-Stack Engineering Mastery",
    details:
      "Deep practical foundation rooted in low-level Linux/Android kernel engineering, binary reverse-engineering, and 8+ years of production full-stack web architecture across enterprise NGOs, Swiss private wealth, healthcare, and AI platforms.",
  },
};

export const CV_EXPERIENCE: CVRole[] = [
  {
    company: "XonBoard",
    role: "Senior Full-Stack Web Engineer & Technical Lead",
    period: "2019 – Present",
    location: "Remote (International Clients: US, Switzerland, Europe, MENA)",
    type: "Agency / Enterprise Engineering",
    summary:
      "Architected and delivered mission-critical web platforms, custom CMS backends, bespoke zero-bloat PHP themes, and AI voice applications for global non-profits, Swiss financial institutions, cloud providers, and creative studios.",
    highlights: [
      {
        project: "Human Rights Foundation (HRF) & Oslo Freedom Forum",
        url: "https://hrf.org/",
        badge: "Global NGO & Flagship Summit",
        description:
          "Engineered the primary web platforms for HRF (hrf.org) and Oslo Freedom Forum (oslofreedomforum.com) using heavily customized WordPress PHP and vanilla ES6+ JavaScript. Built zero-bloat modular templates, multi-tier caching, live summit streaming hubs, and interactive speaker schedules capable of sustaining massive global geopolitical traffic spikes.",
        stack: ["Custom PHP", "WordPress Architecture", "JavaScript (ES6+)", "High-Traffic Caching", "Security Hardening"],
      },
      {
        project: "GT-AI Voice Intelligence Platform",
        url: "https://gt-ai.io/",
        badge: "Generative AI & Custom CMS",
        description:
          "Designed and built a proprietary full-stack CMS from scratch combining a custom PHP REST backend with a reactive Angular frontend. Integrated ElevenLabs generative voice synthesis APIs with low-latency audio streaming and dynamic parameter controls.",
        stack: ["Angular", "Custom PHP CMS", "ElevenLabs AI API", "REST APIs", "Audio Streaming", "Tailwind CSS"],
      },
      {
        project: "JAR Capital (Geneva)",
        url: "https://jarcapital.swiss/geneva/",
        badge: "Swiss Private Wealth & Fintech",
        description:
          "Hand-crafted a 100% bespoke, from-scratch PHP theme on WordPress CMS for a Geneva private banking and wealth management institution. Achieved near-instantaneous load speeds, pixel-perfect Swiss typographic precision, and a tailored editorial backend for financial partners.",
        stack: ["Bespoke PHP Theme", "WordPress CMS", "Modern CSS", "Performance Engineering", "Swiss Compliance"],
      },
      {
        project: "OmniClouds, IPH Studios & Tania Production",
        url: "https://www.omniclouds.com/",
        badge: "Telecom & Creative Media",
        description:
          "Delivered lean, cost-optimized enterprise and media platforms for OmniClouds (Global Cloud/SASE & SD-WAN provider), IPH Studios (creative agency), and Tania Production (commercial film showreels) with zero-CLS video delivery and custom PHP templates.",
        stack: ["WordPress", "Custom PHP", "Fluid CSS", "Media & Video Optimization", "Technical SEO"],
      },
    ],
  },
  {
    company: "Independent Full-Stack Consultant & Open-Source Author",
    role: "Senior Full-Stack & Linux Systems Engineer",
    period: "2018 – Present",
    location: "Remote (France, Europe & Global)",
    type: "Freelance Consulting & Open Source",
    summary:
      "Partnered directly with European healthcare institutions and design brands to deliver custom web platforms, while authoring open-source Linux desktop themes, network tunneling GUI tools, and hardware control SDKs.",
    highlights: [
      {
        project: "CRCDC Pays de la Loire (Dépistage Cancers)",
        url: "https://depistagecancers.fr/",
        badge: "French Public Health Portal",
        description:
          "Engineered custom PHP shortcodes, dynamic JetEngine data structures, and interactive public health screening pathways for the Regional Center for Cancer Screening Coordination in Pays de la Loire, France, ensuring strict GDPR compliance and accessibility.",
        stack: ["WordPress", "Custom PHP", "JetEngine", "JavaScript", "GDPR & Accessibility"],
      },
      {
        project: "Cider Mobilier de Bureau (Paris)",
        url: "https://www.cider.fr/",
        badge: "Parisian Architectural Design",
        description:
          "Built customized WordPress/PHP catalog templates, responsive CSS3/Sass layouts, and high-resolution media filtering for a leading Parisian corporate furniture and workspace design studio.",
        stack: ["Custom PHP", "WordPress", "CSS3 / Sass", "JavaScript", "Catalog Optimization"],
      },
      {
        project: "Aura Glass GNOME Theme (GTK4 + libadwaita)",
        url: "https://github.com/DevWebeloper/aura-glass",
        badge: "Open Source • GNOME 48–50",
        description:
          "Created a frosted-glass Linux desktop design system unifying GTK3, GTK4, libadwaita, and GNOME Shell 48–50 stylesheets with a zero-root cross-distro Bash installer supporting Arch, Fedora, Ubuntu, and CachyOS.",
        stack: ["GTK4", "libadwaita", "GNOME Shell CSS", "Bash", "Design Systems"],
      },
      {
        project: "Syncplay Tunnel & AlienFX Linux SDK",
        url: "https://github.com/DevWebeloper/syncplay-tunnel",
        badge: "Linux Networking & Hardware SDK",
        description:
          "Built Syncplay Tunnel (Python + GTK4 app automating SSH tunnels, mpv IPC, and cryptographic egress verification for synchronized media playback) and AlienFX Linux SDK (reverse-engineered USB/ACPI packets and Linux sysfs for native Alienware RGB & thermal fan control).",
        stack: ["Python", "C", "GTK4", "SSH Tunneling", "Linux sysfs", "USB Protocol Reverse-Eng"],
      },
    ],
  },
  {
    company: "XDA Developers Community (NovaOS Project)",
    role: "Lead Android Systems Developer & Recognized ROM Porter",
    period: "2016 – 2018 (10-Year Ongoing Tinkering)",
    location: "Global Open-Source Community",
    type: "Low-Level Systems & OS Engineering",
    summary:
      "Pioneered full flagship Android OS ports and GPU driver reverse-engineering for resource-constrained smartphones, scaling distribution to over 1,000,000+ downloads and leading a 15,000+ member developer community.",
    highlights: [
      {
        project: "NovaOS & Samsung NoteFE Full Port (1,000,000+ Downloads)",
        url: "https://xdaforums.com/t/rom-7-0-novaos-j7prime-g610x-notefe-full-port-stable-bugless.3682256/",
        badge: "1M+ Users • 15K Community",
        description:
          "Extracted, decompiled, and ported Samsung Note Fan Edition (Android 7.0) and Xiaomi Perseus device trees across 12+ devices. Reverse-engineered Mali GPU libraries to unlock 60fps real-time hardware blur on budget SoCs, fixed native camera HAL and Exynos audio routing, and developed a 'device-less' blind porting methodology.",
        stack: ["Android HAL", "C / C++", "Linux Kernel Patching", "GPU Binary Reverse-Eng", "Device Trees"],
      },
    ],
  },
];

