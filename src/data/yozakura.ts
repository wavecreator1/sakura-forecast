export interface YozakuraSpot {
  id: number
  name: string
  nameJa: string
  location: string
  description: string
  image: string
  lightUpHours: string
  season: string
  tips: string
}

export const yozakuraSpots: YozakuraSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJa: '目黒川',
    location: 'Tokyo',
    description:
      'Over 800 cherry trees are illuminated along a 3.8 km stretch, their blossoms reflecting on the dark water like floating lanterns. Paper lanterns strung between the trees add a warm, nostalgic glow.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    lightUpHours: '17:00 – 21:00',
    season: 'Late March – Early April',
    tips: 'Walk from Nakameguro Station toward Ikejiri-Ohashi for the best-lit stretch. Weekday evenings are less crowded.',
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJa: '千鳥ヶ淵',
    location: 'Tokyo',
    description:
      'The Imperial Palace moat transforms into a dreamscape when 260 cherry trees are lit from below. Night rowing among illuminated blossoms is one of Tokyo\'s most magical spring experiences.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    lightUpHours: '18:00 – 22:00',
    season: 'Late March – Early April',
    tips: 'Boat rentals often have 60–90 minute waits. Arrive by 17:30 or enjoy the view from the promenade above.',
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJa: '円山公園',
    location: 'Kyoto',
    description:
      'Kyoto\'s most famous night-viewing spot centers on a magnificent weeping cherry tree (shidarezakura) that has been illuminated for decades. The tree\'s cascading branches glow ethereally against the dark sky.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    lightUpHours: '18:00 – 22:00 (main tree until 01:00)',
    season: 'Late March – Mid April',
    tips: 'Visit the weeping cherry after 21:00 when crowds thin. Combine with a walk through Gion for the full evening atmosphere.',
  },
  {
    id: 4,
    name: 'Hirosaki Castle',
    nameJa: '弘前城',
    location: 'Aomori',
    description:
      'The castle and its 2,600 cherry trees are spectacularly lit, with blossoms reflecting in the outer moat to create a pink "flower carpet." Late-season petal fall on the water is especially breathtaking at night.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    lightUpHours: '18:30 – 22:00',
    season: 'Late April – Early May',
    tips: 'The "hanaikada" (petal rafts) on the moat are best viewed from the Shunyo Bridge. Bring a warm jacket — Aomori nights are cool.',
  },
  {
    id: 5,
    name: 'Osaka Castle',
    nameJa: '大阪城',
    location: 'Osaka',
    description:
      'Roughly 3,000 cherry trees in Nishinomaru Garden are illuminated alongside the dramatically lit castle tower. The contrast of warm golden light on the castle and soft pink blossoms is iconic.',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80',
    lightUpHours: '18:00 – 21:00',
    season: 'Late March – Mid April',
    tips: 'Nishinomaru Garden charges a small entry fee during illumination. The view of the lit castle framed by cherry branches is worth it.',
  },
  {
    id: 6,
    name: 'Takada Castle',
    nameJa: '高田城',
    location: 'Niigata',
    description:
      'Rated one of Japan\'s top three night cherry blossom sites. Around 4,000 trees are illuminated by over 3,000 paper lanterns, and the triple-turret castle reflecting on the moat is unforgettable.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    lightUpHours: '18:00 – 22:00',
    season: 'Early – Mid April',
    tips: 'Walk the full moat loop to see reflections from every angle. The Sakura Road along the west moat is the most photogenic.',
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJa: '六義園',
    location: 'Tokyo',
    description:
      'A grand weeping cherry tree near the entrance is dramatically lit, its branches cascading like a pink waterfall. The traditional Edo-period garden takes on a serene, otherworldly quality at night.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    lightUpHours: '18:00 – 21:00',
    season: 'Late March – Early April',
    tips: 'Use the Somei Gate (染井門) entrance to skip the main gate queue. The garden path is one-way during illumination.',
  },
  {
    id: 8,
    name: 'Matsumoto Castle',
    nameJa: '松本城',
    location: 'Nagano',
    description:
      'The striking black "Crow Castle" is even more dramatic at night, its dark walls contrasting with soft-pink illuminated cherry blossoms. Reflections in the moat double the spectacle.',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80',
    lightUpHours: '17:30 – 21:00',
    season: 'Mid – Late April',
    tips: 'The north side of the moat offers the clearest reflection shots. A local sake festival often coincides with peak bloom.',
  },
]
