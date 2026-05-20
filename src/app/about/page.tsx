import { PageHero } from "@/components/portfolio/PageHero";
import { profile } from "@/data/portfolioData";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Frontend & mobile developer with six years in the field"
        description="I design and ship web and mobile products for marketplaces, startups, and teams that need clarity, speed, and code that lasts."
      />
      <section className="section-spacing px-5 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="glass-card space-y-5 rounded-2xl p-8 text-sm leading-relaxed text-slate-700">
            <p>
              I am a <strong className="text-indigo-950">full-stack web and mobile developer</strong> with{" "}
              <strong className="text-indigo-950">{profile.yearsExperience}+ years of professional experience</strong>.
              My work spans modern frontends, APIs, integrations, and shipped features end-to-end.
            </p>
            <p>
              A major part of my client base comes through <strong className="text-indigo-950">Fiverr</strong>, working with
              buyers across the <strong className="text-indigo-950">United States, Europe, the UK</strong>, and beyond—shipping
              storefronts, mobile workflows, and polished UI under real deadlines.
            </p>
            <p>
              Beyond marketplaces, I collaborate with <strong className="text-indigo-950">startups, agencies, and direct clients</strong>{" "}
              who need senior-level ownership: architecture, pragmatic UX, and clean handoffs.
            </p>
            <p>
              I have successfully completed <strong className="text-indigo-950">more than {profile.projectsDelivered} projects</strong> with
              a focus on measurable outcomes—fewer manual steps, faster releases, and interfaces people enjoy using.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {[
              { label: "Experience", value: `${profile.yearsExperience}+ years` },
              { label: "Projects delivered", value: profile.projectsDelivered },
              { label: "Marketplaces", value: profile.marketplaces },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-5 text-center md:text-left">
                <p className="text-[10px] font-bold uppercase tracking-wider text-violet-600">{stat.label}</p>
                <p className="mt-2 text-lg font-bold text-indigo-950">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
