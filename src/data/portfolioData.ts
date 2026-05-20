export type ProjectType = "web" | "mobile";

export type SkillSpotlight = {
  title: string;
  icon: string;
  tools: string[];
  problem: string;
  solution: string;
  result: string;
};

export type PortfolioProject = {
  slug: string;
  type: ProjectType;
  category: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
  features: string[];
  technologies: string[];
  /** Website / app preview (browser or device screen) */
  image: string;
  gallery: string[];
  videoUrl?: string;
  liveDemoUrl: string;
  codeUrl?: string;
  caseStudyVisitUrl?: string;
  accent: "violet" | "sky" | "coral" | "lime" | "orange";
};

export const profile = {
  name: "Daniel",
  role: "Full-Stack Web & Mobile Developer",
  tagline: "I craft vibrant web and mobile experiences that feel fast, polished, and conversion-ready.",
  email: "yourname@email.com",
  yearsExperience: 6,
  projectsDelivered: "50+",
  marketplaces: "Fiverr & direct clients",
};

/** ~15s hero clips — autoplay, muted, loop (add more files under public/videos/) */
export const heroVideoClips = [
  { src: "/hero-bg.mp4", label: "Web dashboard" },
  { src: "/videos/ai-coding-bg.mp4", label: "Product build" },
  { src: "/hero-bg.mp4", label: "UI interactions" },
] as const;

export const projects: PortfolioProject[] = [
  {
    slug: "spized-3d-jersey",
    type: "web",
    category: "3D commerce",
    title: "Spized — 3D jersey configurator",
    description: "Configurator-led sportswear commerce with club flows and premium customization.",
    overview:
      "A live sportswear experience where teams design kits in a browser-based 3D flow—built around trust, variant clarity, and conversion-focused merchandising.",
    problem:
      "Teams abandon custom kit purchases when variant previews feel abstract and trust is low before checkout.",
    solution:
      "Mapped sport-specific IA, transparent pricing cues, and configurator entry points aligned with EU production positioning.",
    result:
      "A clearer inspiration → design → order path that mirrors how premium sportswear brands convert online.",
    features: [
      "3D product configurator entry points",
      "Sport-specific category navigation",
      "Club ordering & bulk pricing cues",
      "Trust-forward production messaging",
      "Mobile-responsive storefront patterns",
    ],
    technologies: ["Next.js", "3D UX", "E-commerce", "Performance", "WebGL"],
    image: "/projects/p4-shopify-3d.png",
    gallery: ["/projects/p4-shopify-3d.png", "/projects/p5-shopify-3d.png"],
    liveDemoUrl: "https://www.spized.com/en",
    caseStudyVisitUrl: "https://www.spized.com/en",
    accent: "sky",
  },
  {
    slug: "vibecode-market",
    type: "web",
    category: "Marketplace",
    title: "VIBECODE Market",
    description: "Multi-category fashion storefront with filters, deals, and segmented catalogues.",
    overview:
      "A deployed marketplace shell with age-based lanes, featured collections, and filterable grids tuned for apparel at scale.",
    problem:
      "Template storefronts break down when you need age-based lanes, deals, and scan-friendly grids at scale.",
    solution:
      "Built category navigation, featured collections, filterable product grids, and conversion-oriented listing cards.",
    result:
      "Shoppers find the right lane quickly; browse-to-checkout feels intentional across large inventories.",
    features: [
      "Kids → Adults category lanes",
      "Featured deals & hero merchandising",
      "Filterable product grid",
      "Dark / light UI affordances",
      "Responsive catalog cards",
    ],
    technologies: ["Next.js", "React", "Tailwind", "Commerce UI", "Vercel"],
    image: "/projects/p1-web-app.png",
    gallery: ["/projects/p1-web-app.png", "/projects/p3-web-app.png"],
    videoUrl: "/hero-bg.mp4",
    liveDemoUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    caseStudyVisitUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    accent: "violet",
  },
  {
    slug: "racing-cars-landing",
    type: "web",
    category: "Marketing site",
    title: "RacingCars — launch landing",
    description: "High-energy automotive landing with gradient type, cinematic hero, and dual CTAs.",
    overview:
      "A launch narrative that sells speed and trust—bold hero, proof sections, and performance-conscious responsive layout.",
    problem:
      "Launch pages often feel generic—weak hierarchy and CTAs that don't match brand energy.",
    solution:
      "Structured a hero-led narrative with proof sections, responsive type, and performance-conscious assets.",
    result:
      "A premium launch story that reads instantly and guides visitors toward exploration and sign-up.",
    features: [
      "Gradient headline system",
      "Dual primary CTAs",
      "Cinematic hero imagery",
      "Feature grid sections",
      "Fully responsive layout",
    ],
    technologies: ["React", "Tailwind", "Framer Motion", "Responsive"],
    image: "/projects/p3-web-app.png",
    gallery: ["/projects/p3-web-app.png"],
    liveDemoUrl: "",
    accent: "coral",
  },
  {
    slug: "vibecode-mobile",
    type: "mobile",
    category: "E-commerce",
    title: "VIBECODE Shop",
    description: "Companion mobile storefront with tabs, product cards, and thumb-friendly checkout.",
    overview:
      "Mobile-first shopping with bottom navigation, swipe galleries, and lane shortcuts for faster discovery.",
    problem:
      "Mobile shoppers bounce when navigation is cramped and product discovery feels like a shrunk desktop site.",
    solution:
      "Designed bottom-nav IA, swipe-friendly galleries, sticky CTAs, and age-segment shortcuts for fast lane switching.",
    result:
      "Higher engagement on small screens with clearer paths from browse → product → cart.",
    features: [
      "Bottom tab navigation",
      "Product card grids",
      "Category lane shortcuts",
      "Sticky add-to-cart patterns",
      "Thumb-zone CTAs",
    ],
    technologies: ["React Native", "Expo", "Mobile UX", "REST APIs"],
    image: "/projects/p1-web-app.png",
    gallery: ["/projects/p1-web-app.png"],
    liveDemoUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    caseStudyVisitUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    accent: "lime",
  },
  {
    slug: "ops-command-mobile",
    type: "mobile",
    category: "Productivity",
    title: "Ops Command",
    description: "Field-friendly workflow dashboard for runs, alerts, and quick actions on the go.",
    overview:
      "A compact ops cockpit for monitoring executions, inspecting payloads, and acting without a laptop.",
    problem:
      "Operators miss critical workflow events when desktop-only tooling doesn't travel with the team.",
    solution:
      "Shipped card-based status views, compact charts, and one-tap drill-downs optimized for one-handed use.",
    result:
      "Faster response loops and fewer missed executions without opening a laptop.",
    features: [
      "Run status cards",
      "Compact analytics",
      "Alert summaries",
      "One-handed navigation",
      "Dark UI for long sessions",
    ],
    technologies: ["React Native", "Charts", "Push notifications", "Offline UX"],
    image: "/projects/p6-automation.png",
    gallery: ["/projects/p6-automation.png", "/projects/p7-automation.png"],
    liveDemoUrl: "",
    accent: "orange",
  },
];

