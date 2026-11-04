import Link from "next/link";
import { absoluteUrl } from "@/config/site";

export function Breadcrumbs({ trail }: { trail: { label: string; href: string }[] }) {
  const items = [{ label: "Home", href: "/" }, ...trail];
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: absoluteUrl(it.href),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-fg-2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ol className="flex flex-wrap items-center gap-x-2">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-fg">{it.label}</span>
            ) : (
              <Link href={it.href} className="inline-flex min-h-11 items-center hover:text-link-ink">{it.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
