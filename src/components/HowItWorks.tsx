import { ArrowRight, ArrowDown } from "lucide-react";
import { StepArt } from "./Illustrations";

const steps = [
  { kind: "satellite", title: "Satellite transmission", text: "A satellite in geostationary orbit retransmits programming toward the ground." },
  { kind: "dish", title: "Dish antenna reception", text: "The dish collects the faint signal and focuses it toward the LNB." },
  { kind: "lnb", title: "LNB signal conversion", text: "The LNB amplifies the signal and converts it for travel through coaxial cable." },
  { kind: "receiver", title: "Receiver processing and TV output", text: "The receiver decodes the signal and sends picture and sound to your television." },
] as const;

export function HowItWorks() {
  return (
    <ol className="mt-12 grid gap-4 lg:grid-cols-4 lg:gap-0">
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex flex-col items-center lg:px-4">
          <div className="flex w-full flex-col items-center rounded-xl border border-line bg-card p-6 text-center">
            <StepArt kind={s.kind} />
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-link-ink">Step {i + 1}</p>
            <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-2">{s.text}</p>
          </div>
          {i < steps.length - 1 && (
            <>
              <ArrowDown className="mt-4 text-link-ink lg:hidden" aria-hidden="true" />
              <ArrowRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-link-ink lg:block" aria-hidden="true" />
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
