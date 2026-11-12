import type { Metadata } from "next";
import { DishLanding } from "@/components/DishLanding";
import { dishMetadata } from "@/lib/dishMetadata";

export const metadata: Metadata = dishMetadata;

export default function Page() {
  return <DishLanding />;
}
