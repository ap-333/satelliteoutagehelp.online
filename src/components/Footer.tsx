import Link from "next/link";
import { companyNav, legalNav, resourceNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { SupportBadge } from "./SupportBadge";
import { Logo } from "./Logo";

function Col({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-fg">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-fg-2 hover:text-link-ink">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="Satellite Outage Help home"><Logo tone="onLight" /></Link>
            <SupportBadge className="mt-4" />
            <p className="mt-4 text-sm leading-relaxed text-fg-2">
              Live human help for satellite TV problems. Call and talk to a real person, not an AI. Independent and not affiliated with any provider.
            </p>
          </div>
          <Col title="Information" links={resourceNav} />
          <Col title="Company" links={companyNav} />
          <Col title="Legal" links={legalNav} />
        </div>
        <p className="mt-10 text-sm text-fg-2">
          Phone: <a className="text-link-ink hover:underline" href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>
          {siteConfig.contactEmail && (
            <>
              {" · "}Email: <a className="text-link-ink hover:underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </>
          )}
        </p>
        <p className="mt-8 rounded-lg border border-line bg-card p-4 text-sm leading-relaxed text-fg">
          {siteConfig.disclaimer}
        </p>
        <p className="mt-6 text-xs text-fg-2">
          © {new Date().getFullYear()} {siteConfig.legalEntity}. All rights reserved. {siteConfig.name} is operated by {siteConfig.legalEntity}, {siteConfig.businessAddress}.
        </p>
      </Container>
    </footer>
  );
}
