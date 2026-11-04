import { Headset } from "lucide-react";

/** Descriptive badge only: it is not a certification, accreditation or provider authorization. */
export function SupportBadge({ size = "md", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const sm = size === "sm";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-link-ink/25 bg-card font-semibold text-ink ${
        sm ? "px-2.5 py-1 text-xs" : "px-3.5 py-2 text-sm"
      } ${className}`}
    >
      <span className={`flex items-center justify-center rounded-full bg-accent text-ink ${sm ? "h-5 w-5" : "h-7 w-7"}`}>
        <Headset size={sm ? 12 : 16} aria-hidden="true" />
      </span>
      <span className="leading-tight">
        Independent Support Provider
        {!sm && <span className="block text-xs font-medium text-fg-2">Not affiliated with any satellite TV provider</span>}
      </span>
    </span>
  );
}
