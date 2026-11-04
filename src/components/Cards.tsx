"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function ArticleCard({
  art,
  title,
  text,
  href,
  cta = "Learn more",
  eventSection,
}: {
  art: ReactNode;
  title: string;
  text: string;
  href: string;
  cta?: string;
  eventSection?: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent/60">
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-line">{art}</div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-fg-2">{text}</p>
        <Link
          href={href}
          onClick={() => eventSection && trackEvent("equipment_article_click", { section: eventSection })}
          className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-link-ink"
        >
          {cta}
          <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          <span className="sr-only"> about {title}</span>
        </Link>
      </div>
    </article>
  );
}
