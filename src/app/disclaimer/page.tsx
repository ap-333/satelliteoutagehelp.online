import { ContentPage } from "@/components/ContentPage";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Disclaimer",
  "Satellite Outage Help is independent and not affiliated with any satellite television provider. Read the full disclaimer.",
  "/disclaimer",
);

export default function Page() {
  return (
    <ContentPage path="/disclaimer" title="Disclaimer" intro={`Last updated ${siteConfig.lastUpdated}.`}>
      <h2>Independent website</h2>
      <p><strong>{siteConfig.disclaimer}</strong></p>
      <h2>Not a provider</h2>
      <p>We do not sell satellite television service and are not your satellite provider. Our live agents offer general guidance and troubleshooting help by phone. We cannot access or change your provider account, billing or services, and we cannot guarantee that any problem will be resolved. Provider-side outages, account and billing matters can only be resolved by your provider.</p>
      <h2>No live status</h2>
      <p>We do not monitor or report real-time outages. Information here is general and may not reflect current conditions.</p>
      <h2>Accuracy</h2>
      <p>We work to keep content accurate, but we make no warranty that it is complete, current or suitable for your situation. Equipment and services vary by provider and installation.</p>
      <h2>Safety</h2>
      <p>Working on roofs, masts or electrical equipment can be dangerous. This site does not instruct readers to perform installation or repair work.</p>
      <h2>Trademarks</h2>
      <p>All provider names and trademarks belong to their respective owners and appear only to identify the companies concerned.</p>
    </ContentPage>
  );
}
