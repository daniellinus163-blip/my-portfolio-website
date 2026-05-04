export type PortfolioProject = {
  category: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  image: string;
  liveDemoUrl: string;
  /** Repository or secondary link; omit or "" to hide “View code” in the modal. */
  codeUrl?: string;
  /**
   * When set, modal opens as: Live site → Problem → Solution → Result (no preview image).
   */
  caseStudyVisitUrl?: string;
};

export type SkillSpotlight = {
  title: string;
  icon: string;
  tools: string[];
  problem: string;
  solution: string;
  result: string;
};

export const services = [
  {
    title: "Web Development",
    description:
      "High-performance web apps built with modern React architecture, scalable APIs, and conversion-focused interfaces.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile experiences that feel native, connect to APIs smoothly, and stay fast under real usage.",
    icon: "📱",
  },
  {
    title: "AI & Automation",
    description:
      "Workflow automation and AI-powered systems that reduce repetitive work and unlock faster business operations.",
    icon: "🤖",
  },
  {
    title: "Chatbot Development",
    description:
      "Intelligent chatbot interfaces for lead capture, customer support, and internal team productivity.",
    icon: "💬",
  },
  {
    title: "Shopify & E-commerce",
    description:
      "High-converting Shopify storefronts with polished UX, solid performance, apps/integrations, and scalable merchandising workflows.",
    icon: "🛒",
  },
  {
    title: "3D Product Configurator",
    description:
      "Interactive 3D viewers and configurators that help customers visualize options, variants, and finishes before purchase.",
    icon: "🧊",
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, intuitive digital products focused on clarity, usability, and premium visual design quality.",
    icon: "🎨",
  },
];

export const skillSpotlights: SkillSpotlight[] = [
  {
    title: "Full-stack Web Applications",
    icon: "⚡",
    tools: ["React", "Next.js", "Node.js", "TypeScript", "REST APIs", "PostgreSQL", "Tailwind CSS"],
    problem:
      "Teams need fast, reliable web products spanning frontend UX and backend APIs without brittle shortcuts or endless rework.",
    solution:
      "Design and ship full-stack architectures with secure APIs, sensible data modeling, caching where it matters, and deployment-ready CI/CD habits.",
    result:
      "Predictable releases, fewer production incidents, and a codebase that scales as features and traffic grow.",
  },
  {
    title: "AI Development & Integration",
    icon: "🧠",
    tools: ["Python", "OpenAI API", "LangChain", "Vector DB", "Embeddings", "Prompt tooling"],
    problem:
      "Businesses want AI features that are accurate, safe, and maintainable—not brittle demos that break with small prompt changes.",
    solution:
      "Integrate AI through structured workflows: retrieval where needed, evaluation loops, monitoring patterns, and guardrails aligned to real users.",
    result:
      "AI experiences that feel dependable in production and improve operational throughput instead of adding operational chaos.",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    tools: ["React Native", "Expo", "Firebase", "Push notifications", "Stripe", "REST / GraphQL"],
    problem:
      "Mobile users expect native-feeling speed and offline resilience while stakeholders want one codebase and rapid iteration.",
    solution:
      "Build mobile apps with pragmatic architecture: offline-first patterns where needed, optimized navigation, analytics hooks, and secure auth flows.",
    result:
      "Higher retention through smoother UX and fewer crashes—plus faster iteration cycles across iOS and Android.",
  },
  {
    title: "Automation Systems",
    icon: "⚙️",
    tools: ["n8n", "Webhooks", "Zapier", "CRM APIs", "Queues", "Monitoring"],
    problem:
      "Manual workflows leak revenue—slow follow-ups, duplicated data entry, and broken handoffs between tools.",
    solution:
      "Automate end-to-end orchestrations with retries, observability, idempotent triggers, and clean mapping between systems.",
    result:
      "Teams reclaim hours weekly while reducing errors and improving speed-to-response across sales and operations.",
  },
  {
    title: "Chatbot & Voice Agents",
    icon: "💬",
    tools: ["OpenAI", "Vapi", "Twilio", "WebSockets", "Knowledge bases", "CRM integrations"],
    problem:
      "Support costs climb while users still want instant answers—without sacrificing tone, accuracy, or escalation paths.",
    solution:
      "Ship conversational assistants with structured intents, retrieval augmentation, CRM writes, and human handoff where automation stops.",
    result:
      "Higher containment with fewer bad answers—and clearer routing when a human needs to step in.",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    tools: ["Figma", "Design systems", "Prototyping", "Accessibility", "Usability testing"],
    problem:
      "Products fail when flows are confusing, inconsistent, or visually noisy—even if engineering execution is solid.",
    solution:
      "Translate goals into simple IA, cohesive components, interaction polish, and accessibility-conscious patterns.",
    result:
      "Higher conversion and lower support friction because users understand what to do next—everywhere in the product.",
  },
  {
    title: "Shopify Store & E-commerce Design",
    icon: "🛒",
    tools: ["Shopify Online Store 2.0", "Liquid", "Shopify Apps", "Hydrogen / Headless", "Klaviyo", "Payments"],
    problem:
      "Stores stall when merchandising is hard to manage, performance drops on mobile, or checkout leaks trust and conversions.",
    solution:
      "Build storefront themes and sections that sell—clean PDP storytelling, upsells done tastefully, speed-first assets, and integrations that scale ops.",
    result:
      "A storefront that feels premium, loads fast, and supports merchandising workflows without developer bottlenecks every week.",
  },
  {
    title: "3D Product Configurator",
    icon: "🧊",
    tools: ["Three.js", "React Three Fiber", "WebGL", "glTF / USDZ", "Lighting & materials", "Performance tuning"],
    problem:
      "Buyers hesitate when variants are abstract—especially for premium items where finishes and proportions drive decisions.",
    solution:
      "Create interactive configurators with realistic materials, constrained rules for valid combinations, exportable summaries, and AR-ready assets where applicable.",
    result:
      "Higher buyer confidence, fewer returns from mismatched expectations, and a differentiated premium buying experience.",
  },
];

