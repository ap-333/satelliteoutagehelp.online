import { ContentPage } from "@/components/ContentPage";
import { CallButton } from "@/components/CallButton";
import { ContactForm } from "@/components/ContactForm";
import { isContactDeliveryConfigured, siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Call Satellite Outage Help",
  "Call (800) 816-6490 to speak with a live human agent about your satellite TV problem. No AI responders.",
  "/contact",
);

export const dynamic = "force-dynamic";

export default function Page() {
  const enabled = isContactDeliveryConfigured();
  return (
    <ContentPage
      path="/contact"
      title="Contact Us"
      intro="The fastest way to get help is to call and talk to a live human agent."
      related={[{ label: "Outage Information", href: "/outage-information" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
    >
      <p><strong>Call {siteConfig.phone.display} to speak with a live human agent.</strong> Your call is answered by a real person, not an AI responder or chatbot. Satellite Outage Help is an independent service and is not affiliated with any satellite TV provider. Matters that only your provider can resolve, such as billing and account changes, will need to go through your provider.</p>
      <div className="not-prose my-6"><CallButton section="contact" label={`Call ${siteConfig.phone.display} Now`} /></div>
      {siteConfig.contactEmail && <p>Prefer to write? You can email <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p>}
      <div className="not-prose mt-8">
        {enabled ? (
          <ContactForm />
        ) : (
          <div role="note" className="rounded-xl border border-line bg-card p-6">
            <h2 className="!mt-0 text-lg font-semibold">Contact form not yet available</h2>
            <p>The contact form will appear here once message delivery has been set up for this website.</p>
          </div>
        )}
      </div>
    </ContentPage>
  );
}
