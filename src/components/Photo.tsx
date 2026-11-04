import Image from "next/image";
import type { Photo as PhotoData } from "@/config/photos";

export function Photo({
  photo,
  sizes,
  priority = false,
  className = "",
}: {
  photo: PhotoData;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={72}
      className={`object-cover ${className}`}
      style={{ objectPosition: photo.position }}
    />
  );
}
