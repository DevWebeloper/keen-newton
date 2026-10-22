const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const PERSON = {
  name: "Ghaith Alkawadri",
  role: "Software developer",
  headline: "Developer building for the web and the Linux desktop.",
  intro:
    "8+ years of remote web work, at XonBoard and as a freelancer, for clients in the US, Switzerland and France. I build Angular front-ends and WordPress sites, and I write and maintain open-source Linux software in Python and GTK4.",
  base: "Remote, based in Egypt",
  email: "gheith.sy@gmail.com",
  github: "https://github.com/DevWebeloper",
  githubLabel: "github.com/DevWebeloper",
  cv: `${BASE}/Ghaith-Alkawadri-CV.pdf`,
  timeZone: "Africa/Cairo",
  // Usual working day in Cairo time, used by the hours tool.
  dayStart: 9,
  dayEnd: 18,
};

export const STATS = [
  { value: "8+", label: "years of remote web work" },
  { value: "200k+", label: "downloads of my Android ROMs" },
  { value: "120+", label: "GitHub stars on Aura Glass" },
  { value: "15k+", label: "members in the ROM community I ran" },
];

export interface Project {
  id: string;
  name: string;
  role: string;
  years?: string;
  domain: string;
  url: string;
  image: string;
  imageHeight: number;
  summary: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "hrf",
    name: "Human Rights Foundation & Oslo Freedom Forum",
    role: "Web developer at XonBoard",
    domain: "hrf.org",
    url: "https://hrf.org",
    image: `${BASE}/work/hrf.webp`,
    imageHeight: 1035,
    summary:
      "Worked on both WordPress sites as part of XonBoard's remote team: theme templates, custom features and the Forum's event pages.",
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
  {
    id: "gtai",
    name: "GT-AI",
    role: "Front-end developer at XonBoard",
    domain: "gt-ai.io",
    url: "https://gt-ai.io",
    image: `${BASE}/work/gtai.webp`,
    imageHeight: 1200,
    summary: "Built the Angular front-end for an AI voice platform on the ElevenLabs API.",
    stack: ["Angular", "TypeScript", "REST APIs"],
  },
  {
    id: "crcdc",
    name: "CRCDC Pays de la Loire",
    role: "Freelance",
    domain: "depistagecancers.fr",
    url: "https://depistagecancers.fr",
    image: `${BASE}/work/crcdc.webp`,
    imageHeight: 840,
    summary:
      "WordPress site for a French regional cancer-screening centre, serving both the public and health professionals.",
    stack: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
  {
    id: "cider",
    name: "Cider",
    role: "Freelance",
    domain: "cider.fr",
    url: "https://www.cider.fr",
    image: `${BASE}/work/cider.webp`,
    imageHeight: 1200,
    summary: "WordPress site for a Paris office-furniture company, with image-heavy project and product pages.",
    stack: ["WordPress", "PHP", "CSS"],
  },
];

export const OTHER_CLIENTS = ["JAR Capital (Geneva)"];

export const OPEN_SOURCE = [
  {
    name: "Aura Glass",
    stars: "120+",
    downloads: "~2k",
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
    years: "2019 – now",
    role: "Freelance web developer",
    org: "Remote",
    points: [
      "WordPress sites built and customised with theme code and visual editors",
      "Clients include CRCDC Pays de la Loire, Cider and JAR Capital",
    ],
  },
  {
    years: "2018 – 2025",
    role: "Web developer",
    org: "XonBoard",
    points: [
      "Human Rights Foundation and Oslo Freedom Forum sites: theme templates, custom features and front-end code",
      "Event pages for the Forum: speakers, schedule filtering, livestreams",
      "Angular front-end for the GT-AI voice platform",
      "Websites for other XonBoard clients",
    ],
  },
  {
    years: "2016 – 2018",
    role: "Android ROM developer",
    org: "NovaOS, XDA Developers",
    points: [
      "Ported Samsung's Note FE firmware to 12 budget devices, 200k+ downloads",
      "Patched device trees, kernels and vendor libraries to fix camera, audio and graphics",
      "Ported a GPU library from another device so UI blur worked on every supported device",
      "Started and ran a 15k+ member Telegram community",
    ],
  },
];

export const SKILLS = [
  {
    group: "Web",
    items: ["JavaScript", "TypeScript", "Angular", "React", "Next.js", "PHP", "WordPress", "HTML", "CSS / Sass", "Tailwind CSS", "MySQL", "REST APIs"],
  },
  {
    group: "Linux & desktop",
    items: ["Python", "GTK4 / libadwaita", "Bash", "systemd", "udev", "SSH", "Git"],
  },
  {
    group: "Android",
    items: ["ROM porting", "Device trees", "Kernel patching", "Vendor library porting"],
  },
  {
    group: "Languages",
    items: ["Arabic (native)", "English (professional)"],
  },
];
