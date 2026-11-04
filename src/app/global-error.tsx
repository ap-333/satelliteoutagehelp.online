"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ background: "#F5F8FC", color: "#071426", fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "6rem 1rem" }}>
        <h1>Something went wrong</h1>
        <p style={{ color: "#4A5A70" }}>An unexpected error occurred.</p>
        <button type="button" onClick={reset} style={{ marginTop: 24, padding: "12px 24px", borderRadius: 8, border: 0, background: "#28B9E8", color: "#071426", fontWeight: 600 }}>
          Try again
        </button>
      </body>
    </html>
  );
}
