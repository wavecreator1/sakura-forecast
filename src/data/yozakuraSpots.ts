export interface YozakuraSpot {
  id: number
  name: string
  location: string
  lightUpPeriod: string
  lightUpHours: string
  description: string
  image: string
  tip: string
}

export const yozakuraSpots: YozakuraSpot[] = [
  {
    id: 1,
    name: 'Chidorigafuchi',
    location: 'Tokyo',
    lightUpPeriod: 'Late March - Early April',
    lightUpHours: '18:00 - 22:00',
    description:
      'The illuminated moat near the Imperial Palace transforms into a mirror of glowing pink. Rowboats glide beneath a canopy of lit cherry blossoms for an unforgettable nighttime experience.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    tip: 'Arrive by 17:30 to queue for rowboats before sunset \u2014 they sell out quickly on weekends.',
  },
  {
    id: 2,
    name: 'Meguro River',
    location: 'Tokyo',
    lightUpPeriod: 'Late March - Early April',
    lightUpHours: '17:00 - 21:00',
    description:
      'Over 800 cherry trees along the 3.8 km canal are lit with soft lanterns, casting warm reflections on the water. Street-food stalls line the riverbanks, creating a festive atmosphere.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    tip: 'Walk south from Nakameguro Station for the best illuminated stretch and fewer crowds.',
  },
  {
    id: 3,
    name: 'Maruyama Park',
    location: 'Kyoto',
    lightUpPeriod: 'Late March - Mid April',
    lightUpHours: '18:00 - 01:00',
    description:
      'Kyoto\u2019s most popular yozakura destination, centred around a magnificent weeping cherry tree bathed in warm spotlights. The park stays lively well into the night.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    tip: 'The iconic weeping cherry is most dramatic between 20:00 and 22:00 when crowds thin slightly.',
  },
  {
    id: 4,
    name: 'Hirosaki Castle',
    location: 'Aomori',
    lightUpPeriod: 'Late April - Early May',
    lightUpHours: '18:30 - 22:00',
    description:
      'The castle\u2019s 2,600 cherry trees are illuminated along the outer moat, and fallen petals form a luminous pink carpet on the water known as the "hanaikada" (flower raft).',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    tip: 'Visit during the last days of bloom to catch the spectacular pink petal carpet on the moat.',
  },
  {
    id: 5,
    name: 'Osaka Castle Park',
    location: 'Osaka',
    lightUpPeriod: 'Late March - Mid April',
    lightUpHours: '18:00 - 21:00',
    description:
      'Around 3,000 cherry trees surround the illuminated castle keep. The warm golden light on the castle contrasted against softly lit blossoms is a photographer\u2019s dream.',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80',
    tip: 'Head to Nishinomaru Garden (evening entry \u00a5350) for the best castle-and-sakura compositions.',
  },
  {
    id: 6,
    name: 'Takada Castle',
    location: 'Niigata',
    lightUpPeriod: 'Early - Mid April',
    lightUpHours: '18:00 - 23:00',
    description:
      'Ranked among Japan\u2019s top three night cherry blossom spots, the castle\u2019s 4,000 trees are reflected in the moat under colourful paper-lantern illumination.',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80',
    tip: 'The three-tiered turret reflected in the moat is the signature photo \u2014 best from the south bank.',
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    location: 'Tokyo',
    lightUpPeriod: 'Late March - Early April',
    lightUpHours: '18:00 - 21:00',
    description:
      'A majestic weeping cherry at the garden entrance is dramatically up-lit, its cascading branches glowing like pink fireworks frozen in time against the dark sky.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    tip: 'Use the Somei-mon entrance (near JR Komagome) for the shortest walk to the main tree.',
  },
  {
    id: 8,
    name: 'Matsumoto Castle',
    location: 'Nagano',
    lightUpPeriod: 'Mid - Late April',
    lightUpHours: '17:30 - 21:00',
    description:
      'The striking black "Crow Castle" is dramatically lit against a backdrop of softly glowing cherry blossoms, with the entire scene reflected in the still waters of the surrounding moat.',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80',
    tip: 'Position yourself on the red bridge for the classic reflection shot of the black castle and pink blooms.',
  },
]
