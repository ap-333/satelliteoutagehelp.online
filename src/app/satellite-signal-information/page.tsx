import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/metadata";
import { photos } from "@/config/photos";

export const metadata = pageMetadata(
  "Satellite Signal Information",
  "Understand satellite signal basics, signal strength and quality terminology, atmospheric interference and dish alignment as an equipment concept.",
  "/satellite-signal-information",
);

export default function Page() {
  return (
    <ContentPage
      photo={photos.antennaTower}
      path="/satellite-signal-information"
      title="Satellite Signal Information"
      intro="Plain-language explanations of how satellite signals reach your television and the terms used to describe them."
      related={[
        { label: "Outage Information", href: "/outage-information" },
        { label: "Satellite Equipment", href: "/satellite-equipment" },
      ]}
    >
      <h2>Satellite signal basics</h2>
      <p>Satellite television signals travel as microwave radio waves from a satellite in geostationary orbit to a dish on the ground. Because the satellite appears fixed in the sky, a dish can stay pointed at the same spot.</p>
      <h2>Signal strength terminology</h2>
      <p>Signal strength describes how much of the transmitted energy reaches your receiver. Receivers often display it as a percentage or bar on an equipment menu. Strength alone does not guarantee a good picture.</p>
      <h2>Signal quality terminology</h2>
      <p>Signal quality describes how clean the signal is, meaning how free it is from noise and errors. A signal can be strong but noisy, and quality is generally what determines whether the receiver can decode it.</p>
      <h2>Atmospheric interference</h2>
      <p>Rain, dense clouds, snow and ice can absorb or scatter satellite signals. Effects are strongest during intense precipitation and typically fade as conditions clear.</p>
      <h2>Dish alignment as an equipment concept</h2>
      <p>A dish must point precisely at its satellite. Its position is described by azimuth (compass direction), elevation (angle above the horizon) and skew (rotation of the LNB). Wind, settling or physical contact can shift a dish slightly. Alignment is part of how the equipment is installed, and this site does not provide installation or repair services.</p>
      <h2>Signal reception and television availability</h2>
      <p>The picture on a television is the end of a chain: satellite, dish, LNB, cable, receiver and television. If the signal weakens or degrades at any stage, the receiver may be unable to decode it and the picture can freeze, pixelate or disappear. The provider's own service must also be operating for programming to be available.</p>
    </ContentPage>
  );
}
