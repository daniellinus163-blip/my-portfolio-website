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

export const projects = [
  {
    category: "Web app",
    caption:
      "High-energy landing page layout with cinematic imagery, gradient headline typography, navigation, and paired CTAs — typical of premium marketing sites.",
    title: "Performance automotive landing experience",
    description:
      "A responsive hero-led landing focused on bold visuals, crisp hierarchy, and conversion-oriented CTAs for product launches.",
    technologies: ["Next.js / React", "Tailwind CSS", "Responsive layout", "Performance-focused assets"],
    image: "/projects/p1-web-app.png",
    actionLabel: "View Demo",
    actionLink: "#",
  },
  {
    category: "Figma design",
    caption:
      "Brand-forward promotional composition with layered photography, expressive typography, star accents, and a strong hero CTA — ideal for ecommerce storytelling.",
    title: "AfroHealth-inspired wellness creative direction",
    description:
      "UI exploration emphasizing contrast, lifestyle imagery, and a structured narrative block built for landing-page campaigns.",
    technologies: ["Figma", "Visual hierarchy", "Design systems tokens", "Marketing layouts"],
    image: "/projects/p2-figma-design.png",
    actionLabel: "View in Figma",
    actionLink: "#",
  },
  {
    category: "Web app",
    caption:
      "Premium services landing page with aviation hero imagery, benefit-focused sections, feature grid cards, and bottom conversion band.",
    title: "Aviation brand landing — AeroFly-style experience",
    description:
      "Editorial landing structure that sells trust and clarity: hero positioning, proof-forward sections, and consistent CTAs.",
    technologies: ["React / Next.js", "UI components", "Responsive grids", "Brand styling"],
    image: "/projects/p3-web-app.png",
    actionLabel: "View Demo",
    actionLink: "#",
  },
  {
    category: "Shopify ecommerce · 3D product configurator",
    caption:
      "Enterprise positioning page showcasing immersive 3D product storytelling — hero headline plus interactive customization cues.",
    title: "Luxury ecommerce visualization concept",
    description:
      "Experience-led commerce presentation highlighting configurators, variant selectors, and premium visual fidelity.",
    technologies: ["Shopify theme concepts", "Three.js / WebGL planning", "glTF pipeline", "Performance budgeting"],
    image: "/projects/p4-shopify-3d.png",
    actionLabel: "View Demo",
    actionLink: "#",
  },
  {
    category: "Shopify ecommerce · 3D product configurator",
    caption:
      "Sports merchandise storefront emphasizing guided customization flows — hero messaging paired with locker-room photography.",
    title: "Custom sportswear commerce — configurator-led UX",
    description:
      "Shopify-ready UX patterns for customizable SKUs: guided steps, preview storytelling, and conversion-focused merchandising.",
    technologies: ["Shopify Online Store 2.0", "Configurator UX", "Variant logic", "Checkout UX patterns"],
    image: "/projects/p5-shopify-3d.png",
    actionLabel: "View Demo",
    actionLink: "#",
  },
  {
    category: "Automation",
    caption:
      "SaaS automation dashboard — visual workflow canvas with branching logic, logs, analytics sidebar, and AI-assisted routing.",
    title: "AutomateAI workflow suite — dark UI concept",
    description:
      "Operator-focused automation UI for monitoring executions, inspecting payloads, and iterating workflows safely.",
    technologies: ["React dashboards", "Workflow graphs", "Real-time logs", "Analytics panels"],
    image: "/projects/p6-automation.png",
    actionLabel: "View Demo",
    actionLink: "#",
  },
  {
    category: "Automation",
    caption:
      "Light-theme companion dashboard highlighting workflow clarity — identical IA with softer surfaces for readability-heavy monitoring.",
    title: "AutomateAI workflow suite — light UI concept",
    description:
      "Same automation paradigm as the dark variant: workflow visualization plus operational telemetry for teams.",
    technologies: ["Design tokens", "Tables & graphs", "JSON inspection UX", "Accessibility-aware contrast"],
    image: "/projects/p7-automation.png",
    actionLabel: "View Demo",
    actionLink: "#",
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
