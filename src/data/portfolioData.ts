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
  email: "ghaith.alkawadri.dev@gmail.com",
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
    value: "8 Live",
    label: "Client Deployments",
    sublabel: "From Swiss banking to global NGOs & AI platforms",
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
    title: "Aura Glass GNOME Theme",
    category: "desktop",
    categoryLabel: "Open Source / Desktop UI",
    role: "Creator & Lead Designer",
    tagline: "A frosted-glass GNOME theme (GTK4 + libadwaita) for GNOME Shell 48–50.",
    description:
      "Applied 8 years of web UI/UX intuition to the Linux desktop, delivering an ultra-modern frosted glass aesthetic with one-script zero-root installation across Arch, Fedora, Ubuntu, and CachyOS.",
    deepDive: {
      challenge:
        "Linux desktop theming is notoriously fragmented between GTK3, GTK4, libadwaita, and GNOME Shell styling, often resulting in broken borders, misaligned blur, and unreadable contrast.",
      architecture:
        "Engineered unified CSS stylesheets that harmoniously blend with Blur my Shell and system widgets. Wrote an automated shell installer that safely provisions themes without root permissions, accommodating desktop updates seamlessly.",
      keyAchievements: [
        "Created one of the sleekest frosted-glass aesthetics for modern GNOME Shell (48-50).",
        "Zero-root shell installation script with cross-distro support (Arch, Fedora, Ubuntu, CachyOS).",
        "Demonstrated mastery of CSS specificity, GPU blur blending, and desktop design systems.",
      ],
    },
    metrics: "GNOME Shell 48–50 • One-Script No-Root",
    techStack: ["GTK4", "libadwaita", "GNOME Shell CSS", "Bash", "Linux Desktop Architecture"],
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
      "10 years ago, revolutionized budget device performance by reverse-engineering GPU libraries to achieve real-time blur and fluid UI on resource-constrained hardware, scaling to 1M+ downloads.",
    deepDive: {
      challenge:
        "The Galaxy J7 Prime was a budget smartphone with weak hardware, missing camera vendor blobs, and disabled UI effects. Porting Samsung's flagship NoteFE Nougat required resolving incompatible hardware abstraction layers (HAL), audio routing, and severe GPU throttling.",
      architecture:
        "Reverse-engineered proprietary GPU libraries to force real-time blur and hardware acceleration. Developed an innovative cross-porting abstraction methodology that allowed porting to devices without physically owning them by deeply understanding SoC registers, kernel headers, and binder IPC.",
      keyAchievements: [
        "Surpassed 1,000,000+ total downloads across all versions and 12 supported devices.",
        "Built and led a 15,000+ member Telegram developer community.",
        "Achieved 100% bugless and stable performance on budget devices through low-level reverse engineering.",
        "Still actively debugging and fixing custom ROM bugs for the open-source community a decade later.",
      ],
    },
    metrics: "1,000,000+ Downloads • 15K Telegram Community",
    techStack: ["Android HAL", "C / C++", "Kernel Patching", "GPU Lib Reverse Engineering", "ARM Assembly", "Bash"],
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
      "Highly customized WordPress platform with bespoke PHP, CSS, and JavaScript powering an elegant catalog of architectural furniture and workspace designs.",
    deepDive: {
      challenge:
        "Displaying high-resolution designer furniture collections without degrading mobile speed or page responsiveness.",
      architecture:
        "Customized WordPress core templates with optimized image delivery, fluid CSS layouts, and bespoke filtering logic tailored to French corporate interior designers.",
      keyAchievements: [
        "High-performance media catalog with smooth transition animations.",
        "Custom PHP template structures tailored to furniture collections and material variants.",
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
    tagline: "GTK4 app routing Syncplay and mpv through a remote machine over SSH with verified egress.",
    description:
      "Built a seamless, plug-and-play desktop application for non-technical friends and family to watch movies remotely with synchronized pause/unpause and verified SSH egress.",
    deepDive: {
      challenge:
        "Remote synchronized video watching typically requires complex network setups, port forwarding, or unreliable third-party servers.",
      architecture:
        "Built a clean GTK4 desktop interface in Python. Integrates with mpv IPC and Syncplay, automatically creating an SSH tunnel and cryptographically verifying egress routing before video playback begins.",
      keyAchievements: [
        "Turned complex SSH tunneling into a one-click friendly interface for non-technical users.",
        "Verified network egress security prior to any media transmission.",
        "Real-time synchronized playback and pause state across global connections.",
      ],
    },
    techStack: ["Python", "GTK4", "SSH Tunneling", "mpv IPC", "Linux Networking"],
    githubUrl: "https://github.com/DevWebeloper/syncplay-tunnel",
    badge: "Network Utility",
  },
  {
    id: "alienfx-linux",
    title: "AlienFX Linux SDK",
    category: "systems",
    categoryLabel: "Hardware Control & Linux SDK",
    role: "Creator & Maintainer",
    tagline: "Alienware systems RGB lighting and fan control SDK for Linux.",
    description:
      "Created an open-source driver and control utility for Alienware hardware on Linux because official Alienware Command Center software was exclusively available on Windows.",
    deepDive: {
      challenge:
        "Dell Alienware hardware uses proprietary USB/ACPI control signals for zonal RGB lighting and fan profiles that were completely non-functional on Linux distributions.",
      architecture:
        "Interfaced with Linux sysfs and USB controller protocols to provide a clean CLI and SDK for customizing thermal profiles and RGB zones on Alienware laptops and desktops.",
      keyAchievements: [
        "Enabled native hardware control for Alienware Linux users without Windows emulation.",
        "Reverse-engineered lighting zone USB packets and fan speed thresholds.",
      ],
    },
    techStack: ["C / Python", "Linux Kernel sysfs", "USB Protocol Analysis", "Hardware SDK"],
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
      "Transitioned metal-level optimization instincts to the web. Engineered custom PHP architectures and bespoke themes for international clients including Human Rights Foundation (HRF), Oslo Freedom Forum, JAR Capital in Geneva, and Cider in Paris.",
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
