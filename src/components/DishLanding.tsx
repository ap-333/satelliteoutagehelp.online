import { Accordion } from "./Accordion";
import { CallButton } from "./CallButton";
import { Container, Section, SectionHeading } from "./Container";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/config/photos";
import { siteConfig } from "@/config/site";

const signs = [
  "A “searching for satellite signal” or similar message on screen",
  "A frozen, blocky or pixelated picture",
  "Some channels working while others are not",
  "No picture at all after rain, snow, wind or a storm",
];

const steps = [
  ["Call us", `Dial ${siteConfig.phone.display}. A live human agent answers. No chatbot, no AI responder.`],
  ["Tell us what you see", "Describe the message or picture problem on your screen and when it started."],
  ["Get clear next steps", "Your agent helps you work out the likely cause and what to try next, and tells you plainly if only DISH can resolve it."],
];

const faq = [
  { q: "Will I talk to a real person?", a: "Yes. Calls are answered by a live human agent. We do not use AI responders, chatbots or automated assistants to talk with callers." },
  { q: "Are you DISH?", a: "No. Satellite Outage Help is an independent service and is not affiliated with, endorsed by or operated by DISH Network L.L.C. We cannot access your DISH account or billing." },
  { q: "Can you fix a DISH-side outage?", a: "No. If the cause is on DISH’s side, such as a service outage or an account or billing matter, only DISH can resolve it. Your agent will tell you if that is what the symptoms point to." },
];

export function DishLanding() {
  const { display } = siteConfig.phone;
  return (
    <>
      <section className="border-b border-line bg-bg-2">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="inline-flex items-center rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold text-link-ink">
              Live human agents · No AI responders
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">
              DISH Satellite TV Not Working? Talk to a Real Person.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-2">
              Call {display} and speak with a live human agent who will help you work through your DISH TV outage.
              No chatbots. No AI responders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton section="dish-hero" label={`Call ${display}`} />
            </div>
            <p className="mt-4 max-w-xl text-xs leading-relaxed text-fg-2">
              Independent service. Not affiliated with, endorsed by or operated by DISH Network L.L.C. We cannot access your DISH account.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
            <Photo photo={photos.stormClouds} priority sizes="(min-width: 1024px) 480px, 100vw" />
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Sound familiar?" title="Common Signs of a Satellite TV Outage" intro="These can have several causes, from weather to equipment. A person can help you narrow it down." />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {signs.map((s) => (
            <li key={s} className="rounded-xl border border-line bg-card p-5 leading-relaxed">{s}</li>
          ))}
        </ul>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="How it works" title="Three Steps to Clear Answers" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line bg-card p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-link-ink">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{t}</h3>
                <p className="mt-3 leading-relaxed text-fg-2">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center"><CallButton section="dish-steps" label={`Call ${display} Now`} /></div>
      </Section>

      <Section>
        <SectionHeading eyebrow="While you wait" title="Safe Things to Check First" />
        <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-6 leading-relaxed text-fg-2">
          <li>Look outside: heavy rain, snow or a storm can temporarily weaken a satellite signal.</li>
          <li>Check that cables at the back of your receiver are firmly connected.</li>
          <li>Note any message or error code on screen so you can tell your agent.</li>
          <li>Do not climb onto a roof or touch outdoor equipment. Leave that to a qualified installer.</li>
        </ul>
      </Section>

      <Section tone="alt" id="faq">
        <SectionHeading eyebrow="FAQ" title="Before You Call" />
        <div className="mt-8 max-w-3xl"><Accordion items={faq} /></div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-line bg-card p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">DISH TV Down? Speak to a Live Person Now.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-fg-2">A real person, not an AI, will help you get to the bottom of it.</p>
          <div className="mt-8 flex justify-center"><CallButton section="dish-final" label={`Call ${display}`} /></div>
          <p className="mt-4 text-xs text-fg-2">Independent service. Not affiliated with DISH.</p>
        </div>
      </Section>
    </>
  );
}
