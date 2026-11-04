import { siteConfig } from "@/config/site";

const Missing = ({ what }: { what: string }) => (
  <em className="text-fg-2">[{what} — to be supplied by the site owner before launch]</em>
);

export function BusinessDetails() {
  return (
    <ul>
      <li><strong>Website:</strong> {siteConfig.name} ({siteConfig.domain})</li>
      <li><strong>Legal entity:</strong> {siteConfig.legalEntity ?? <Missing what="Legal business name" />}</li>
      <li><strong>Business address:</strong> {siteConfig.businessAddress ?? <Missing what="Business address" />}</li>
      <li><strong>Phone:</strong> <a href={`tel:${siteConfig.phone.tel}`}>{siteConfig.phone.display}</a></li>
      <li><strong>Contact email:</strong> {siteConfig.contactEmail ? <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> : <Missing what="Contact email" />}</li>
    </ul>
  );
}
