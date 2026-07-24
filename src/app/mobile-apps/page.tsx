import { PageHero } from "@/components/portfolio/PageHero";
import { ToolsCarousel } from "@/components/ToolsCarousel";
import { MobileAppProjectCard } from "@/components/portfolio/MobileAppProjectCard";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";
import { mobileApps } from "@/data/portfolioData";

export default function MobileAppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile apps"
        title="Products in your pocket"
        description="Phone mockups, colorful UI, and case studies for mobile-first experiences."
      />
      <ToolsCarousel />
      <section className="section-spacing px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8">
          {mobileApps.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <MobileAppProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
