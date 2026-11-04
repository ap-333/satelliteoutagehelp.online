"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/config/navigation";
import { CallButton } from "./CallButton";
import { SupportBadge } from "./SupportBadge";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-paper-line bg-bg/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to main content
      </a>
      <div className="border-b border-paper-line bg-bg-2">
        <div className="mx-auto flex h-9 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <SupportBadge size="sm" />
          <p className="hidden text-xs font-medium text-ink-2 sm:block">Live human agents · No AI responders · Not affiliated with any satellite TV provider</p>
        </div>
      </div>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Satellite Outage Help home">
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-ink ${
                    isActive(item.href) ? "text-ink underline decoration-accent-2 decoration-2 underline-offset-[10px]" : "text-ink-2"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
        <CallButton section="header" variant="compact" label="Call Us" className="xl:!hidden" />
        <CallButton section="header" variant="compact" className="max-xl:!hidden" />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-paper-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-paper-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block min-h-12 border-b border-paper-line py-3 text-base font-medium ${
                    isActive(item.href) ? "text-link-ink" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
