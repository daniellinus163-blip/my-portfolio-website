import { PageHero } from "@/components/portfolio/PageHero";
import { ToolsCarousel } from "@/components/ToolsCarousel";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/portfolioData";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something powerful"
        description="Tell me what you want to ship — I'll help architect and deliver it end to end."
      />
      <ToolsCarousel />
      <section className="section-spacing px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-sm text-muted">
            <div className="glass-card-light rounded-2xl p-6">
              <p className="section-label">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-lg font-bold text-[#01579B] hover:text-[#00BCD4] transition-colors">
                {profile.email}
              </a>
            </div>
            <p className="leading-relaxed">Fast reply, clear process, and high-quality delivery focused on real business value.</p>
          </div>
        </div>
      </section>
    </>
  );
}
