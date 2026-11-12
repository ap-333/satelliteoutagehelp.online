"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { landingOnly } from "@/config/landing";

/** Shows the minimal landing-page header/footer instead of the full site chrome on landing pages. */
export function ChromeSwitch({ site, landing }: { site: ReactNode; landing: ReactNode }) {
  const pathname = usePathname();
  const isLanding = landingOnly || pathname.startsWith("/dish");
  return <>{isLanding ? landing : site}</>;
}
