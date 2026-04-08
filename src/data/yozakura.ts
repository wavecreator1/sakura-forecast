export interface YozakuraSpot {
  id: number
  name: string
  nameJa: string
  location: string
  description: string
  image: string
  lightupHours: string
  period: string
  tip: string
  tags: string[]
}

export const yozakuraSpots: YozakuraSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJa: '目黒川',
    location: 'Tokyo',
    description:
      'Over 800 cherry trees are lit with soft pink lanterns along the 3.8 km canal. The blossoms reflected on the water create a dreamlike tunnel of light.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    lightupHours: '17:00 – 21:00',
    period: 'Late March – Early April',
    tip: 'Walk south from Nakameguro Station for the most atmospheric stretch. Weekday evenings are less crowded.',
    tags: ['Tokyo', 'River', 'Lanterns'],
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJa: '千鳥ヶ淵',
    location: 'Tokyo',
    description:
      'The Imperial Palace moat is illuminated with powerful LED floodlights, turning 260 cherry trees into glowing arches. Rowboats are available for a magical on-the-water experience.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    lightupHours: '18:00 – 22:00',
    period: 'Late March – Early April',
    tip: 'Boat reservations open online at 9:00 AM — they sell out in minutes, so set an alarm.',
    tags: ['Tokyo', 'Boating', 'Moat'],
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJa: '円山公園',
    location: 'Kyoto',
    description:
      'Kyoto\'s most popular hanami park centers on a magnificent weeping cherry tree (shidarezakura) that is dramatically lit from below, creating an ethereal glow.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    lightupHours: '18:00 – 01:00',
    period: 'Late March – Mid April',
    tip: 'Arrive after 22:00 to enjoy the iconic weeping cherry without the crowds. Food stalls stay open late.',
    tags: ['Kyoto', 'Weeping cherry', 'Late night'],
  },
  {
    id: 4,
    name: 'Osaka Castle Park',
    nameJa: '大阪城公園',
    location: 'Osaka',
    description:
      'Around 3,000 cherry trees surround the illuminated castle tower. The Nishinomaru Garden offers the best night views with the golden castle contrasting against pink blossoms.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    lightupHours: '18:00 – 21:00',
    period: 'Late March – Mid April',
    tip: 'Nishinomaru Garden charges a small admission fee (¥350) but is far less crowded than the free areas.',
    tags: ['Osaka', 'Castle', 'Garden'],
  },
  {
    id: 5,
    name: 'Hirosaki Castle',
    nameJa: '弘前城',
    location: 'Aomori',
    description:
      'The outer moat becomes a floating carpet of pink petals, and 2,600 illuminated trees reflect in the still water. The "cherry blossom tunnel" glows warmly at night.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    lightupHours: '18:30 – 22:00',
    period: 'Late April – Early May',
    tip: 'Time your visit for "hanaikada" — the petal rafts on the moat appear 2–3 days after peak bloom.',
    tags: ['Aomori', 'Castle', 'Petal carpet'],
  },
  {
    id: 6,
    name: 'Takada Castle',
    nameJa: '高田城址公園',
    location: 'Niigata',
    description:
      'One of Japan\'s top three night cherry blossom spots. Over 4,000 lanterns illuminate the castle ruins and 4,000 cherry trees, reflecting beautifully in the moat.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    lightupHours: '18:00 – 23:00',
    period: 'Early – Mid April',
    tip: 'Cross the inner moat bridge for the classic "three-story turret with sakura" photo composition.',
    tags: ['Niigata', 'Lanterns', 'Castle ruins'],
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJa: '六義園',
    location: 'Tokyo',
    description:
      'A massive weeping cherry tree near the entrance is the star of this Edo-period garden. Subtle, warm lighting highlights the cascading branches without overpowering the atmosphere.',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80',
    lightupHours: '18:00 – 21:00',
    period: 'Late March – Early April',
    tip: 'Enter from the Somei-mon gate (2 min from Komagome Station) — the main gate queue can be very long.',
    tags: ['Tokyo', 'Garden', 'Weeping cherry'],
  },
  {
    id: 8,
    name: 'Hirano Shrine',
    nameJa: '平野神社',
    location: 'Kyoto',
    description:
      'A hidden gem among Kyoto\'s night sakura spots. Dozens of rare cherry varieties are lit with warm paper lanterns, creating an intimate, traditional atmosphere.',
    image: 'https://images.unsplash.com/photo-1504109586057-71a068e27ca7?w=600&q=80',
    lightupHours: '日没 – 21:30',
    period: 'Late March – Late April',
    tip: 'Visit during weekdays — this local favorite is blissfully uncrowded compared to Maruyama Park.',
    tags: ['Kyoto', 'Shrine', 'Rare varieties'],
  },
]
