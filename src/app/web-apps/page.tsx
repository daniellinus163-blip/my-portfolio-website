import { PageHero } from "@/components/portfolio/PageHero";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";
import { WebAppProjectCard } from "@/components/portfolio/WebAppProjectCard";
import { webApps } from "@/data/portfolioData";

export default function WebAppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Web apps"
        title="Websites & dashboards"
        description="Premium browser previews, live links, and detailed case studies for every web build."
      />
      <section className="section-spacing px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {webApps.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.06}>
              <WebAppProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
