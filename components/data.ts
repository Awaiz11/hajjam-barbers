// All copy, prices and photos live here, so the site is quick to adapt for a new shop.

export const SHOP = {
  name: "Hajjam",
  full: "Hajjam Barbers",
  area: "Main Boulevard, DHA Phase 6, Lahore",
  phoneDisplay: "+92 335 4679492",
  whatsapp: "923354679492",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=DHA+Phase+6+Lahore",
};

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const PHOTOS = {
  hero: "1593702275687-f8b402bf1fb5",
  shop: "1585747860715-2ba37e788b70",
  tools: "1621605815971-fbc98d665033",
  groom: "1788328155052-e02abe9ba983",
  comb: "1657105052497-f996284ffff8",
};

export type Service = { name: string; note: string; mins: number; price: string };

export const SERVICES: Service[] = [
  { name: "Haircut", note: "Wash, cut and style", mins: 40, price: "1,500" },
  { name: "Skin fade", note: "Foil shaver fade, sharp line-up", mins: 50, price: "1,800" },
  { name: "Beard trim and shape", note: "Hot towel, line-up, beard oil", mins: 25, price: "800" },
  { name: "Haircut and beard", note: "The full treatment", mins: 60, price: "2,200" },
  { name: "Hot towel shave", note: "Straight razor, two towels, cold finish", mins: 35, price: "1,000" },
  { name: "Kids haircut", note: "Under 12, a parent stays close", mins: 30, price: "1,000" },
  { name: "Charcoal facial", note: "Cleanse, mask and steam", mins: 40, price: "2,500" },
  { name: "Hair or beard colour", note: "Ammonia-free, covers grey", mins: 45, price: "2,500" },
];

export const BARBERS = ["Any barber", "Ustad Akram (senior)", "Bilal", "Hamza", "Usman"];

/** Opening hours by day of week (0 = Sunday). Friday opens after Jummah. */
export const OPEN: Record<number, { from: number; to: number }> = {
  0: { from: 12, to: 23 },
  1: { from: 12, to: 23 },
  2: { from: 12, to: 23 },
  3: { from: 12, to: 23 },
  4: { from: 12, to: 23 },
  5: { from: 15, to: 23 },
  6: { from: 12, to: 23 },
};

export const HOURS = [
  { days: "Saturday to Thursday", time: "12 pm – 11 pm" },
  { days: "Friday", time: "3 pm – 11 pm" },
];

export const DULHA = [
  "Haircut and beard styling a day or two before",
  "Charcoal facial and hot towel shave on the day",
  "Hand and foot care",
  "Final touch-up right before the baraat",
];
