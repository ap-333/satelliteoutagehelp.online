"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";

const KEY = "soh-consent";
type Consent = "granted" | "denied" | null | "pending";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => void listeners.delete(cb);
};
const readConsent = (): Consent => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};

export function Analytics() {
  const { gaId, adsId } = siteConfig;
  const primaryId = gaId ?? adsId;
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribe, readConsent, () => "pending" as Consent);

  useEffect(() => {
    if (consent === "granted" && gaId && typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pathname });
    }
  }, [pathname, consent, gaId]);

  if (!primaryId) return null;

  const choose = (v: "granted" | "denied") => {
    try { localStorage.setItem(KEY, v); } catch {}
    listeners.forEach((l) => l());
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${gaId ? `gtag('config','${gaId}',{send_page_view:false,anonymize_ip:true});` : ""}${adsId ? `gtag('config','${adsId}');` : ""}`}
          </Script>
        </>
      )}
      {consent === null && (
        <div role="dialog" aria-label="Analytics consent" className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-card p-4 shadow-2xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-fg-2">
              We use Google Analytics to understand which information pages are useful. It is off unless you accept, and no
              personal details are sent in events. See our{" "}
              <a className="text-link-ink underline" href="/privacy-policy">Privacy Policy</a>.
            </p>
            <div className="flex shrink-0 gap-3">
              <button type="button" onClick={() => choose("denied")} className="min-h-11 flex-1 rounded-lg border border-line px-5 text-sm font-semibold hover:border-accent sm:flex-none">Decline</button>
              <button type="button" onClick={() => choose("granted")} className="min-h-11 flex-1 rounded-lg bg-accent px-5 text-sm font-semibold text-ink sm:flex-none">Accept</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
