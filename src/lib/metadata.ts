import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: siteConfig.name, locale: siteConfig.locale, url: absoluteUrl(path), title: `${title} | ${siteConfig.name}`, description },
  };
}
