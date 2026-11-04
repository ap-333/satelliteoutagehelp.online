import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-link-ink">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-fg-2">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8 flex justify-center"><ButtonLink href="/">Back to home</ButtonLink></div>
    </Container>
  );
}
