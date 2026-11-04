import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "base",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "base" | "alt";
  className?: string;
}) {
  return (
    <section id={id} className={`${tone === "alt" ? "bg-bg-2" : "bg-bg"} py-16 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-link-ink">{eyebrow}</p>}
      <Tag className="mt-2 text-3xl font-bold sm:text-4xl">{title}</Tag>
      {intro && <p className="mt-4 text-lg leading-relaxed text-fg-2">{intro}</p>}
    </div>
  );
}
