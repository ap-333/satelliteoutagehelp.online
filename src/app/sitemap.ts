import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

export const dynamic = "force-static";

const paths = ["/", "/outage-information", "/satellite-equipment", "/satellite-signal-information", "/provider-resources", "/about", "/contact", "/privacy-policy", "/terms", "/disclaimer"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);
  return paths.map((p) => ({ url: absoluteUrl(p), lastModified, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
