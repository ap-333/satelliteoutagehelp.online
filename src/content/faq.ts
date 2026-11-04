import type { FaqItem } from "@/components/Accordion";

export const faqItems: FaqItem[] = [
  {
    q: "What causes satellite TV service interruptions?",
    a: "Interruptions have several possible causes: weather between the dish and the satellite, a dish that has shifted or has an obstructed view, faulty cables or connectors, receiver issues, or a service problem on the provider's side. Weather is only one possibility, so a loss of picture does not always mean a storm is responsible.",
  },
  {
    q: "Can heavy rain affect satellite reception?",
    a: "Yes. Heavy rainfall can absorb and scatter the microwave signals that travel between a satellite and a dish, which is often called rain fade. It tends to be temporary and usually clears as the rain eases.",
  },
  {
    q: "What is an LNB?",
    a: "LNB stands for low-noise block downconverter. It sits at the end of the arm in front of the dish, collects the signal the dish reflects, amplifies it and converts it to a lower frequency that can travel through coaxial cable to the receiver.",
  },
  {
    q: "What is a satellite dish antenna?",
    a: "A satellite dish antenna is the curved reflector mounted outdoors. Its shape collects weak signals from a satellite in orbit and focuses them onto the LNB. It must have a clear view of the sky in the direction of the satellite.",
  },
  {
    q: "What does a satellite receiver do?",
    a: "The receiver is the indoor device that takes the signal from the cable, tunes to the channel you select, decodes it and sends the picture and sound to your television. Some receivers also include a DVR for recording programs.",
  },
  {
    q: "How does satellite television work?",
    a: "Programming is sent up to a satellite in geostationary orbit, which retransmits it toward the ground. A home dish collects the signal, the LNB converts it, a coaxial cable carries it indoors, and the receiver processes it for display on your television.",
  },
  {
    q: "Will I speak to a real person or an AI?",
    a: "A real person. When you call (800) 816-6490 your call is handled by a live human agent. We do not use AI responders, chatbots or automated assistants to talk with callers.",
  },
  {
    q: "What can a live agent help me with?",
    a: "Tell the agent what is happening, such as a lost signal, a frozen or pixelated picture or an error message. They will help you work out the likely cause and the next steps to try. Some problems, such as provider-side outages and account or billing matters, can only be resolved by your provider, and the agent will tell you if that applies.",
  },
  {
    q: "Are you my satellite provider?",
    a: "No. Satellite Outage Help is an independent service and is not affiliated with, endorsed by or operated by any satellite TV provider.",
  },
  {
    q: "What is the difference between a satellite dish and a receiver?",
    a: "The dish is outdoor equipment that collects the satellite signal. The receiver is indoor equipment that converts that signal into something your television can show. They are connected by coaxial cable and both are needed for satellite TV.",
  },
];
