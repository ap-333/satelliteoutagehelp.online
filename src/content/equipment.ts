export type EquipmentKey = "dish" | "lnb" | "receiver" | "coax";

export const equipment: {
  key: EquipmentKey;
  id: string;
  name: string;
  short: string;
  long: string[];
}[] = [
  {
    key: "dish",
    id: "dish-antenna",
    name: "Satellite Dish Antenna",
    short: "The outdoor reflector that gathers weak signals from orbit and focuses them toward the LNB.",
    long: [
      "A satellite dish antenna is a parabolic reflector. Its curved surface collects faint microwave signals arriving from a satellite roughly 22,000 miles above the equator and concentrates them at a single focal point.",
      "Dishes are mounted on a roof, wall or pole and must face a specific region of the southern sky in the continental U.S. Trees, buildings and other obstructions in that path can weaken the signal.",
      "Larger dishes collect more signal; the size used depends on the satellites a service relies on and the equipment the provider supplies.",
    ],
  },
  {
    key: "lnb",
    id: "lnb",
    name: "LNB (Low-Noise Block Downconverter)",
    short: "Amplifies the reflected signal and converts it to a frequency that cable can carry indoors.",
    long: [
      "The LNB is mounted on an arm at the dish's focal point. It amplifies the very weak incoming signal while adding as little electrical noise as possible, then shifts it to a lower intermediate frequency.",
      "Satellite frequencies are too high to travel far through household cable. The conversion lets the signal pass through coaxial cable to the receiver with limited loss.",
      "Some LNBs serve more than one output or receive multiple satellites, which is why you may see several cables running from one dish.",
    ],
  },
  {
    key: "receiver",
    id: "receiver-dvr",
    name: "Satellite TV Receiver / DVR",
    short: "The indoor device that tunes, decodes and delivers programming to your television.",
    long: [
      "The receiver tunes the channel you select, decodes the digital stream and outputs video and audio, typically over HDMI. Hopper-style receivers are an example of the whole-home DVR category, combining recording with multi-room features.",
      "A DVR stores recordings on an internal drive and can often record several programs at once, depending on the model.",
      "Additional room receivers, sometimes called clients or joeys in provider materials, extend service to other televisions by connecting back to a main receiver.",
    ],
  },
  {
    key: "coax",
    id: "coaxial-cable",
    name: "Coaxial Cable Connections",
    short: "Shielded cable and connectors that carry the signal from the dish to indoor equipment.",
    long: [
      "Coaxial cable has a center conductor surrounded by insulation and a metal shield, which protects the signal from outside interference. F-type connectors join it to the LNB, splitters, wall plates and receivers.",
      "Because the signal is weak, damaged cable, loose or corroded connectors and water ingress can all degrade it.",
      "Signal distribution hardware such as multiswitches, splitters and diplexers divides the signal so several receivers can share one dish system. The exact components depend on the installation.",
    ],
  },
];
