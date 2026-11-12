import type { Metadata } from "next";

// Campaign landing page: kept out of search results so it never competes with or duplicates the main site.
export const dishMetadata: Metadata = {
  title: { absolute: "DISH TV Outage? Talk to a Live Person | Satellite Outage Help" },
  description:
    "DISH satellite TV not working? Call (800) 303-2829 and talk to a live human agent, never an AI. Independent service, not affiliated with DISH.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/dish/" },
};