/** Flattened unique tools across all skill spotlights — shown as quick badges */
export const allTools = Array.from(new Set(skillSpotlights.flatMap((s) => s.tools))).sort((a, b) =>
  a.localeCompare(b),
);

export const projects: PortfolioProject[] = [
  {
    category: "Live case study · 3D jersey & commerce",
    title: "Spized — 3D jersey configurator & custom sportswear",
    description:
      "Case study walkthrough of Spized's live experience—how a configurator-led sportswear brand presents trust, variants, and checkout.",
    problem:
      "Clubs and athletes abandon custom kit flows when previews feel abstract—variants, sponsors, and finishes are hard to trust before checkout.",
    solution:
      "Study and mirror enterprise patterns from leading configurators: sport-specific IA, transparent pricing cues, configurator entry points, and reassurance around production quality and timelines.",
    result:
      "A narrative that sells confidence in customization—clear paths from inspiration → design → order, aligned with how premium sportswear brands convert teams online.",
    technologies: ["3D / WebGL UX patterns", "E-commerce IA", "Configurator flows", "Performance-aware media"],
    image: "/projects/p4-shopify-3d.png",
    liveDemoUrl: "https://www.spized.com/en",
    caseStudyVisitUrl: "https://www.spized.com/en",
  },
  {
    category: "Live case study · Marketplace",
    title: "VIBECODE Market — multi-category fashion storefront",
    description:
      "Deployed marketplace focused on age-segmented shopping, deals, filters, and a premium catalog experience.",
    problem:
      "Generic storefront templates fail when you need segmented catalogues (kids through adults), strong merchandising, and fast scan-ability across many SKUs.",
    solution:
      "Ship a cohesive marketplace shell: category navigation, featured collections, filterable product grids, dark/light affordances, and conversion-oriented listing cards tuned for apparel.",
    result:
      "A browse-first experience that scales to large inventories while keeping hierarchy obvious—so shoppers find the right lane quickly and checkout feels intentional.",
    technologies: ["Next.js / React", "Tailwind CSS", "Responsive commerce UI", "Catalog & filters"],
    image: "/projects/p1-web-app.png",
    liveDemoUrl: "https://vibecode-market-web-s9jm.vercel.app/",
    caseStudyVisitUrl: "https://vibecode-market-web-s9jm.vercel.app/",
  },
  {
    category: "Product design · Figma",
    title: "AfroHealth-inspired wellness creative direction",
    description:
      "Campaign-ready composition blending lifestyle photography, expressive type, and a strong promotional CTA.",
    problem:
      "Wellness brands need landing visuals that feel aspirational without sacrificing clarity or scan-friendly structure.",
    solution:
      "Built a layered hero system with deliberate contrast, spacing rhythm, and narrative blocks optimized for ads and launches.",
    result:
      "A repeatable visual direction teams can extend across landing iterations without redesigning from scratch.",
    technologies: ["Figma", "Visual hierarchy", "Design tokens", "Marketing layouts"],
    image: "/projects/p2-figma-design.png",
    liveDemoUrl: "",
    codeUrl: "https://github.com/daniellinus163-blip/my-portfolio-website",
  },
];

export const caseStudies = [
  {
    title: "Retail Lead Automation",
    problem:
      "The client lost high-intent leads because response time was too slow and outreach was manual.",
    solution:
      "Built an AI chatbot and CRM automation flow that captured leads, enriched data, and triggered instant follow-up.",
    result:
      "Lead response time dropped from hours to seconds and qualified conversion improved by 42% in 8 weeks.",
  },
  {
    title: "Field Service Mobile Revamp",
    problem:
      "Technicians used outdated processes, causing delays, duplicate entries, and poor reporting quality.",
    solution:
      "Designed a mobile workflow app with offline support, smart forms, and sync-to-dashboard reporting.",
    result:
      "Job completion speed increased by 35% and reporting errors were reduced by over half.",
  },
];

export const testimonials = [
  {
    image: "/testimonials/t1.png",
    alt: "Fiverr five-star review from georgia_llam (Cyprus) — n8n automation workflow",
  },
  {
    image: "/testimonials/t2.png",
    alt: "Fiverr five-star review from katle_max (United States) — n8n automation setup",
  },
  {
    image: "/testimonials/t3.png",
    alt: "Fiverr five-star review from cyrusali (Poland) — n8n and Vapi automation system",
  },
  {
    image: "/testimonials/t4.png",
    alt: "Fiverr five-star review from slfat_922 (United States) — AI mobile app",
  },
  {
    image: "/testimonials/t5.png",
    alt: "Fiverr five-star review from jonasjulia (United Kingdom) — AI-powered mobile app",
  },
  {
    image: "/testimonials/t6.png",
    alt: "Fiverr five-star review from devid_hen (United States) — AI functionality in app",
  },
];

/** @deprecated Prefer `allTools` — kept for backwards imports */
export const toolStack = allTools;
