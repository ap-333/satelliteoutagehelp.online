import { ContentPage } from "@/components/ContentPage";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/config/photos";

export const metadata = pageMetadata(
  "About Satellite Outage Help",
  "Satellite Outage Help is an independent educational website about satellite television service, equipment and signal reception.",
  "/about",
);

export default function Page() {
  return (
    <ContentPage
      photo={photos.television}
      path="/about"
      title="About Satellite Outage Help"
      intro="Live human help for satellite TV problems, plus plain-language guides."
      related={[{ label: "Contact Us", href: "/contact" }, { label: "Disclaimer", href: "/disclaimer" }]}
    >
      <h2>What Satellite Outage Help is</h2>
      <p>Satellite Outage Help is an independent service that helps people with satellite TV problems. Call and you will speak with a live human agent, never an AI responder or chatbot. We also publish plain-language guides about satellite TV outages, equipment and signal reception.</p>
      <h2>Our independence</h2>
      <p>{siteConfig.disclaimer}</p>
      <h2>Our commitment</h2>
      <p>We aim to give clear, accurate and original consumer information, to avoid overstating what can be known about any individual interruption, and to correct errors when we learn of them.</p>
      <h2>What this website does</h2>
      <ul>
        <li>Connects you by phone with a live human agent who helps you work through your satellite TV problem.</li>
        <li>Explains how satellite TV equipment and signals work.</li>
        <li>Describes common causes of interruptions in general terms.</li>
      </ul>
      <h2>What this website does not do</h2>
      <ul>
        <li>It is not a satellite provider and does not sell satellite TV service.</li>
        <li>It does not provide on-site installation or repair.</li>
        <li>It does not report live outage status.</li>
        <li>It cannot access or change your provider account, billing or services. Those matters go through your provider.</li>
      </ul>
      <section id="image-credits" className="mt-12">
        <h2>Image credits</h2>
        <p>Photographs on this website are released under the CC0 public domain dedication and sourced from Wikimedia Commons. Credit is not required, but we list the photographers here with thanks.</p>
        <ul>
          {Object.values(photos).map((p) => (
            <li key={p.src}><a href={p.source} target="_blank" rel="noopener noreferrer">{p.alt}</a> — {p.author}</li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
