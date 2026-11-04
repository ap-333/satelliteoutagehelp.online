import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Section } from "./Container";
import { CallButton } from "./CallButton";
import type { Photo } from "@/config/photos";
import { PageHero } from "./PageHero";

export function ContentPage({
  title,
  intro,
  path,
  children,
  related,
  photo,
}: {
  title: string;
  intro: string;
  path: string;
  children: ReactNode;
  related?: { label: string; href: string }[];
  photo?: Photo;
}) {
  return (
    <>
      <PageHero title={title} intro={intro} trail={[{ label: title, href: path }]} photo={photo} />
      <Section>
        <div className="prose-site mx-auto max-w-3xl">{children}</div>
        {!["/contact", "/privacy-policy", "/terms", "/disclaimer"].includes(path) && (
          <aside aria-label="Call us" className="mx-auto mt-14 flex max-w-3xl flex-col items-start gap-4 rounded-xl border border-line bg-bg-2 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Skip the reading. Talk to a live human agent.</h2>
              <p className="mt-1 text-sm text-fg-2">A real person, not an AI, will help with your satellite TV problem. Independent service, not affiliated with any provider.</p>
            </div>
            <CallButton section="content-cta" />
          </aside>
        )}
        {related && (
          <aside aria-label="Related pages" className="mx-auto mt-14 max-w-3xl rounded-xl border border-line bg-card p-6">
            <h2 className="text-lg font-semibold">Related information</h2>
            <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {related.map((r) => (
                <li key={r.href}><Link className="font-semibold text-link-ink hover:underline" href={r.href}>{r.label}</Link></li>
              ))}
            </ul>
          </aside>
        )}
      </Section>
    </>
  );
}

export { Container };