export const webApps = projects.filter((p) => p.type === "web");
export const mobileApps = projects.filter((p) => p.type === "mobile");

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/web-apps", label: "Web Apps" },
  { href: "/mobile-apps", label: "Mobile Apps" },
  { href: "/contact", label: "Contact" },
] as const;

export const accentGradients: Record<PortfolioProject["accent"], string> = {
  violet: "from-violet-500 via-fuchsia-400 to-indigo-500",
  sky: "from-sky-400 via-cyan-400 to-blue-500",
  coral: "from-rose-400 via-orange-400 to-amber-400",
  lime: "from-lime-400 via-emerald-400 to-teal-400",
  orange: "from-orange-400 via-amber-400 to-rose-400",
};

export const services = [
  { title: "Web Development", description: "High-performance web apps with modern React and polished UI.", icon: "🌐" },
  { title: "Mobile Apps", description: "Cross-platform mobile experiences that feel native and fast.", icon: "📱" },
  { title: "UI/UX Design", description: "Clean, conversion-focused interfaces and design systems.", icon: "🎨" },
];

export const skillSpotlights: SkillSpotlight[] = [
  {
    title: "Frontend Engineering",
    icon: "⚡",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    problem: "Products need speed and clarity without sacrificing visual craft.",
    solution: "Component-driven UI with motion, accessibility, and performance budgets.",
    result: "Interfaces that feel premium and stay maintainable as features grow.",
  },
];

export const allTools = ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Expo", "Figma", "Framer Motion"];

export const testimonials = [
  { image: "/testimonials/t1.png", alt: "Fiverr five-star review — automation workflow" },
  { image: "/testimonials/t2.png", alt: "Fiverr five-star review — automation setup" },
  { image: "/testimonials/t3.png", alt: "Fiverr five-star review — automation system" },
  { image: "/testimonials/t4.png", alt: "Fiverr five-star review — mobile app" },
  { image: "/testimonials/t5.png", alt: "Fiverr five-star review — mobile app" },
  { image: "/testimonials/t6.png", alt: "Fiverr five-star review — app functionality" },
];

export const caseStudies = [
  {
    title: "Retail Lead Automation",
    problem: "Slow manual follow-up lost high-intent leads.",
    solution: "Automated capture, enrichment, and instant outreach flows.",
    result: "Response time dropped from hours to seconds; conversion improved.",
  },
];

export const toolStack = allTools;
