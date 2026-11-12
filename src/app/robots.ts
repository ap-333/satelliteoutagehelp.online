import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_LANDING_ONLY === "1") return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "" }, sitemap: `${siteConfig.url}/sitemap.xml` };
}
