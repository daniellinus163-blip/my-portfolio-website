import { ProjectDetailPremium } from "@/components/portfolio/ProjectDetailPremium";
import { getProjectBySlug, projects } from "@/data/portfolioData";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="px-5 pb-24 md:px-8">
      <div className="mx-auto max-w-4xl pt-28 md:pt-32">
        <Link href="/projects" className="text-sm font-bold text-[#be123c] hover:text-[#9f1239]">
          ← Back to projects
        </Link>
        <div className="mt-8">
          <ProjectDetailPremium project={project} />
        </div>
      </div>
    </div>
  );
}
