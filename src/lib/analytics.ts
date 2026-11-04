type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Only these keys are ever sent. No free text, names, emails or message contents. */
const ALLOWED = new Set(["link_label", "link_domain", "faq_item", "section", "form_name", "result"]);

export function trackEvent(name: string, params: Params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const safe: Params = {};
  for (const [k, v] of Object.entries(params)) if (ALLOWED.has(k)) safe[k] = v;
  window.gtag("event", name, safe);
}
