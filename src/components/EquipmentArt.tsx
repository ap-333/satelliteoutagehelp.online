import { LnbArt, ReceiverArt } from "./Illustrations";
import { Photo } from "./Photo";
import { photos } from "@/config/photos";
import type { EquipmentKey } from "@/content/equipment";

const sizes = "(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw";

export function EquipmentArt({ k }: { k: EquipmentKey }) {
  if (k === "dish") return <div className="relative h-full w-full"><Photo photo={photos.dish} sizes={sizes} /></div>;
  if (k === "coax") return <div className="relative h-full w-full"><Photo photo={photos.coax} sizes={sizes} /></div>;
  return k === "lnb" ? <LnbArt /> : <ReceiverArt />;
}
