import { PageHero } from "@/components/portfolio/PageHero";
import { ToolsCarousel } from "@/components/ToolsCarousel";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { profile } from "@/data/portfolioData";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Full-stack developer with six years in the field"
        description="I design and ship web and mobile products for marketplaces, startups, and teams that need clarity, speed, and code that lasts."
      />
      <ToolsCarousel />
      <AboutSection />
    </>
  );
}
