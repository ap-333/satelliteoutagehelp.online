import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { Photo } from "./Photo";
import type { Photo as PhotoData } from "@/config/photos";

export function PageHero({
  title,
  intro,
  trail,
  photo,
}: {
  title: string;
  intro: string;
  trail: { label: string; href: string }[];
  photo?: PhotoData;
}) {
  return (
    <div className="border-b border-line bg-bg-2">
      <Container className={`py-12 sm:py-16 ${photo ? "grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]" : ""}`}>
        <div>
          <Breadcrumbs trail={trail} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-2">{intro}</p>
        </div>
        {photo && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line">
            <Photo photo={photo} priority sizes="(min-width: 1024px) 480px, 100vw" />
          </div>
        )}
      </Container>
    </div>
  );
}
