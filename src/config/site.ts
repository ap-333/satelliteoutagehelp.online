const env = (v: string | undefined) => (v && v.trim() ? v.trim() : undefined);

export const siteConfig = {
  name: "Satellite Outage Help",
  domain: "satelliteoutagehelp.online",
  url: env(process.env.NEXT_PUBLIC_SITE_URL) ?? "https://satelliteoutagehelp.online",
  locale: "en_US",
  description:
    "Satellite TV not working? Call (800) 816-6490 and talk to a live human agent, not an AI, for help with satellite TV outages, signal and equipment problems.",
  disclaimer:
    "Satellite Outage Help is an independent informational website. It is not affiliated with, endorsed by, or operated by any satellite television provider. Provider names, where referenced, are used solely for identification purposes.",
  // Business details are supplied via environment variables. Unset values stay undefined and are
  // shown on the site as clearly marked "not yet supplied" notices rather than invented details.
  legalEntity: env(process.env.NEXT_PUBLIC_LEGAL_ENTITY) ?? "GRIDPROGRAM LLC",
  businessAddress: env(process.env.NEXT_PUBLIC_BUSINESS_ADDRESS) ?? "107 Shorewood Ln, Huntsville, AL 35811-4400",
  contactEmail: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  // Site contact number (supplied by the site owner). Live human agents answer; independent of any satellite provider.
  phone: { display: "(800) 816-6490", tel: "+18008166490" },
  gaId: env(process.env.NEXT_PUBLIC_GA_ID),
  // Google Ads tag ID (public identifier). Loaded only after the visitor accepts the consent banner.
  adsId: env(process.env.NEXT_PUBLIC_ADS_ID) ?? "AW-18527177616",
  lastUpdated: "November 5, 2026",
} as const;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
