import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { ArticleCard } from "@/components/Cards";
import { CallButton } from "@/components/CallButton";
import { siteConfig } from "@/config/site";
import { Container, Section, SectionHeading } from "@/components/Container";
import { EquipmentArt } from "@/components/EquipmentArt";
import { HowItWorks } from "@/components/HowItWorks";
import { HeroArt } from "@/components/Illustrations";
import { Photo } from "@/components/Photo";
import { photos } from "@/config/photos";
import { Reveal } from "@/components/Reveal";
import { equipment } from "@/content/equipment";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: { absolute: "Satellite TV Down? Talk to a Live Agent | Satellite Outage Help" },
  description:
    "Satellite TV down? Call (800) 816-6490 and speak with a live human agent, never an AI, for help with outages, signal loss and equipment problems.",
  alternates: { canonical: "/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="relative isolate overflow-hidden border-b border-line">
        <HeroArt className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70 sm:opacity-100" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/80 to-transparent" aria-hidden="true" />
        <Container className="py-20 sm:py-28 lg:py-36">
          <p className="inline-flex items-center rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold text-link-ink">
            Live human agents · No AI responders
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Satellite TV Not Working? Talk to a Real Person.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-2">
            Call {siteConfig.phone.display} and speak with a live human agent who will listen to your problem and help you
            get your picture back. No chatbots. No AI responders. A real person, on the line.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CallButton section="hero" />
          </div>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-fg-2">
            Satellite Outage Help is an independent service and is not affiliated with any satellite TV provider.
          </p>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow="Why call" title="Skip the Guesswork. Talk to a Live Human Agent." intro="Outages, a lost signal or a screen that will not come back are frustrating. Explaining it to a person is faster than searching for answers." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["A real person answers", "Every call is handled by a live human agent. We do not use AI responders, chatbots or automated phone assistants to talk with you."],
            ["Help with your actual problem", "Tell us what you see on your screen. Your agent will help you work out whether it points to weather, equipment, cabling or something else, and what to do next."],
            ["Clear next steps", "You will leave the call knowing what to try, what is likely causing the problem and, if it is a provider-side issue, who to contact."],
          ].map(([t, d]) => (
            <Reveal key={t}>
              <div className="h-full rounded-xl border border-line bg-card p-6">
                <h3 className="text-xl font-semibold">{t}</h3>
                <p className="mt-3 leading-relaxed text-fg-2">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <CallButton section="why-call" label={`Call ${siteConfig.phone.display} Now`} />
          <p className="text-sm text-fg-2">Speak to a live person, not a recording or an AI.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Start here" title="Understand What Is Affecting Your Picture" intro="A few starting points. Or skip the reading and call a live agent." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <ArticleCard art={<div className="relative h-full w-full"><Photo photo={photos.stormClouds} sizes="(min-width: 768px) 33vw, 100vw" /></div>} title="Weather-Related Interruptions" text="Rain, storms and atmospheric conditions can weaken the microwave signal traveling between a satellite and your dish. Learn how and why." href="/outage-information#weather" />
          </Reveal>
          <Reveal delay={0.08}>
            <ArticleCard art={<div className="relative h-full w-full"><Photo photo={photos.antennaTower} sizes="(min-width: 768px) 33vw, 100vw" /></div>} title="Satellite Signal Information" text="An overview of how signal reception works and how outdoor equipment relates to the receiver connected to your television." href="/satellite-signal-information" />
          </Reveal>
          <Reveal delay={0.16}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line"><Photo photo={photos.aerial} sizes="(min-width: 768px) 33vw, 100vw" /></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">Talk to a Live Agent</h3>
                <p className="mt-3 flex-1 leading-relaxed text-fg-2">Not sure what is wrong? A real person can help you sort it out. No AI, no chatbot.</p>
                <div className="mt-5"><CallButton section="card" /></div>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section tone="alt" id="equipment">
        <SectionHeading eyebrow="Equipment" title="Know Your Satellite TV Equipment" intro="Four components make up a typical home satellite TV system." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((e, i) => (
            <Reveal key={e.key} delay={i * 0.06}>
              <ArticleCard art={<EquipmentArt k={e.key} />} title={e.name} text={e.short} href={`/satellite-equipment#${e.id}`} eventSection={e.key} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The basics" title="How Satellite TV Works" intro="From orbit to your living room, in four steps." />
        <HowItWorks />
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Conditions" title="How Weather Conditions Affect Satellite Television" intro="Weather can influence reception, but it is only one of several possible causes of an interruption." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {([
            [photos.rainWindow, "Heavy rainfall", "Raindrops absorb and scatter microwave energy, weakening the signal in an effect known as rain fade. It is usually temporary and eases as the rain does."],
            [photos.lightning, "Severe thunderstorms", "Dense storm clouds and intense rain cells can block signal more strongly than light rain. Wind may also move or damage outdoor equipment."],
            [photos.snowStorm, "Atmospheric interference", "Moisture, snow or ice on the dish and conditions in the atmosphere can reduce signal quality even when no rain is falling at your location."],
          ] as const).map(([photo, title, text]) => (
            <article key={title} className="overflow-hidden rounded-xl border border-line bg-card">
              <div className="relative aspect-[16/10] border-b border-line"><Photo photo={photo} sizes="(min-width: 768px) 33vw, 100vw" /></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-fg-2">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="faq">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 max-w-3xl"><Accordion items={faqItems} /></div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-line bg-card p-8 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">Stop Searching. Start Talking to a Real Person.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-fg-2">
            Call {siteConfig.phone.display} and a live human agent will help you with your satellite TV problem. No AI responders, ever.
          </p>
          <div className="mt-8 flex justify-center"><CallButton section="final-cta" label={`Call ${siteConfig.phone.display}`} /></div>
          <p className="mt-4 text-xs text-fg-2">Independent service. Not affiliated with any satellite TV provider.</p>
        </div>
      </Section>
    </>
  );
}
