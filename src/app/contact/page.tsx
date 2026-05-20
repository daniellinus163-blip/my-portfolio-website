import { PageHero } from "@/components/portfolio/PageHero";
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
      <section className="section-spacing px-5 pb-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <ContactForm />
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-indigo-950">Email:</span> {profile.email}
            </p>
            <p className="glass-card rounded-2xl p-5 leading-relaxed">
              Fast reply, clear process, and high-quality delivery focused on real business value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
