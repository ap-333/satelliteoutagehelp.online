import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { type: "website", siteName: siteConfig.name, locale: siteConfig.locale, url: absoluteUrl(path), title: `${title} | ${siteConfig.name}`, description, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteConfig.name }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}
