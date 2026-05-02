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
  codeUrl: string;
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
    category: "Web app",
    title: "Performance automotive landing experience",
    description:
      "Hero-led marketing landing with cinematic visuals, crisp hierarchy, and paired CTAs tuned for launches.",
    problem:
      "Product storytelling pages often feel generic—weak hierarchy and CTAs that don’t match the energy of the brand.",
    solution:
      "Structured a conversion-focused layout: bold hero, proof-forward sections, responsive typography, and performance-conscious imagery.",
    result:
      "A premium landing narrative that reads instantly and guides visitors toward the primary conversion paths.",
    technologies: ["Next.js / React", "Tailwind CSS", "Responsive layout", "Performance-focused assets"],
    image: "/projects/p1-web-app.png",
    liveDemoUrl: "",
    codeUrl: "https://github.com/daniellinus163-blip/my-portfolio-website",
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
  {
    category: "Web app",
    title: "Aviation brand landing — AeroFly-style experience",
    description:
      "Trust-forward services landing with aviation storytelling, structured proof sections, and consistent CTAs.",
    problem:
      "High-trust services pages collapse when messaging is cluttered—users bounce before understanding the offer.",
    solution:
      "Designed an editorial grid: authoritative hero, benefit-led sections, feature cards, and a closing conversion band.",
    result:
      "Clear positioning end-to-end with fewer distractions and stronger continuity from hero to contact.",
    technologies: ["React / Next.js", "UI components", "Responsive grids", "Brand styling"],
    image: "/projects/p3-web-app.png",
    liveDemoUrl: "",
    codeUrl: "https://github.com/daniellinus163-blip/my-portfolio-website",
  },
  {
    category: "Shopify · 3D commerce",
    title: "Luxury ecommerce visualization concept",
    description:
      "Immersive commerce presentation emphasizing configurators, variant storytelling, and premium visual fidelity.",
    problem:
      "Premium SKUs lose conversions when shoppers can’t visualize finishes and configurations confidently.",
    solution:
      "Mapped an experience-led PDP narrative with configurators, guided customization cues, and performance budgeting.",
    result:
      "A clearer path from browse → customize → purchase with visuals that reinforce quality.",
    technologies: ["Shopify theme concepts", "Three.js / WebGL planning", "glTF pipeline", "Performance budgeting"],
    image: "/projects/p4-shopify-3d.png",
    liveDemoUrl: "",
    codeUrl: "https://github.com/daniellinus163-blip/my-portfolio-website",
  },
  {
    category: "Shopify · Custom merchandise",
    title: "Custom sportswear commerce — configurator-led UX",
    description:
      "Guided customization UX for merchandise—steps, previews, and merchandising tuned for conversions.",
    problem:
      "Custom SKUs create confusion when variant rules and previews aren’t surfaced early in the journey.",
    solution:
      "Defined step-by-step customization flows with preview storytelling and Shopify-ready merchandising patterns.",
    result:
      "Customers understand valid combinations faster—reducing hesitation at checkout.",
    technologies: ["Shopify Online Store 2.0", "Configurator UX", "Variant logic", "Checkout UX patterns"],
    image: "/projects/p5-shopify-3d.png",
    liveDemoUrl: "",
    codeUrl: "https://github.com/daniellinus163-blip/my-portfolio-website",
  },
  {
    category: "Automation platform UI",
    title: "AutomateAI workflow suite — dark UI concept",
    description:
      "Operator dashboard for building workflows—canvas editing, branching logic, logs, and analytics side panels.",
    problem:
      "Automation tools become risky when operators can’t trace executions or iterate safely without breaking production flows.",
    solution:
      "Built an IA around visualization-first editing with structured logs, diagnostics panels, and safer iteration loops.",
    result:
      "A cockpit-style workspace that keeps workflows understandable while scaling complexity.",
    technologies: ["React dashboards", "Workflow graphs", "Real-time logs", "Analytics panels"],
    image: "/projects/p6-automation.png",
    liveDemoUrl: "",
    codeUrl: "https://github.com/daniellinus163-blip/my-portfolio-website",
  },
  {
    category: "Automation platform UI",
    title: "AutomateAI workflow suite — light UI concept",
    description:
      "Light-theme companion focused on readability-heavy monitoring—same IA with softer surfaces for daily ops.",
    problem:
      "Dark dashboards exhaust teams doing long monitoring sessions—yet switching themes shouldn’t fragment workflows.",
    solution:
      "Mirrored core workflows with adjusted surfaces, typography contrast, and table-forward readability patterns.",
    result:
      "Consistent operational muscle memory across themes without sacrificing clarity.",
    technologies: ["Design tokens", "Tables & graphs", "JSON inspection UX", "Accessibility-aware contrast"],
    image: "/projects/p7-automation.png",
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
