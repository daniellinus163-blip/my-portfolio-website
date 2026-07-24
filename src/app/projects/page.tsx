import { PageHero } from "@/components/portfolio/PageHero";
import { ToolsCarousel } from "@/components/ToolsCarousel";
import { ProjectsShowcase } from "@/components/portfolio/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Web & mobile work — built to impress"
        description="Two clear showcases: production websites in browser frames, and mobile apps in device mockups. Open live sites or dive into full case studies."
      />
      <ToolsCarousel />
      <section className="section-spacing px-5 md:px-8">
        <ProjectsShowcase />
      </section>
    </>
  );
}
