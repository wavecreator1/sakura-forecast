export interface YozakuraSpot {
  id: number
  name: string
  nameJp: string
  location: string
  description: string
  illuminationHours: string
  bestDates: string
  tip: string
  image: string
  treeCount: string
}

export const yozakuraSpots: YozakuraSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJp: '目黒川',
    location: 'Tokyo',
    description:
      'Over 800 cherry trees are lit with soft pink lanterns that reflect off the river, creating a dreamy corridor of light. The narrow streets along the canal fill with food vendors after dark.',
    illuminationHours: '17:00 – 21:00',
    bestDates: 'Late March – Early April',
    tip: 'Walk from Nakameguro Station heading south for the quieter, less crowded stretch of the river.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    treeCount: '800+',
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJp: '千鳥ヶ淵',
    location: 'Tokyo',
    description:
      'The Imperial Palace moat is illuminated with powerful LED floodlights, turning the cherry canopy into a glowing tunnel above the water. Night rowboat rides are available during the festival.',
    illuminationHours: '18:00 – 22:00',
    bestDates: 'Late March – Early April',
    tip: 'Arrive before 18:30 to queue for night rowboats — they stop accepting riders once the line is full.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    treeCount: '260',
  },
  {
    id: 3,
    name: 'Hirosaki Castle',
    nameJp: '弘前城',
    location: 'Aomori',
    description:
      'The castle grounds are lit with warm lanterns, and the famous "petal moat" — where fallen petals carpet the water pink — is doubly magical under lights.',
    illuminationHours: '18:30 – 22:00',
    bestDates: 'Late April – Early May',
    tip: 'Visit during the last days of bloom to catch the petal carpet on the outer moat — best seen from the Shunyo Bridge.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    treeCount: '2,600',
  },
  {
    id: 4,
    name: 'Maruyama Park',
    nameJp: '円山公園',
    location: 'Kyoto',
    description:
      'Kyoto\'s most famous nighttime cherry blossom spot centers on a giant weeping cherry tree (shidarezakura) dramatically illuminated from below, its branches cascading like a pink waterfall.',
    illuminationHours: 'Sunset – 00:00',
    bestDates: 'Late March – Mid April',
    tip: 'Go after 22:00 when most crowds leave — the illuminated weeping cherry in near-silence is unforgettable.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    treeCount: '680',
  },
  {
    id: 5,
    name: 'Osaka Castle Park',
    nameJp: '大阪城公園',
    location: 'Osaka',
    description:
      'The illuminated castle tower rises above thousands of cherry trees in the Nishinomaru Garden. The contrast of the golden castle against pink blossoms at night is stunning.',
    illuminationHours: '18:00 – 21:00',
    bestDates: 'Late March – Early April',
    tip: 'Enter through the Nishinomaru Garden (¥350 admission) for the best nighttime views of the castle framed by blossoms.',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80',
    treeCount: '3,000',
  },
  {
    id: 6,
    name: 'Takada Castle',
    nameJp: '高田城',
    location: 'Niigata',
    description:
      'Ranked among Japan\'s top three nighttime cherry blossom spots, the castle moat reflects 4,000 illuminated trees, creating an endless mirror of pink and gold light.',
    illuminationHours: '18:00 – 22:00',
    bestDates: 'Early – Mid April',
    tip: 'Head to the Sakura Road (桜ロード) on the west side of the moat for the most photogenic reflections.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    treeCount: '4,000',
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJp: '六義園',
    location: 'Tokyo',
    description:
      'A magnificent weeping cherry tree at the garden entrance is illuminated with warm spotlights. The traditional Edo-period garden paths are softly lit, offering a tranquil nighttime stroll.',
    illuminationHours: '18:00 – 21:00',
    bestDates: 'Late March – Early April',
    tip: 'Use the special Somei-mon entrance (near JR Komagome Station) — it opens only during the illumination period and has shorter queues.',
    image: 'https://images.unsplash.com/photo-1504109586057-71a068e27ca7?w=600&q=80',
    treeCount: '75',
  },
]
