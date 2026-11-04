import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/config/photos";

export const metadata = pageMetadata(
  "Satellite TV Outage Information",
  "Learn what satellite TV outages are, common reasons for service interruptions, weather-related reception issues and how to find official provider updates.",
  "/outage-information",
);

export default function Page() {
  return (
    <ContentPage
      photo={photos.lightning}
      path="/outage-information"
      title="Satellite TV Outage Information"
      intro="An educational overview of why satellite television service can be interrupted and where official information is published."
      related={[
        { label: "Satellite Signal Information", href: "/satellite-signal-information" },
        { label: "Satellite Equipment", href: "/satellite-equipment" },
        { label: "Provider Resources", href: "/provider-resources" },
      ]}
    >
      <h2>What is a satellite TV outage?</h2>
      <p>A satellite TV outage is any period when the picture or sound on a television is missing, frozen, pixelated or replaced by an on-screen message. Some outages affect a single household, some affect a region, and some affect a provider's whole service.</p>
      <h2>Common reasons for service interruptions</h2>
      <p>Satellite television depends on a chain of components, and a problem at any point in that chain can cause an interruption.</p>
      <ul>
        <li><strong>Weather:</strong> heavy rain, snow or ice affecting the signal path or the dish.</li>
        <li><strong>Obstructions:</strong> tree growth, new construction or other objects blocking the dish's view of the sky.</li>
        <li><strong>Outdoor equipment:</strong> a dish that has moved or an LNB that has failed.</li>
        <li><strong>Wiring:</strong> damaged cable, loose connectors or faulty splitters.</li>
        <li><strong>Indoor equipment:</strong> receiver or television settings and hardware.</li>
        <li><strong>Provider-side events:</strong> broadcast, ground-system or network issues on the provider's end.</li>
      </ul>
      <p>Not every interruption is caused by weather, and identifying the cause of a particular interruption is beyond what an independent information website can do.</p>
      <h2 id="weather">Weather-related reception issues</h2>
      <p>Satellite signals are microwave radio waves. Water droplets in heavy rain absorb and scatter some of that energy, a phenomenon known as rain fade. Thick storm clouds, and snow or ice collecting on a dish, can also reduce signal. These effects are generally temporary and ease when conditions improve. For current local conditions, see the <a href="https://www.weather.gov/" target="_blank" rel="noopener noreferrer">National Weather Service</a>.</p>
      <h2>Provider-side service interruptions</h2>
      <p>Occasionally a problem lies with the provider rather than with the equipment in your home. Providers publish announcements through their own websites, apps and account tools. Only the provider can confirm whether its service is affected.</p>
      <h2>Satellite signal terminology</h2>
      <ul>
        <li><strong>Signal strength:</strong> how much signal energy reaches the receiver.</li>
        <li><strong>Signal quality:</strong> how clean and decodable that signal is.</li>
        <li><strong>Rain fade:</strong> signal loss caused by precipitation.</li>
        <li><strong>LNB:</strong> the component that amplifies and converts the signal at the dish.</li>
        <li><strong>Line of sight:</strong> the unobstructed path between dish and satellite.</li>
      </ul>
      <p>More detail is on our <a href="/satellite-signal-information">signal information page</a>.</p>
      <h2>How to find official provider updates</h2>
      <p>Check your provider's own website, mobile app or account page. Our <a href="/provider-resources">Provider Resources</a> page links to provider-operated sites. Satellite Outage Help does not publish live outage status and cannot confirm whether your service is affected.</p>
    </ContentPage>
  );
}
