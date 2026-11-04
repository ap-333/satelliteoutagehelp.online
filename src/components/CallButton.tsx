"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const styles = {
  primary: "bg-accent text-ink hover:bg-[#4cc5ee]",
  secondary: "border border-line bg-card/60 text-fg hover:border-link-ink hover:text-link-ink",
  compact: "bg-accent text-ink hover:bg-[#4cc5ee] min-h-10 px-4 text-sm",
} as const;

export function CallButton({
  section,
  variant = "primary",
  label,
  className = "",
}: {
  section: string;
  variant?: keyof typeof styles;
  label?: string;
  className?: string;
}) {
  const { display, tel } = siteConfig.phone;
  return (
    <a
      href={`tel:${tel}`}
      onClick={() => trackEvent("call_click", { section })}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors ${
        variant === "compact" ? "" : "min-h-12 w-full px-6 text-base sm:w-auto"
      } ${styles[variant]} ${className}`}
    >
      <Phone size={variant === "compact" ? 16 : 18} aria-hidden />
      <span>{label ?? `Call ${display}`}</span>
    </a>
  );
}
