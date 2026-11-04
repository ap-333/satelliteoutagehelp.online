import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CallPopupLoader } from "@/components/CallPopupLoader";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = { themeColor: "#f5f8fc", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Satellite TV Down? Talk to a Live Agent | Satellite Outage Help", template: "%s | Satellite Outage Help" },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalEntity, url: siteConfig.url }],
  publisher: siteConfig.legalEntity,
  formatDetection: { telephone: true, email: true, address: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
};

const orgId = `${siteConfig.url}/#organization`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      legalName: siteConfig.legalEntity,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.svg"),
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "107 Shorewood Ln",
        addressLocality: "Huntsville",
        addressRegion: "AL",
        postalCode: "35811-4400",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone.tel,
        contactType: "customer support",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en-US",
      publisher: { "@id": orgId },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CallPopupLoader />
        <Analytics />
      </body>
    </html>
  );
}
