import { CallButton } from "./CallButton";
import { Logo } from "./Logo";
import { SupportBadge } from "./SupportBadge";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

const main = "https://satelliteoutagehelp.online";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-bg/95 backdrop-blur">
      <div className="border-b border-paper-line bg-bg-2">
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <SupportBadge size="sm" />
          <p className="hidden text-xs font-medium text-ink-2 sm:block">Live human agents · No AI responders · Not affiliated with DISH</p>
        </div>
      </div>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div aria-label="Satellite Outage Help"><Logo /></div>
        <CallButton section="landing-header" variant="compact" label={`Call ${siteConfig.phone.display}`} />
      </div>
    </header>
  );
}

export function LandingFooter() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <Container className="py-10">
        <p className="rounded-lg border border-line bg-card p-4 text-sm leading-relaxed text-fg">
          Satellite Outage Help is an independent service. It is not affiliated with, endorsed by, or operated by DISH
          Network L.L.C. or any other satellite television provider. DISH is a trademark of its respective owner and is
          used here only to identify the service you are asking about.
        </p>
        <p className="mt-5 text-sm text-fg-2">
          Phone: <a className="text-link-ink hover:underline" href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a>
        </p>
        <p className="mt-2 text-xs text-fg-2">
          © {new Date().getFullYear()} {siteConfig.legalEntity}, {siteConfig.businessAddress}. ·{" "}
          <a className="hover:underline" href={`${main}/privacy-policy/`}>Privacy Policy</a> ·{" "}
          <a className="hover:underline" href={`${main}/terms/`}>Terms</a> ·{" "}
          <a className="hover:underline" href={`${main}/disclaimer/`}>Disclaimer</a>
        </p>
      </Container>
    </footer>
  );
}
