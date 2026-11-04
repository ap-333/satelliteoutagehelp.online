"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { CallButton } from "./CallButton";
import { siteConfig } from "@/config/site";

export default function CallPopup({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-labelledby="call-popup-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-md rounded-2xl border border-line bg-card p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:mx-0"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-md text-fg-2 hover:text-ink"
      >
        <X size={20} />
      </button>
      <h2 id="call-popup-title" className="pr-10 text-xl font-bold text-ink">
        Satellite TV not working?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-fg-2">
        Talk to a live human agent now. A real person will help you get to the bottom of it. No AI, no chatbots.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <CallButton section="popup" label={`Call ${siteConfig.phone.display}`} className="!w-full" />
        <button type="button" onClick={onClose} className="min-h-11 text-sm font-medium text-fg-2 hover:text-ink">
          No thanks
        </button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-fg-2">
        Satellite Outage Help is independent and not affiliated with any satellite TV provider.
      </p>
    </div>
  );
}
