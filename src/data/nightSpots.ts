export interface NightSpot {
  id: number;
  name: string;
  nameJp: string;
  location: string;
  image: string;
  description: string;
  illuminationHours: string;
  illuminationPeriod: string;
  tips: string[];
  lanternCount?: string;
}

export const nightSpots: NightSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJp: '目黒川',
    location: 'Nakameguro, Tokyo',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80',
    description:
      'Over 800 cherry trees line both banks of the Meguro River, creating a magical pink tunnel illuminated by soft warm lights. The blossoms reflecting on the water create a dreamlike atmosphere.',
    illuminationHours: '17:00 – 21:00',
    illuminationPeriod: 'Late March – Early April',
    tips: [
      'Visit on weekdays to avoid the heaviest crowds',
      'Walk from Nakameguro Station toward Ikejiri-Ohashi for the best views',
      'Street food stalls line the river — try sakura mochi and warm amazake',
    ],
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJp: '千鳥ヶ淵',
    location: 'Chiyoda, Tokyo',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    description:
      'The moat surrounding the Imperial Palace becomes a canvas of illuminated cherry blossoms. Rent a rowboat to drift beneath the glowing canopy of over 260 somei-yoshino trees.',
    illuminationHours: '18:00 – 22:00',
    illuminationPeriod: 'Late March – Early April',
    tips: [
      'Boat rental lines can exceed 90 minutes — arrive before 18:00',
      'The walkway along the moat offers stunning photo opportunities',
      'Combine with a visit to nearby Yasukuni Shrine, also beautifully lit',
    ],
  },
  {
    id: 3,
    name: 'Hirosaki Castle',
    nameJp: '弘前城',
    location: 'Hirosaki, Aomori',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80',
    description:
      'One of Japan\'s top three cherry blossom spots, Hirosaki Castle features 2,600 trees of 52 varieties. The "sakura carpet" of fallen petals on the castle moat is iconic, and even more stunning at night.',
    illuminationHours: '18:30 – 22:00',
    illuminationPeriod: 'Late April – Early May',
    tips: [
      'Peak bloom here is later than Tokyo — usually late April',
      'The pink moat (花筏 hanaikada) is best 3-5 days after full bloom',
      'Enter through the east gate for the classic castle-and-sakura photo',
    ],
  },
  {
    id: 4,
    name: 'Maruyama Park',
    nameJp: '円山公園',
    location: 'Higashiyama, Kyoto',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
    description:
      'Home to the famous weeping cherry tree (shidarezakura), Maruyama Park\'s centerpiece is a massive tree over 80 years old that is dramatically lit from below, creating an ethereal glow against the night sky.',
    illuminationHours: '18:00 – 22:00 (lightup), park open 24h',
    illuminationPeriod: 'Late March – Mid April',
    tips: [
      'The weeping cherry is the star — find a vantage point early',
      'Combine with an evening stroll through nearby Gion district',
      'Local food vendors set up stalls throughout the park at night',
    ],
  },
  {
    id: 5,
    name: 'Osaka Castle Park',
    nameJp: '大阪城公園',
    location: 'Chuo, Osaka',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
    description:
      'The illuminated Osaka Castle tower rising above 3,000 cherry trees is one of Kansai\'s most photogenic night scenes. The Nishinomaru Garden offers the best combination of castle and sakura views.',
    illuminationHours: '18:00 – 21:00',
    illuminationPeriod: 'Late March – Mid April',
    tips: [
      'Nishinomaru Garden charges a small admission fee (¥350) but is worth it',
      'The castle itself is illuminated year-round, but spring is special',
      'Bring a tripod for long-exposure photos of the castle with blossoms',
    ],
  },
  {
    id: 6,
    name: 'Takada Castle',
    nameJp: '高田城址公園',
    location: 'Joetsu, Niigata',
    image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
    description:
      'Ranked among Japan\'s top three night cherry blossom viewing spots, Takada Castle features around 4,000 trees illuminated by approximately 3,000 paper lanterns (bonbori), reflecting beautifully in the castle moat.',
    illuminationHours: '18:00 – 21:00',
    illuminationPeriod: 'Early – Mid April',
    lanternCount: '~3,000 bonbori lanterns',
    tips: [
      'The lantern reflections in the moat are the signature photo here',
      'Less crowded than Tokyo spots — a hidden gem of Niigata',
      'Try the local specialty sasadango (bamboo leaf rice cakes) from vendors',
    ],
  },
  {
    id: 7,
    name: 'Arashiyama',
    nameJp: '嵐山',
    location: 'Ukyo, Kyoto',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    description:
      'The iconic Togetsukyo Bridge with illuminated cherry blossoms along the hillside and riverbank creates a timeless scene. The Hanatouro lantern event sometimes overlaps with cherry blossom season for double the magic.',
    illuminationHours: '18:00 – 21:30',
    illuminationPeriod: 'Mid March – Early April',
    tips: [
      'Cross the Togetsukyo Bridge at dusk for magical golden-hour photos',
      'The bamboo grove is also lit during special events — check dates',
      'Take the Hankyu line to Arashiyama Station for easy access',
    ],
  },
  {
    id: 8,
    name: 'Kenrokuen Garden',
    nameJp: '兼六園',
    location: 'Kanazawa, Ishikawa',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
    description:
      'One of Japan\'s three great gardens opens for free during spring illumination, with over 400 cherry trees bathed in warm light. The reflection of illuminated blossoms in Kasumigaike Pond is breathtaking.',
    illuminationHours: '18:00 – 21:30',
    illuminationPeriod: 'Early – Mid April',
    tips: [
      'Free admission during the cherry blossom lightup event',
      'The Kotoji stone lantern with cherry blossoms is the classic photo',
      'Visit nearby Kanazawa Castle park which is also illuminated',
    ],
  },
];
