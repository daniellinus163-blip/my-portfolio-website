import Link from "next/link";
import { VDLogo } from "@/components/brand/VDLogo";
import { navLinks, profile, socialLinks } from "@/data/portfolioData";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(0,229,255,0.15)] bg-[rgba(15,23,42,0.5)] px-5 py-12 backdrop-blur-md md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <VDLogo size={40} />
            <div>
              <p className="text-lg font-bold text-[#F8FAFC]">
                VIBECODE DAN
              </p>
              <p className="mt-2 text-sm text-muted">{profile.role}</p>
            </div>
          </div>
          <div>
            <p className="section-label mb-3">Navigate</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[#00E5FF]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label mb-3">Connect</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.icon === "email" ? `mailto:${profile.email}` : link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="glass-card-light rounded-full px-4 py-2 text-xs font-semibold text-[#00E5FF] transition hover:bg-[rgba(0,229,255,0.1)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-muted text-xs">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
