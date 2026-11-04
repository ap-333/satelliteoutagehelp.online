import { ContentPage } from "@/components/ContentPage";
import { EquipmentArt } from "@/components/EquipmentArt";
import { equipment } from "@/content/equipment";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Satellite TV Equipment Guide",
  "Educational guide to satellite dish antennas, LNBs, satellite receivers and DVRs, coaxial cables and signal distribution equipment.",
  "/satellite-equipment",
);

export default function Page() {
  return (
    <ContentPage
      path="/satellite-equipment"
      title="Satellite TV Equipment"
      intro="What each part of a home satellite TV system does and how the parts work together."
      related={[
        { label: "Satellite Signal Information", href: "/satellite-signal-information" },
        { label: "Outage Information", href: "/outage-information" },
      ]}
    >
      {equipment.map((e) => (
        <section key={e.id} id={e.id} className="mt-12 first:mt-0">
          <div className="aspect-[16/8] overflow-hidden rounded-xl border border-line"><EquipmentArt k={e.key} /></div>
          <h2>{e.name}</h2>
          {e.long.map((p) => <p key={p}>{p}</p>)}
        </section>
      ))}
      <section id="signal-distribution" className="mt-12">
        <h2>Satellite signal distribution</h2>
        <p>Many homes have more than one television. Multiswitches, splitters and similar components share the signal from a dish between several receivers. Each added component can introduce some signal loss, which is why distribution layouts are designed for the specific equipment in use.</p>
        <p>This page is general information. Equipment varies by provider and installation, so consult your provider's documentation for details about your own system.</p>
      </section>
    </ContentPage>
  );
}
