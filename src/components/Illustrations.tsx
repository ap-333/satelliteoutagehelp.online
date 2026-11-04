import type { ReactNode } from "react";

const A = "#28B9E8";
const B = "#3685FF";
const LINE = "#C3D1E2";
const FG = "#071426";
const MUTED = "#4A5A70";

function Frame({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label={label}
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <defs>
        <linearGradient id="bgfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EAF0F8" />
          <stop offset="1" stopColor="#DCE7F4" />
        </linearGradient>
      </defs>
      <rect x="-600" y="-300" width="1600" height="860" fill="url(#bgfade)" />
      {children}
    </svg>
  );
}

/** Dish in local coordinates (axis along +x). Feed arm rises from the lower rim to the LNB on the axis. */
function DishShape({ lnb = A }: { lnb?: string }) {
  return (
    <g>
      <path d="M0 -10Q-12 0 0 10Z" fill={FG} />
      <ellipse rx="3" ry="10" fill="#5A6B80" stroke={FG} strokeWidth="1" />
      <path d="M1 9L13 1.5" stroke={MUTED} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="14" r="2.8" fill={lnb} />
    </g>
  );
}

/** Small satellite in local coordinates; wings sit perpendicular to the link axis (+x). */
function Satellite() {
  return (
    <g>
      <rect x="-2.6" y="-15" width="5.2" height="9" rx="1.2" fill={B} />
      <rect x="-2.6" y="6" width="5.2" height="9" rx="1.2" fill={B} />
      <rect x="-3.5" y="-3.5" width="7" height="7" rx="1.8" fill={FG} />
    </g>
  );
}

export function HeroArt({ className = "" }: { className?: string }) {
  const stars = [[30, 30], [90, 80], [170, 20], [260, 60], [340, 28], [370, 110], [60, 150], [220, 120], [310, 170], [140, 200]];
  return (
    <svg viewBox="0 0 800 520" role="img" aria-label="Illustration of a rooftop satellite dish aimed at a satellite in orbit" className={className} preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <radialGradient id="glow" cx=".7" cy=".35" r=".7">
          <stop offset="0" stopColor="#28B9E8" stopOpacity=".22" />
          <stop offset="1" stopColor="#F5F8FC" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="520" fill="#F5F8FC" />
      <rect width="800" height="520" fill="url(#glow)" />
      {stars.map(([x, y], i) => <circle key={i} cx={x * 2} cy={y * 1.6} r={i % 3 === 0 ? 1.8 : 1.2} fill={B} opacity=".35" />)}
      <path d="M430 480 L560 432 L690 480 V520 H430Z" fill="#E3EBF5" stroke="#B7C6DA" />
      <rect x="440" y="480" width="240" height="40" fill="#D3DCE8" />
      <path d="M543 384 L546 436" stroke={MUTED} strokeWidth="6" strokeLinecap="round" />
      <path d="M522 440 H572" stroke={MUTED} strokeWidth="6" strokeLinecap="round" />
      <g transform="translate(560 362) rotate(-50) scale(3.4)">
        <DishShape />
        <path d="M21 0H62" stroke={A} strokeWidth="1.4" strokeDasharray="3 3.5" strokeLinecap="round" />
        <g transform="translate(70 0) scale(1.4)"><Satellite /></g>
      </g>
      <g fill="none" stroke={A} strokeWidth="2">
        <circle className="signal-ring" cx="713" cy="180" r="50" />
        <circle className="signal-ring" cx="713" cy="180" r="76" />
        <circle className="signal-ring" cx="713" cy="180" r="104" />
      </g>
    </svg>
  );
}

export function DishArt() {
  return (
    <Frame label="Illustration of a satellite dish antenna aimed at a satellite">
      <path d="M152 189V232M134 234H170" stroke={MUTED} strokeWidth="6" strokeLinecap="round" />
      <g transform="translate(170 170) rotate(-40) scale(3.2)">
        <DishShape />
        <path d="M21 0H40" stroke={A} strokeWidth="1.1" strokeDasharray="3 3.5" strokeLinecap="round" />
        <g transform="translate(50 0) scale(1.1)"><Satellite /></g>
      </g>
    </Frame>
  );
}

