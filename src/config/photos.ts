/**
 * Photographs are CC0 (public domain dedication) files from Wikimedia Commons; the license of each was
 * checked against the Commons file page. Attribution is not required but is listed on the About page.
 */
export type Photo = { src: string; alt: string; author: string; source: string; position?: string; w: number; h: number };

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

export const photos = {
  dish: { src: "/photos/dish.jpg", alt: "Large satellite dish antenna on a steel mount against a blue sky and green mountains", author: "Stellan Johansson", source: commons("Sending_Signals_(Unsplash).jpg"), position: "50% 35%", w: 933, h: 1400 },
  stormClouds: { src: "/photos/storm-clouds.jpg", alt: "Dark storm clouds building in a black and white sky", author: "Jamie Kern", source: commons("Storm_Clouds_Black_White_(Unsplash).jpg"), w: 1400, h: 933 },
  snowStorm: { src: "/photos/snow-storm.jpg", alt: "Snow-covered mountains under heavy cloud during a winter storm", author: "William Bossen", source: commons("Storm_in_the_Mountains_(Unsplash).jpg"), w: 1400, h: 935 },
  lightning: { src: "/photos/lightning.jpg", alt: "Lightning striking over a city skyline at night", author: "Dominik QN", source: commons("Lighting_Storm_at_Night_(Unsplash).jpg"), w: 1400, h: 927 },
  rainWindow: { src: "/photos/rain-window.jpg", alt: "Raindrops on a window with a blurred street scene behind", author: "Francesco Gallarotti", source: commons("Rain_on_window_(Unsplash).jpg"), w: 1400, h: 933 },
  coax: { src: "/photos/coax.jpg", alt: "A length of black coaxial cable with a screw-on connector on a white background", author: "Raysonho (Open Grid Scheduler)", source: commons("CoaxialCable.jpg"), position: "70% 40%", w: 1400, h: 927 },
  antennaTower: { src: "/photos/antenna-tower.jpg", alt: "Red and white broadcast antenna tower on a forested hill under a cloudy sky", author: "Gio Diani", source: commons("Red_and_white_antenna_(Unsplash).jpg"), w: 1400, h: 931 },
  aerial: { src: "/photos/aerial.jpg", alt: "View of a coastline and mountains from high above, as seen from orbit-style satellite imagery", author: "NASA", source: commons("Satellite_views_(Unsplash).jpg"), w: 1400, h: 932 },
  television: { src: "/photos/television.jpg", alt: "Vintage television set on four legs against a plain wall", author: "Sven Scheuermeier", source: commons("Vintage_television_(Unsplash).jpg"), w: 1400, h: 934 },
} satisfies Record<string, Photo>;
