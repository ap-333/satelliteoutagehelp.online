import { BusinessDetails } from "@/components/BusinessDetails";
import { ContentPage } from "@/components/ContentPage";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms and Conditions",
  "The terms governing use of the Satellite Outage Help website and its live phone support line, operated by GRIDPROGRAM LLC.",
  "/terms",
);

export default function Page() {
  return (
    <ContentPage path="/terms" title="Terms and Conditions" intro={`Last updated ${siteConfig.lastUpdated}.`}>
      <h2>Operator</h2>
      <BusinessDetails />
      <h2>Acceptance</h2>
      <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>Informational purpose</h2>
      <p>The content is general, educational information. It is not professional advice, not a guarantee of any outcome, and not a substitute for guidance from your satellite television provider.</p>
      <h2>Phone support</h2>
      <p>Our live agents provide general guidance and troubleshooting help by phone. We cannot guarantee that any problem will be resolved, and we cannot access or change your satellite provider account, billing or services. Follow your equipment manufacturer's and provider's safety instructions, particularly for outdoor equipment.</p>
      <h2>No affiliation</h2>
      <p>{siteConfig.disclaimer}</p>
      <h2>Acceptable use</h2>
      <p>You agree not to misuse the site, attempt to disrupt it, submit unlawful or abusive content through the contact form, or use automated means to scrape it in a way that harms its operation.</p>
      <h2>Intellectual property</h2>
      <p>Site text, design and illustrations are owned by GRIDPROGRAM LLC or used with permission. Third-party names and marks belong to their owners and are used only for identification.</p>
      <h2>External links</h2>
      <p>We link to third-party websites for convenience. We do not control or endorse them and are not responsible for their content or availability.</p>
      <h2>Disclaimer of warranties and limitation of liability</h2>
      <p>The site is provided "as is" and "as available" without warranties of any kind. To the fullest extent permitted by law, the operator is not liable for any loss arising from your use of, or reliance on, the site.</p>
      <h2>Changes</h2>
      <p>We may update these terms. Continued use after changes means you accept them.</p>
      <h2>Governing law</h2>
      <p>Governing law and venue are to be specified by the operator once the legal entity and jurisdiction are confirmed.</p>
    </ContentPage>
  );
}