export function LnbArt() {
  return (
    <Frame label="Illustration of an LNB at the end of the feed arm of a dish">
      <g transform="translate(128 168) rotate(-30) scale(6)">
        <path d="M0 -10Q-12 0 0 10Z" fill={FG} />
        <ellipse rx="3" ry="10" fill="#5A6B80" stroke={FG} strokeWidth="1" />
        <path d="M1 9L11 1.8" stroke={MUTED} strokeWidth="2.2" strokeLinecap="round" />
        <rect x="10" y="-3.6" width="8" height="7.2" rx="2" fill="#E3EBF5" stroke={A} strokeWidth=".8" />
        <path d="M12.5 3.6V7M15.5 3.6V7" stroke={A} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M21 0H32" stroke={A} strokeWidth=".8" strokeDasharray="2 2.5" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

export function ReceiverArt() {
  return (
    <Frame label="Illustration of a satellite receiver and DVR connected to a television">
      <rect x="110" y="40" width="180" height="110" rx="8" fill="#FFFFFF" stroke="#8FA3BC" strokeWidth="3" />
      <rect x="120" y="50" width="160" height="90" rx="4" fill="#071426" />
      <path d="M135 120 L165 90 L190 108 L225 70 L262 118" stroke={A} strokeWidth="3" strokeLinejoin="round" />
      <rect x="185" y="150" width="30" height="14" fill="#8FA3BC" />
      <rect x="150" y="164" width="100" height="6" rx="3" fill="#8FA3BC" />
      <rect x="90" y="190" width="220" height="38" rx="6" fill="#FFFFFF" stroke={A} strokeWidth="1.5" />
      <circle cx="115" cy="209" r="4" fill={A} />
      <rect x="140" y="204" width="100" height="10" rx="2" fill="#DCE7F4" />
      <circle cx="275" cy="209" r="3" fill={B} />
    </Frame>
  );
}

export function CoaxArt() {
  return (
    <Frame label="Illustration of a coaxial cable with an F-type connector">
      <path d="M20 180 Q120 120 200 150" stroke="#4A5A70" strokeWidth="14" strokeLinecap="round" />
      <path d="M20 180 Q120 120 200 150" stroke="#A7B6C8" strokeWidth="3" strokeLinecap="round" opacity=".6" />
      <rect x="196" y="132" width="54" height="40" rx="5" fill="#A7B6C8" />
      {[206, 216, 226, 236].map((x) => <path key={x} d={`M${x} 134V170`} stroke="#4A5A70" strokeWidth="2" />)}
      <rect x="250" y="144" width="40" height="16" rx="2" fill="#C9D6E6" />
      <rect x="290" y="148" width="50" height="8" fill="#C9A66B" />
      <circle cx="350" cy="152" r="14" stroke={A} strokeWidth="3" />
      <circle cx="350" cy="152" r="4" fill={A} />
    </Frame>
  );
}

export function WeatherArt({ kind }: { kind: "rain" | "storm" | "atmosphere" }) {
  if (kind === "atmosphere") {
    return (
      <Frame label="Illustration of signal waves passing through layers of the atmosphere">
        {[70, 120, 170].map((y, i) => <path key={y} d={`M0 ${y} Q100 ${y - 24} 200 ${y} T400 ${y}`} stroke={i === 1 ? B : "#A7B6C8"} strokeWidth="2" opacity={0.9 - i * 0.2} />)}
        <path d="M300 20 L200 220" stroke={A} strokeWidth="3" strokeDasharray="7 7" />
        <circle cx="300" cy="20" r="8" fill={A} />
        <circle cx="200" cy="224" r="6" fill={FG} />
      </Frame>
    );
  }
  return (
    <Frame label={kind === "rain" ? "Illustration of a rain cloud above a satellite signal path" : "Illustration of a thunderstorm cloud with lightning"}>
      <g fill="#FFFFFF" stroke="#8FA3BC" strokeWidth="1.5">
        <ellipse cx="170" cy="90" rx="70" ry="38" />
        <ellipse cx="230" cy="80" rx="60" ry="36" />
        <ellipse cx="200" cy="105" rx="90" ry="30" />
      </g>
      {kind === "rain" ? (
        [140, 170, 200, 230, 260].map((x, i) => <path key={x} d={`M${x} ${140 + (i % 2) * 14} l-8 26`} stroke={A} strokeWidth="3" strokeLinecap="round" />)
      ) : (
        <path d="M210 130 L185 175 H212 L192 220 L245 160 H215 L232 130Z" fill="#F4C95D" />
      )}
      <path d="M340 20 L300 140" stroke={A} strokeWidth="2" strokeDasharray="6 7" opacity=".7" />
    </Frame>
  );
}

export function InfoArt({ kind }: { kind: "weather" | "signal" | "status" }) {
  if (kind === "weather") return <WeatherArt kind="rain" />;
  if (kind === "signal") {
    return (
      <Frame label="Illustration of a signal strength meter">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={110 + i * 36} y={170 - i * 22} width="24" height={30 + i * 22} rx="4" fill={i < 4 ? A : LINE} opacity={i < 4 ? 0.9 : 1} />
        ))}
        <path d="M110 60 Q200 20 290 60" stroke={B} strokeWidth="3" />
        <path d="M140 80 Q200 52 260 80" stroke={A} strokeWidth="3" />
      </Frame>
    );
  }
  return (
    <Frame label="Illustration of a browser window showing a service status page">
      <rect x="80" y="40" width="240" height="170" rx="10" fill="#FFFFFF" stroke="#B7C6DA" strokeWidth="2" />
      <path d="M80 70H320" stroke={LINE} strokeWidth="2" />
      {[96, 110, 124].map((x) => <circle key={x} cx={x} cy="55" r="4" fill={LINE} />)}
      {[95, 130, 165].map((y) => (
        <g key={y}>
          <circle cx="108" cy={y} r="7" fill={A} />
          <rect x="128" y={y - 5} width="150" height="10" rx="5" fill="#DCE7F4" />
        </g>
      ))}
    </Frame>
  );
}

