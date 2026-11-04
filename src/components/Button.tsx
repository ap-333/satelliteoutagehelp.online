import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-semibold transition-colors w-full sm:w-auto";
const variants = {
  primary: "bg-accent text-ink hover:bg-[#4cc5ee]",
  secondary: "border border-line bg-card/60 text-fg hover:border-link-ink hover:text-link-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

export const buttonClasses = (variant: keyof typeof variants = "primary") => `${base} ${variants[variant]}`;
