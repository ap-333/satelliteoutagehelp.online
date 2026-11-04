"use client";

import { Container } from "@/components/Container";
import { buttonClasses } from "@/components/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <Container className="py-28 text-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="mx-auto mt-4 max-w-md text-fg-2">An unexpected error occurred. Please try again.</p>
      <div className="mt-8 flex justify-center">
        <button type="button" onClick={reset} className={buttonClasses()}>Try again</button>
      </div>
    </Container>
  );
}
