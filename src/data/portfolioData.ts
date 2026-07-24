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
  role: "Full Stack Developer · AI Engineer · Creative Technologist",
  tagline:
    "I build modern web applications, AI-powered solutions, scalable backend systems, mobile applications, automation tools, and immersive digital experiences.",
  email: "yourname@email.com",
  yearsExperience: 6,
  projectsDelivered: "50+",
  marketplaces: "Fiverr & direct clients",
  portrait: "/profile/my-self.png",
};

/** Cinematic hero slideshow — dev / mobile / design scenes (Unsplash). */
export const heroScenes = [
  {
    id: "coding-laptop",
    label: "Web development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
  },
  {
    id: "developer-desk",
    label: "Modern workspace",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80",
  },
  {
    id: "programming-screen",
    label: "Programming in flow",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
  },
  {
    id: "analytics",
    label: "Product dashboards",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  },
  {
    id: "mobile-dev",
    label: "Mobile development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80",
  },
  {
    id: "ui-design",
    label: "UI / UX design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80",
  },
] as const;

export const heroToolSlides = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icons: ["⚛️", "▲", "📘", "🎨", "🎬"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    tools: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "Vercel"],
    icons: ["🟢", "🔌", "⚡", "🐘", "▲"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    tools: ["React Native", "Expo", "iOS", "Android", "Mobile UX"],
    icons: ["📱", "🚀", "🍎", "🤖", "✨"],
  },
] as const;

export const heroBackgroundVideo = "/hero-bg.mp4";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Fiverr", href: "https://www.fiverr.com", icon: "fiverr" },
  { label: "Email", href: "mailto:yourname@email.com", icon: "email" },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "iOS & Android", "Mobile UX"],
  },
  {
    title: "Backend & tools",
    skills: ["Node.js", "REST APIs", "Supabase", "Vercel", "Figma"],
  },
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
    image: "/projects/spized.png",
    gallery: ["/projects/spized.png"],
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
    image: "/projects/vibecode-market.png",
    gallery: ["/projects/vibecode-market.png"],
    liveDemoUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    caseStudyVisitUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    accent: "violet",
  },
  {
    slug: "figma-design-system",
    type: "web",
    category: "UI / UX",
    title: "Figma — product design system",
    description: "Creative health-tech UI exploration with bold typography, gradients, and component-ready layouts.",
    overview:
      "A Figma-led design pass for a modern product landing—hero storytelling, feature grids, and mobile-first component specs ready for engineering handoff.",
    problem:
      "Early-stage products need a credible visual direction before engineering commits to a full build.",
    solution:
      "Delivered responsive frames, type scale, color system, and reusable components aligned to conversion goals.",
    result:
      "Stakeholders could review a polished narrative and UI kit before a single line of production code.",
    features: [
      "Hero & feature section systems",
      "Mobile + desktop artboards",
      "Component variants & tokens",
      "Accessibility-minded contrast",
      "Developer handoff specs",
    ],
    technologies: ["Figma", "UI Design", "Design systems", "Prototyping"],
    image: "/projects/p2-figma-design.png",
    gallery: ["/projects/p2-figma-design.png"],
    liveDemoUrl: "",
    accent: "coral",
  },
  {
    slug: "drivedash",
    type: "mobile",
    category: "Transportation",
    title: "DriveDash",
    description: "Modern ride-hailing and transportation app with real-time tracking and booking features.",
    overview:
      "A comprehensive mobile application for ride-hailing services featuring real-time driver tracking, seamless booking, and secure payment integration.",
    problem:
      "Users need a reliable and intuitive mobile app to book rides and track their drivers in real-time.",
    solution:
      "Built a full-featured mobile app with React Native and Expo, incorporating real-time location tracking, secure payments, and an intuitive user interface.",
    result:
      "Users can easily book rides, track their drivers in real-time, and complete payments securely within the app.",
    features: [
      "Real-time driver tracking",
      "Secure in-app payments",
      "Ride booking and scheduling",
      "User-friendly interface",
      "Driver rating system",
    ],
    technologies: ["React Native", "Expo", "Real-time tracking", "Payment integration", "Mobile UX"],
    image: "/projects/drivedash.png",
    gallery: ["/projects/drivedash.png"],
    liveDemoUrl: "https://expo.dev/accounts/youngdaylan/projects/drivedash/builds/be856a69-b1e9-4496-8e77-b140b24043fd",
    caseStudyVisitUrl: "https://expo.dev/accounts/youngdaylan/projects/drivedash/builds/be856a69-b1e9-4496-8e77-b140b24043fd",
    accent: "lime",
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
