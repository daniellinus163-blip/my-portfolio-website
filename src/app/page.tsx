import { ContactForm } from "@/components/ContactForm";
import { HeroBackground } from "@/components/HeroBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillSpotlightCard } from "@/components/SkillSpotlightCard";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { allTools, caseStudies, projects, services, skillSpotlights } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="text-slate-800 dark:text-slate-100">
      <SiteHeader />
      <main>
        {/* HERO — HTML5 video `/videos/ai-coding-bg.mp4` + dark overlay; mobile uses still fallback */}
        <section
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-28 pt-32 text-center md:px-12"
          id="home"
        >
          <HeroBackground />
          <div className="animate-fade-up relative z-10 mx-auto max-w-4xl text-white">
            <h1 className="text-balance text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
              I build AI-powered web &amp; mobile solutions that automate businesses
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 md:text-xl">
              [INSERT YOUR TEXT HERE]
            </p>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:scale-[1.03]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/35 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/18"
              >
                Hire Me
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-spacing px-6 md:px-12" id="about">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="About"
              title="Full-stack engineer and product-focused builder"
              description="I craft robust digital systems that blend business goals, practical automation, polished UI/UX, and measurable outcomes."
            />
            <div className="glass-card grid gap-6 rounded-2xl p-8 md:grid-cols-2">
              <p className="text-slate-600 dark:text-slate-300">
                I specialize in full-stack delivery for startups, agencies, and service businesses — from AI
                features and automation to Shopify e-commerce and interactive 3D configurators — with clean
                architecture and a shipping mindset.
              </p>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-sky-700 dark:text-cyan-300">
                  Core Expertise
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-800 dark:text-slate-100">
                  {[
                    "Full-stack Web",
                    "AI Development",
                    "Mobile Apps",
                    "Automation",
                    "Chatbots",
                    "Shopify & E-commerce",
                    "3D Configurators",
                    "UI/UX",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-sky-200/60 bg-white/55 px-3 py-2 shadow-sm dark:border-cyan-400/25 dark:bg-slate-900/40"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white">Example tools:</span> React,
                  Node.js, Shopify, Three.js, n8n, OpenAI
                </p>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* SERVICES */}
        <section className="section-spacing px-6 md:px-12" id="services">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Services"
              title="Solutions designed for speed, scale, and results"
              description="Each service is tailored to real business outcomes, not just technical delivery."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* PROJECTS */}
        <section className="section-spacing px-6 md:px-12" id="projects">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured projects and product builds"
              description="Replace any placeholder screenshots and links with your real work."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* CASE STUDIES */}
        <section className="section-spacing px-6 md:px-12" id="case-studies">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Case Studies"
              title="From challenge to measurable impact"
              description="A quick look at how strategy, execution, and AI engineering drive outcomes."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((study) => (
                <article key={study.title} className="glass-card rounded-2xl p-7">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{study.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-sky-700 dark:text-cyan-200">Problem:</span>{" "}
                    {study.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-sky-700 dark:text-cyan-200">Solution:</span>{" "}
                    {study.solution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-sky-700 dark:text-cyan-200">Result:</span>{" "}
                    {study.result}
                  </p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-spacing px-6 md:px-12" id="testimonials">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by clients on Fiverr and beyond"
              description="Real five-star reviews from Fiverr clients — automation, AI, and mobile delivery."
            />
            <TestimonialsSlider />
          </SectionReveal>
        </section>

        {/* SKILL SPOTLIGHT — problem / solution / result per skill */}
        <section className="section-spacing px-6 md:px-12" id="skill-spotlight">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Skills"
              title="How I solve problems — by skill area"
              description="Each skill includes the tools I use and a clear Problem → Solution → Result story you can relate to client work."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {skillSpotlights.map((skill) => (
                <SkillSpotlightCard key={skill.title} {...skill} />
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* ALL TOOLS — merged from every skill */}
        <section className="section-spacing px-6 md:px-12" id="skills">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Tools"
              title="Technologies across the stack"
              description="Combined toolset inferred from every skill card above — swap, add, or remove in src/data/portfolioData.ts."
            />
            <div className="flex flex-wrap justify-center gap-3">
              {allTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-sky-300/55 bg-white/55 px-4 py-2 text-sm font-medium text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-50 dark:border-cyan-400/35 dark:bg-slate-900/45 dark:text-cyan-50 dark:hover:bg-slate-900"
                >
                  {tool}
                </span>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* CONTACT */}
        <section className="section-spacing px-6 pb-24 md:px-12" id="contact">
          <SectionReveal className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something powerful"
              description="Tell me what you want to ship — I’ll help architect and deliver it end to end."
            />
            <div className="glass-card grid gap-8 rounded-2xl p-8 md:grid-cols-2">
              <ContactForm />
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">Email:</span> yourname@email.com
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">WhatsApp:</span>{" "}
                  <a
                    href="#"
                    className="font-medium text-sky-700 underline decoration-sky-400/70 dark:text-cyan-300"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
                <p className="rounded-lg border border-sky-200/60 bg-white/60 p-4 leading-relaxed text-slate-600 dark:border-cyan-400/25 dark:bg-slate-900/40 dark:text-slate-300">
                  Fast reply, clear process, and high-quality delivery focused on real business value.
                </p>
              </div>
            </div>
          </SectionReveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-sky-200/60 px-6 py-8 dark:border-white/10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Full-stack Portfolio. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-sky-700 dark:hover:text-cyan-300">
              GitHub
            </a>
            <a href="#" className="hover:text-sky-700 dark:hover:text-cyan-300">
              Fiverr
            </a>
            <a href="#" className="hover:text-sky-700 dark:hover:text-cyan-300">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
