import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { ToolsCarousel } from "@/components/ToolsCarousel";
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

      <ToolsCarousel />

      <section className="section-spacing px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label">Featured</p>
                <h2 className="mt-2 text-3xl font-bold text-[#01579B]">Web app highlights</h2>
              </div>
              <Link href="/projects#web-apps" className="text-sm font-semibold text-[#00BCD4] hover:text-[#03A9F4] transition-colors">
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

      <section className="section-spacing overflow-hidden border-y border-[rgba(0,229,255,0.15)] bg-[rgba(15,23,42,0.3)] px-5 md:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center section-label">Client love</p>
            <h2 className="mt-2 text-center text-2xl font-bold text-[#F8FAFC] md:text-3xl">
              Fiverr & direct client reviews
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section className="section-spacing px-5 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8">
              <p className="section-label">Web</p>
              <h3 className="mt-2 text-2xl font-bold text-[#01579B]">{webApps.length} web experiences</h3>
              <p className="mt-3 text-sm text-muted">Marketplaces, configurators, and live storefronts.</p>
              <Link href="/web-apps" className="mt-6 inline-block text-sm font-semibold text-[#00BCD4] hover:text-[#03A9F4] transition-colors">
                Explore web apps →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8">
              <p className="section-label">Mobile</p>
              <h3 className="mt-2 text-2xl font-bold text-[#01579B]">{mobileApps.length} mobile products</h3>
              <p className="mt-3 text-sm text-muted">Native-feeling flows built for real usage.</p>
              <Link href="/mobile-apps" className="mt-6 inline-block text-sm font-semibold text-[#00BCD4] hover:text-[#03A9F4] transition-colors">
                Explore mobile apps →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
