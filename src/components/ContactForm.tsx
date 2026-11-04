"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/contactSchema";
import { trackEvent } from "@/lib/analytics";

type Errors = Record<string, string>;

const field =
  "mt-2 block min-h-12 w-full rounded-lg border border-line bg-bg px-4 py-3 text-base text-fg placeholder:text-fg-2/60 focus:border-accent";

export function ContactForm() {
  const [rendered] = useState(() => Date.now());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverMsg, setServerMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      t: rendered,
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const i of parsed.error.issues) next[String(i.path[0])] ??= i.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("sent");
        trackEvent("contact_form_submit", { form_name: "contact", result: "success" });
        e.currentTarget.reset();
      } else {
        setErrors(json.fields ?? {});
        setServerMsg(json.error ?? "Something went wrong.");
        setStatus("error");
        trackEvent("contact_form_submit", { form_name: "contact", result: "error" });
      }
    } catch {
      setServerMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-accent/50 bg-card p-6">
        <h2 className="text-xl font-semibold">Message sent</h2>
        <p className="mt-2 text-fg-2">Thank you. We will review your message and reply by email where a reply is appropriate.</p>
      </div>
    );
  }

  const err = (id: string) =>
    errors[id] ? <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-[#b42318]">{errors[id]}</p> : null;
  const aria = (id: string) => ({ "aria-invalid": errors[id] ? true : undefined, "aria-describedby": errors[id] ? `${id}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border border-line bg-card p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="font-semibold">Name</label>
        <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="subject" className="font-semibold">Subject</label>
        <input id="subject" name="subject" className={field} {...aria("subject")} />
        {err("subject")}
      </div>
      <div>
        <label htmlFor="message" className="font-semibold">Message</label>
        <textarea id="message" name="message" rows={6} className={field} {...aria("message")} />
        {err("message")}
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-fg-2">
          <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 accent-[#28b9e8]" {...aria("consent")} />
          <span>I agree that Satellite Outage Help may use my details to respond to this message, as described in the <a href="/privacy-policy" className="text-link-ink underline">Privacy Policy</a>.</span>
        </label>
        {err("consent")}
      </div>
      {status === "error" && <p role="alert" className="text-sm text-[#b42318]">{serverMsg}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 font-semibold text-ink hover:bg-[#4cc5ee] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
