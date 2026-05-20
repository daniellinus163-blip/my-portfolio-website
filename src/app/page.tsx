import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { HeroHome } from "@/components/portfolio/HeroHome";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";
import { WebAppProjectCard } from "@/components/portfolio/WebAppProjectCard";
import { mobileApps, webApps } from "@/data/portfolioData";
import Link from "next/link";

export default function Home() {
  const featuredWeb = webApps.slice(0, 2);

  return (
    <>
      <HeroHome />

      <section className="section-spacing px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Featured</p>
                <h2 className="mt-2 text-3xl font-extrabold text-indigo-950">Web app highlights</h2>
              </div>
              <Link href="/projects#web-apps" className="text-sm font-semibold text-violet-600">
                Full showcase →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredWeb.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <WebAppProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing overflow-hidden px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-xs font-bold uppercase tracking-wider text-violet-600">Client love</p>
            <h2 className="mt-2 text-center text-2xl font-extrabold text-indigo-950 md:text-3xl">Fiverr & direct client reviews</h2>
          </ScrollReveal>
          <div className="mt-10">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section className="section-spacing border-y border-violet-100/80 bg-white/50 px-5 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Web</p>
              <h3 className="mt-2 text-2xl font-bold text-indigo-950">{webApps.length} web experiences</h3>
              <p className="mt-3 text-sm text-slate-600">Marketplaces, configurators, and launch sites with live previews.</p>
              <Link href="/web-apps" className="mt-6 inline-block text-sm font-bold text-violet-600">
                Explore web apps →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-rose-500">Mobile</p>
              <h3 className="mt-2 text-2xl font-bold text-indigo-950">{mobileApps.length} mobile products</h3>
              <p className="mt-3 text-sm text-slate-600">Native-feeling flows built for thumbs and real-world usage.</p>
              <Link href="/mobile-apps" className="mt-6 inline-block text-sm font-bold text-violet-600">
                Explore mobile apps →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
