import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const mark = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='-10.5 -35 56.5 51.5'><g transform='rotate(-30)'><path d='M0 -10Q-12 0 0 10Z' fill='#F5F8FC'/><ellipse rx='3' ry='10' fill='#C9D6E6' stroke='#F5F8FC'/><path d='M1 9L13 1.5' stroke='#A7B6C8' stroke-width='2.2' stroke-linecap='round'/><circle cx='14' r='2.8' fill='#28B9E8'/><path d='M21 0H33' stroke='#28B9E8' stroke-width='2' stroke-dasharray='3 3.5' stroke-linecap='round'/><g transform='translate(41 0)'><rect x='-2.6' y='-15' width='5.2' height='9' rx='1.2' fill='#3685FF'/><rect x='-2.6' y='6' width='5.2' height='9' rx='1.2' fill='#3685FF'/><rect x='-3.5' y='-3.5' width='7' height='7' rx='1.8' fill='#F5F8FC'/></g></g><path d='M-4 5L-2 14M-9 15H5' stroke='#A7B6C8' stroke-width='2.6' stroke-linecap='round'/></svg>`)}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#071426" }}>
        <img src={mark} width={130} height={115} alt="" />
      </div>
    ),
    size,
  );
}
