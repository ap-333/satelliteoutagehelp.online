import { BusinessDetails } from "@/components/BusinessDetails";
import { ContentPage } from "@/components/ContentPage";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How Satellite Outage Help collects, uses and protects information, including contact form messages and optional analytics.",
  "/privacy-policy",
);

export default function Page() {
  return (
    <ContentPage path="/privacy-policy" title="Privacy Policy" intro={`Last updated ${siteConfig.lastUpdated}.`}>
      <h2>Who we are</h2>
      <p>This website is operated by:</p>
      <BusinessDetails />
      <h2>Information we collect</h2>
      <ul>
        <li><strong>Phone calls:</strong> if you call us, we receive your phone number and the details you choose to share about your issue, and we use them to help you with your call.</li>
        <li><strong>Contact messages:</strong> if you use the contact form, we receive your name, email address, subject and message.</li>
        <li><strong>Analytics (optional):</strong> only if you accept analytics, we use Google Analytics 4 to measure page views and interactions such as link clicks and FAQ opens. Events do not contain your name, email or message content.</li>
        <li><strong>Google Ads tag (optional):</strong> only if you accept, a Google Ads tag may also load to measure the performance of advertising for this site. Google may set cookies and process device and usage data for this purpose.</li>
        <li><strong>Technical logs:</strong> our hosting infrastructure may process IP addresses and request details for security and operation.</li>
      </ul>
      <h2>How we use information</h2>
      <p>We use contact details only to respond to your message. We use analytics data to understand which content is useful and to improve the site. We do not sell personal information.</p>
      <h2>Cookies and consent</h2>
      <p>Analytics and advertising-measurement scripts and cookies are not loaded unless you choose Accept on the consent banner. Your choice is stored in your browser's local storage. You can clear it to be asked again.</p>
      <h2>Sharing</h2>
      <p>Contact messages are delivered through an email delivery service. If analytics is enabled and accepted, Google processes analytics data under its own terms. We may disclose information if required by law.</p>
      <h2>Retention</h2>
      <p>We keep contact messages only as long as needed to respond and keep reasonable records.</p>
      <h2>Your choices and rights</h2>
      <p>Depending on where you live, including under U.S. state privacy laws, you may have rights to request access to, correction of or deletion of personal information. Contact us using the details above to make a request.</p>
      <h2>Children</h2>
      <p>This website is not directed to children under 13 and we do not knowingly collect their personal information.</p>
      <h2>External websites</h2>
      <p>Links to provider and public websites lead to sites we do not control. Their privacy practices are their own.</p>
      <h2>Changes</h2>
      <p>We may update this policy and will change the date above when we do.</p>
    </ContentPage>
  );
}
