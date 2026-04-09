export interface YozakuraSpot {
  id: number
  name: string
  nameJa: string
  location: string
  image: string
  lightUpPeriod: string
  lightUpHours: string
  description: string
  tips: string
  treeCount: string
}

export const yozakuraSpots: YozakuraSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJa: '目黒川',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Meguro+River',
    lightUpPeriod: 'Late March – Early April',
    lightUpHours: '17:00 – 21:00',
    description:
      'Over 800 cherry trees line both banks of the Meguro River, creating a pink tunnel that is dramatically illuminated at night. The blossoms reflecting off the water create a dreamlike double-vision.',
    tips: 'Visit on weekdays to avoid the heaviest crowds. The Nakameguro station side offers the best photo spots near the bridges.',
    treeCount: '~800 trees',
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJa: '千鳥ヶ淵',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Chidorigafuchi',
    lightUpPeriod: 'Late March – Early April',
    lightUpHours: '18:00 – 22:00',
    description:
      'The moat surrounding the Imperial Palace becomes a magical scene when cherry trees along its banks are lit up. Rowboat rentals extend into the evening, letting you glide under illuminated canopies.',
    tips: 'Rent a rowboat before sunset to experience the transition from daylight to illuminated blossoms. Arrive early as boat queues get very long.',
    treeCount: '~260 trees',
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJa: '円山公園',
    location: 'Kyoto',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Maruyama+Park',
    lightUpPeriod: 'Late March – Mid April',
    lightUpHours: '18:00 – 01:00',
    description:
      'Home to Kyoto\'s most famous weeping cherry tree — the "Gion Shidarezakura." At night, soft lighting transforms this grand tree into an ethereal centerpiece, drawing photographers from around the world.',
    tips: 'The iconic weeping cherry is most photogenic from the east side. Late-night visits (after 22:00) are quieter and more atmospheric.',
    treeCount: '~680 trees',
  },
  {
    id: 4,
    name: 'Osaka Castle Park',
    nameJa: '大阪城公園',
    location: 'Osaka',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Osaka+Castle',
    lightUpPeriod: 'Late March – Mid April',
    lightUpHours: '18:00 – 21:00',
    description:
      'The Nishinomaru Garden within Osaka Castle Park offers a stunning combination of illuminated cherry blossoms against the backdrop of the floodlit castle tower. The contrast of warm blossoms against the white castle walls is unforgettable.',
    tips: 'Nishinomaru Garden charges a small admission fee during cherry blossom season but is well worth it for the castle backdrop. Bring a tripod for long-exposure shots.',
    treeCount: '~3,000 trees',
  },
  {
    id: 5,
    name: 'Hirosaki Castle',
    nameJa: '弘前城',
    location: 'Aomori',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Hirosaki+Castle',
    lightUpPeriod: 'Late April – Early May',
    lightUpHours: '18:30 – 22:00',
    description:
      'One of Japan\'s top three cherry blossom spots. The castle moat becomes a "flower raft" (hanaikada) when petals fall, creating a pink carpet on the water that glows under the lights.',
    tips: 'Time your visit for late bloom — the petal-covered moat (hanaikada) is even more spectacular at night. The west moat tunnel is the most photographed spot.',
    treeCount: '~2,600 trees',
  },
  {
    id: 6,
    name: 'Takada Castle',
    nameJa: '高田城址公園',
    location: 'Niigata',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Takada+Castle',
    lightUpPeriod: 'Early – Mid April',
    lightUpHours: '18:00 – 23:00',
    description:
      'Regarded as one of Japan\'s three great night cherry blossom viewing spots. Around 3,000 lanterns illuminate the trees, and the reflection of the three-story turret on the moat is iconic.',
    tips: 'The Sakura Road along the moat is the highlight. Visit on a calm evening for perfect reflections in the water.',
    treeCount: '~4,000 trees',
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJa: '六義園',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Rikugien',
    lightUpPeriod: 'Mid March – Early April',
    lightUpHours: '18:00 – 21:00',
    description:
      'This Edo-period strolling garden features a magnificent weeping cherry (shidarezakura) at its entrance that cascades like a pink waterfall when illuminated. The intimate garden setting creates a serene night-viewing experience.',
    tips: 'Enter from the Somei-mon gate (closest to JR Komagome station) for the most dramatic first impression. The garden limits visitor numbers, so arrive early.',
    treeCount: '~75 trees',
  },
  {
    id: 8,
    name: 'Miharu Takizakura',
    nameJa: '三春滝桜',
    location: 'Fukushima',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8+Miharu+Takizakura',
    lightUpPeriod: 'Mid – Late April',
    lightUpHours: '18:00 – 21:00',
    description:
      'A thousand-year-old weeping cherry tree — one of Japan\'s three great cherry trees. When lit up at night, this ancient giant appears to glow from within, its cascading branches creating a living curtain of blossoms against the dark hillside.',
    tips: 'This is a single monumental tree, not a park. Arrive before sunset to appreciate the scale, then stay for the illumination. Parking fills up quickly on weekends.',
    treeCount: '1 ancient tree (1,000+ years old)',
  },
]