export function StepArt({ kind }: { kind: "satellite" | "dish" | "lnb" | "receiver" }) {
  return (
    <svg viewBox="0 0 80 80" width="64" height="64" role="img" aria-hidden="true" fill="none">
      <circle cx="40" cy="40" r="38" fill="#FFFFFF" stroke="#B7C6DA" />
      {kind === "satellite" && (
        <g>
          <rect x="31" y="34" width="18" height="12" rx="2" fill={FG} />
          <rect x="12" y="35" width="16" height="10" fill={B} />
          <rect x="52" y="35" width="16" height="10" fill={B} />
          <path d="M40 46 V54" stroke={A} strokeWidth="2" />
        </g>
      )}
      {kind === "dish" && (
        <g transform="translate(30 46) rotate(-35) scale(1.5)">
          <path d="M0 -10Q-12 0 0 10Z" fill={FG} />
          <ellipse rx="3" ry="10" fill="#5A6B80" stroke={FG} strokeWidth="1" />
          <path d="M1 9L13 1.5" stroke={MUTED} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="14" r="2.8" fill={A} />
        </g>
      )}
      {kind === "lnb" && (
        <g>
          <rect x="26" y="26" width="28" height="20" rx="5" fill="#E3EBF5" stroke={A} strokeWidth="2" />
          <circle cx="34" cy="36" r="3" fill={A} />
          <circle cx="46" cy="36" r="3" fill={B} />
          <path d="M40 46 V58" stroke={MUTED} strokeWidth="3" />
        </g>
      )}
      {kind === "receiver" && (
        <g>
          <rect x="16" y="22" width="48" height="30" rx="3" fill="#071426" stroke={FG} strokeWidth="2" />
          <path d="M24 44 L34 34 L42 40 L54 28" stroke={A} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="28" y="58" width="24" height="5" rx="2" fill="#8FA3BC" />
        </g>
      )}
    </svg>
  );
}
