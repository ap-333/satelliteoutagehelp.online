type Tone = "onLight" | "onDark";

const palette = {
  onLight: { bowl: "#071426", rim: "#5A6B80", arm: "#4A5A70", lnb: "#28B9E8", link: "#3685FF", panel: "#3685FF", sat: "#071426" },
  onDark: { bowl: "#F5F8FC", rim: "#C9D6E6", arm: "#A7B6C8", lnb: "#28B9E8", link: "#28B9E8", panel: "#3685FF", sat: "#F5F8FC" },
} as const;

/** Dish aimed along its axis at a satellite; the feed arm rises from the lower rim to the LNB. */
export function LogoMark({ tone = "onLight", height = 48, link = true }: { tone?: Tone; height?: number; link?: boolean }) {
  const c = palette[tone];
  return (
    <svg viewBox="-10.5 -35 56.5 51.5" height={height} width={(height * 56.5) / 51.5} aria-hidden="true" fill="none">
      <g transform="rotate(-30)">
        <path d="M0 -10Q-12 0 0 10Z" fill={c.bowl} />
        <ellipse rx="3" ry="10" fill={c.rim} stroke={c.bowl} strokeWidth="1" />
        <path d="M1 9L13 1.5" stroke={c.arm} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="14" r="2.8" fill={c.lnb} />
        {link && <path d="M21 0H33" stroke={c.link} strokeWidth="2" strokeDasharray="3 3.5" strokeLinecap="round" opacity=".9" />}
        <g transform="translate(41 0)">
          <rect x="-2.6" y="-15" width="5.2" height="9" rx="1.2" fill={c.panel} />
          <rect x="-2.6" y="6" width="5.2" height="9" rx="1.2" fill={c.panel} />
          <rect x="-3.5" y="-3.5" width="7" height="7" rx="1.8" fill={c.sat} />
        </g>
      </g>
      <path d="M-4 5L-2 14M-9 15H5" stroke={c.arm} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "onLight" }: { tone?: Tone }) {
  const light = tone === "onLight";
  return (
    <span className="flex items-center gap-3">
      <LogoMark tone={tone} height={48} />
      <span className="flex flex-col leading-none">
        <span className={`text-[10.5px] font-semibold uppercase tracking-[0.3em] ${light ? "text-link-ink" : "text-accent"}`}>
          Satellite
        </span>
        <span className={`mt-1.5 font-display text-[19px] font-bold tracking-tight ${light ? "text-ink" : "text-fg"}`}>
          Outage Help
        </span>
      </span>
    </span>
  );
}
