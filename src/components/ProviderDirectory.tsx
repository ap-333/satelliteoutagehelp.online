import { providers, publicResources } from "@/config/providers";
import { ExternalLink } from "./ExternalLink";

export function ProviderDirectory() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {providers.map((p) => (
        <section key={p.name} className="rounded-xl border border-line bg-card p-6" aria-labelledby={`prov-${p.name}`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-fg-2">Provider-operated resources</p>
          <h3 id={`prov-${p.name}`} className="mt-1 text-2xl font-bold">{p.name}</h3>
          <p className="mt-3 text-fg-2">{p.summary}</p>
          <ul className="mt-5 space-y-4">
            {p.resources.map((r) => (
              <li key={r.href}>
                <ExternalLink href={r.href} label={r.label}>{r.label}</ExternalLink>
                <p className="mt-1 text-sm text-fg-2">{r.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
      {publicResources.map((r) => (
        <section key={r.href} className="rounded-xl border border-line bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-fg-2">Public weather resource (not a provider)</p>
          <h3 className="mt-1 text-2xl font-bold">{r.label}</h3>
          <p className="mt-3 text-fg-2">{r.description}</p>
          <p className="mt-5"><ExternalLink href={r.href} label={r.label}>Visit weather.gov</ExternalLink></p>
        </section>
      ))}
    </div>
  );
}
