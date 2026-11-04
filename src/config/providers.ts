export type ExternalResource = {
  label: string;
  href: string;
  description: string;
};

export type Provider = {
  name: string;
  summary: string;
  resources: ExternalResource[];
  /** Set only once the URL has been confirmed in a normal browser. */
  verifiedOn?: string;
  note?: string;
};

/**
 * Official provider resources. Links point to the provider's own domain and are labelled as
 * external. Re-verify every URL before each release (see README "Link verification").
 */
export const providers: Provider[] = [
  {
    name: "DIRECTV",
    summary: "A U.S. satellite television provider. Account, service and support tools are operated by DIRECTV.",
    resources: [
      { label: "DIRECTV website", href: "https://www.directv.com/", description: "Provider home page with sign-in and account tools." },
    ],
    note:
      "directv.com blocks automated link checkers, so this link must be confirmed manually in a browser before launch.",
  },
  {
    name: "DISH",
    summary: "A U.S. satellite television provider. Account, service and support tools are operated by DISH.",
    verifiedOn: "November 3, 2026",
    resources: [
      { label: "DISH website", href: "https://www.dish.com/", description: "Provider home page with sign-in and account tools." },
      { label: "DISH contact and support", href: "https://www.dish.com/contact", description: "Provider-operated support and contact options." },
    ],
  },
];

export const publicResources: ExternalResource[] = [
  {
    label: "National Weather Service",
    href: "https://www.weather.gov/",
    description: "Official U.S. government forecasts and severe weather alerts for your area.",
  },
];
