import { ImageResponse } from "next/og";

export const alt = "Satellite Outage Help — talk to a live human agent about satellite TV problems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='-10.5 -35 56.5 51.5'><g transform='rotate(-30)'><path d='M0 -10Q-12 0 0 10Z' fill='#071426'/><ellipse rx='3' ry='10' fill='#5A6B80' stroke='#071426'/><path d='M1 9L13 1.5' stroke='#4A5A70' stroke-width='2.2' stroke-linecap='round'/><circle cx='14' r='2.8' fill='#28B9E8'/><path d='M21 0H33' stroke='#3685FF' stroke-width='2' stroke-dasharray='3 3.5' stroke-linecap='round'/><g transform='translate(41 0)'><rect x='-2.6' y='-15' width='5.2' height='9' rx='1.2' fill='#3685FF'/><rect x='-2.6' y='6' width='5.2' height='9' rx='1.2' fill='#3685FF'/><rect x='-3.5' y='-3.5' width='7' height='7' rx='1.8' fill='#071426'/></g></g><path d='M-4 5L-2 14M-9 15H5' stroke='#4A5A70' stroke-width='2.6' stroke-linecap='round'/></svg>`)}`;

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#F5F8FC", color: "#071426" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={mark} width={138} height={126} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, color: "#1F66D6", fontWeight: 700, letterSpacing: 8 }}>SATELLITE</div>
            <div style={{ fontSize: 56, fontWeight: 700 }}>Outage Help</div>
          </div>
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 56, lineHeight: 1.1 }}>Understanding your satellite TV service starts here.</div>
        <div style={{ fontSize: 28, color: "#4A5A70", marginTop: 32 }}>Live human agents · No AI · Independent of any provider</div>
      </div>
    ),
    size,
  );
}
