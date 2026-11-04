import { ContentPage } from "@/components/ContentPage";
import { ProviderDirectory } from "@/components/ProviderDirectory";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/config/photos";

export const metadata = pageMetadata(
  "Official Satellite TV Provider Resources",
  "A directory of official satellite television provider websites and support pages, clearly labeled as external, plus public weather resources.",
  "/provider-resources",
);

export default function Page() {
  return (
    <ContentPage
      photo={photos.aerial}
      path="/provider-resources"
      title="Provider Resources"
      intro="Links to websites operated by satellite television providers and by public agencies. Each opens in a new tab."
      related={[
        { label: "Outage Information", href: "/outage-information" },
        { label: "Disclaimer", href: "/disclaimer" },
      ]}
    >
      <p><strong>Independent site notice:</strong> Satellite Outage Help is not affiliated with, endorsed by, or operated by any provider listed below. Provider names are used only to identify them. Content on provider websites is created by those providers, and we do not control it.</p>
      <h2>Directory</h2>
      <ProviderDirectory />
      <h2>About this list</h2>
      <p>Links are included only when they point to a provider's own domain. Websites change, so a link may move or stop working. If you notice a problem, please tell us through the contact page.</p>
    </ContentPage>
  );
}
