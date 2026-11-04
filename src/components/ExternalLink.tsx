"use client";

import { ExternalLink as Icon } from "lucide-react";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function ExternalLink({
  href,
  children,
  className = "",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  const domain = new URL(href).hostname;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-1.5 font-semibold text-link-ink underline-offset-4 hover:underline ${className}`}
      onClick={() => trackEvent("resource_link_click", { link_label: label, link_domain: domain })}
    >
      {children}
      <Icon size={15} aria-hidden="true" />
      <span className="sr-only">(opens external website in a new tab)</span>
    </a>
  );
}
