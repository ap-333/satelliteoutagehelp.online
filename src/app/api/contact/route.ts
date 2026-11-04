import { NextResponse } from "next/server";
import { isContactDeliveryConfigured, siteConfig } from "@/config/site";
import { contactSchema } from "@/lib/contactSchema";

export const runtime = "nodejs";

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  if (!isContactDeliveryConfigured()) {
    return NextResponse.json({ ok: false, error: "The contact form is not currently available." }, { status: 503 });
  }

  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(siteConfig.url).host && new URL(origin).hostname !== "localhost") {
    return NextResponse.json({ ok: false, error: "Invalid request origin." }, { status: 403 });
  }
  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Unsupported request." }, { status: 415 });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) fields[String(issue.path[0] ?? "form")] ??= issue.message;
    return NextResponse.json({ ok: false, error: "Please correct the highlighted fields.", fields }, { status: 400 });
  }

  const { name, email, subject, message, website, t } = parsed.data;
  // Bots: filled honeypot or submitted implausibly fast. Respond as success without sending.
  if (website || (typeof t === "number" && Date.now() - t < 3000)) {
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `[Satellite Outage Help] ${subject}`.slice(0, 200),
      html: `<p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    return NextResponse.json({ ok: false, error: "We could not send your message. Please try again later." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
