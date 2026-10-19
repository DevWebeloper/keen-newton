export const PERSON = {
  name: "Ghaith Alkawadri",
  role: "Web developer",
  headline: "Web developer building custom WordPress themes and fast front-ends.",
  intro:
    "Self-taught, 8+ years of remote work for teams in the US, Switzerland, France and Norway. I write themes from scratch in PHP, JavaScript and CSS instead of stacking plugins, and I build Angular and React front-ends.",
  base: "Remote, based in Egypt",
  email: "gheith.sy@gmail.com",
  github: "https://github.com/DevWebeloper",
  githubLabel: "github.com/DevWebeloper",
  cv: "/Ghaith-Alkawadri-CV.pdf",
  timeZone: "Africa/Cairo",
  // Usual working day in Cairo time, used by the hours tool.
  dayStart: 9,
  dayEnd: 18,
};

export const STATS = [
  { value: "8+", label: "years of remote client work" },
  { value: "4", label: "countries: US, Switzerland, France, Norway" },
  { value: "1M+", label: "downloads of my Android ROMs" },
  { value: "125", label: "GitHub stars on Aura Glass" },
];

export interface Project {
  id: string;
  name: string;
  client: string;
  role: string;
  years?: string;
  domain: string;
  url: string;
  image: string;
  imageHeight: number;
  summary: string;
  built: string[];
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "hrf",
    name: "Human Rights Foundation",
    client: "Non-profit, New York",
    role: "Development",
    years: "2018–2022",
    domain: "hrf.org",
    url: "https://hrf.org",
    image: "/work/hrf.webp",
    imageHeight: 1035,
    summary: "Part of the distributed team maintaining the foundation's WordPress site.",
    built: [
      "Theme templates and custom features in PHP",
      "Front-end JavaScript and CSS",
      "Kept the site fast and stable through traffic spikes around major news",
    ],
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
  {
    id: "off",
    name: "Oslo Freedom Forum",
    client: "Annual conference, Oslo",
    role: "Development",
    years: "2018–2022",
    domain: "oslofreedomforum.com",
    url: "https://oslofreedomforum.com",
    image: "/work/off.webp",
    imageHeight: 1200,
    summary: "Event pages for the forum's site, built to hold up during the conference.",
    built: ["Speaker listings", "Agenda and schedule filtering", "Livestream embeds"],
    stack: ["WordPress", "PHP", "JavaScript"],
  },
  {
    id: "gtai",
    name: "GT-AI",
    client: "AI voice platform",
    role: "Front-end development",
    domain: "gt-ai.io",
    url: "https://gt-ai.io",
    image: "/work/gtai.webp",
    imageHeight: 1200,
    summary: "The Angular front-end for a voice platform built on the ElevenLabs API.",
    built: ["Voice preview and playback", "Voice settings screens", "Integration with the ElevenLabs API"],
    stack: ["Angular", "TypeScript", "REST APIs"],
  },
  {
    id: "crcdc",
    name: "CRCDC Pays de la Loire",
    client: "Regional cancer-screening centre, France",
    role: "Theme development",
    domain: "depistagecancers.fr",
    url: "https://depistagecancers.fr",
    image: "/work/crcdc.webp",
    imageHeight: 840,
    summary: "A custom WordPress theme serving both the public and health professionals.",
    built: ["Screening programme pages", "Training catalogue", "Events agenda and publications"],
    stack: ["WordPress", "PHP", "JavaScript", "Sass"],
  },
  {
    id: "cider",
    name: "Cider",
    client: "Office furniture, Paris",
    role: "Development",
    domain: "cider.fr",
    url: "https://www.cider.fr",
    image: "/work/cider.webp",
    imageHeight: 1200,
    summary: "A custom WordPress build with large photography that stays quick on a phone.",
    built: ["Custom theme templates", "Project and product pages", "Image-heavy layouts tuned for mobile"],
    stack: ["WordPress", "PHP", "CSS"],
  },
];

export const MORE_SITES = [
  {
    name: "JAR Capital",
    what: "Custom theme from scratch for a Geneva wealth manager, no page builder",
    domain: "jarcapital.swiss",
    url: "https://jarcapital.swiss/geneva/",
  },
  {
    name: "Tania Production",
    what: "Video showreels and galleries with lazy-loaded media",
    domain: "taniaproduction.com",
    url: "https://taniaproduction.com",
  },
  {
    name: "IPH Studios",
    what: "Media studio site with full-screen video",
    domain: "iphstudios.com",
    url: "https://iphstudios.com",
  },
  {
    name: "OmniClouds",
    what: "Cloud and SD-WAN provider company site",
    domain: "omniclouds.com",
    url: "https://www.omniclouds.com",
  },
];

export const OPEN_SOURCE = [
  {
    name: "Aura Glass",
    stars: 125,
    summary:
      "Frosted-glass theme for GNOME Shell 48–51. Interactive installer, a settings app, and an adaptive mode that turns blur off on battery or under heavy GPU load.",
    stack: ["GTK4", "libadwaita", "CSS", "Bash"],
    url: "https://github.com/DevWebeloper/aura-glass",
  },
  {
    name: "AWCC for Linux",
    summary:
      "Open-source alternative to Alienware Command Center for Linux and SteamOS: a Python daemon, a GTK4 app and a React plugin for Steam's gaming mode.",
    stack: ["Python", "GTK4", "React", "systemd"],
    url: "https://github.com/DevWebeloper/awcc-linux",
  },
  {
    name: "Syncplay Tunnel",
    summary:
      "GTK4 app that routes synced video playback through a remote machine over SSH, and stops playback if the tunnel drops.",
    stack: ["Python", "GTK4", "SSH"],
    url: "https://github.com/DevWebeloper/syncplay-tunnel",
  },
];

export const EXPERIENCE = [
  {
    years: "2020 – now",
    role: "Freelance web developer",
    org: "Remote",
    points: [
      "Custom WordPress themes for clients in Switzerland and France",
      "Angular front-end for the GT-AI voice platform",
      "Every theme hand-written, so editors can update pages without touching code",
    ],
  },
  {
    years: "2018 – 2022",
    role: "Web developer",
    org: "Human Rights Foundation & Oslo Freedom Forum",
    points: [
      "Theme templates, custom features and front-end code on a large existing codebase",
      "Event pages: speakers, agenda filtering, livestreams",
      "Kept both sites fast and stable during traffic spikes",
    ],
  },
  {
    years: "2016 – 2018",
    role: "Android ROM developer",
    org: "NovaOS, XDA Developers",
    points: [
      "Ported Samsung's Note FE firmware to 12 budget devices, 1,000,000+ downloads",
      "Patched device trees, kernels and vendor libraries to fix camera, audio and graphics",
      "Started and ran a 15,000-member Telegram community",
    ],
  },
];

export const SKILLS = [
  {
    group: "Web",
    items: ["PHP", "WordPress themes", "JavaScript", "TypeScript", "Angular", "React", "Next.js", "HTML", "CSS / Sass", "Tailwind CSS", "MySQL", "REST APIs"],
  },
  {
    group: "Linux & desktop",
    items: ["Python", "GTK4 / libadwaita", "Bash", "systemd", "udev", "SSH", "Git"],
  },
  {
    group: "Android",
    items: ["Device trees", "Kernel builds", "HAL debugging"],
  },
  {
    group: "Languages",
    items: ["Arabic (native)", "English (professional)"],
  },
];
