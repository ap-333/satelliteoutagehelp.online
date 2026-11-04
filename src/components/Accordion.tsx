"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export type FaqItem = { q: string; a: string };

export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();
  return (
    <div className="divide-y divide-line rounded-xl border border-line bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                id={`${uid}-b${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-p${i}`}
                onClick={() => {
                  setOpen(isOpen ? null : i);
                  if (!isOpen) trackEvent("faq_open", { faq_item: i + 1 });
                }}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold hover:text-link-ink"
              >
                {item.q}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={`${uid}-p${i}`}
              role="region"
              aria-labelledby={`${uid}-b${i}`}
              hidden={!isOpen}
              className="px-5 pb-5 leading-relaxed text-fg-2"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
