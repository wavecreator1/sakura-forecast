export interface NightSpot {
  id: number
  name: string
  nameJa: string
  location: string
  description: string
  image: string
  illuminationHours: string
  season: string
  tips: string[]
}

export const nightSpots: NightSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJa: '目黒川',
    location: 'Tokyo',
    description:
      'Over 800 cherry trees along a 3.8 km stretch are lit with soft pink lanterns, their blossoms reflecting on the water to create a dreamy, tunnel-like corridor.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    illuminationHours: '17:00 – 21:00',
    season: 'Late March – Early April',
    tips: [
      'Walk from Nakameguro Station toward Ikejiri-Ohashi for thinner crowds.',
      'Street-food stalls line the east bank — try sakura mochi and amazake.',
      'Bring a light jacket; temperatures drop sharply after sunset near the water.',
    ],
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJa: '千鳥ヶ淵',
    location: 'Tokyo',
    description:
      'The Imperial Palace moat becomes a glowing mirror at night, with 260 cherry trees illuminated in warm white light. Rowboats glide beneath the blossoms until 20:30.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    illuminationHours: '18:00 – 22:00',
    season: 'Late March – Early April',
    tips: [
      'Book rowboat tickets online early — they sell out fast on weekends.',
      'The green-way path along the moat is wheelchair-accessible.',
      'Combine with a night walk to nearby Yasukuni Shrine for double the sakura.',
    ],
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJa: '円山公園',
    location: 'Kyoto',
    description:
      'Kyoto\'s most popular hanami park centers around a magnificent weeping cherry tree (shidarezakura) dramatically up-lit against the dark sky — an iconic sight.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    illuminationHours: '18:00 – 01:00',
    season: 'Late March – Mid April',
    tips: [
      'Arrive before 18:00 to secure a picnic spot near the weeping cherry.',
      'Late-night hours (after 22:00) are much quieter for photography.',
      'Nearby Yasaka Shrine is free to enter and beautifully lit year-round.',
    ],
  },
  {
    id: 4,
    name: 'Osaka Castle Park',
    nameJa: '大阪城公園',
    location: 'Osaka',
    description:
      'Roughly 3,000 cherry trees surround the illuminated castle keep. The Nishinomaru Garden hosts a special ticketed night event with warm lanterns and food vendors.',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    illuminationHours: '18:00 – 21:00',
    season: 'Late March – Mid April',
    tips: [
      'Purchase Nishinomaru Garden evening tickets (¥350) at the gate — no pre-booking needed.',
      'The castle tower lit from below with sakura in the foreground is a top photo spot.',
      'Take the JR Loop Line to Osakajokoen Station for the shortest walk.',
    ],
  },
  {
    id: 5,
    name: 'Hirosaki Castle',
    nameJa: '弘前城',
    location: 'Aomori',
    description:
      'The outer moat becomes a surreal "sakura carpet" of floating petals, lit from below. 2,600 trees across the park are illuminated in white, pink, and gold light.',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80',
    illuminationHours: '18:30 – 22:00',
    season: 'Late April – Early May',
    tips: [
      'Visit toward the end of bloom for the famous petal-carpet on the moat.',
      'The heart-shaped reflection between two trees is near the West Moat — look for the crowd.',
      'Aomori nights are chilly even in late April; dress warmly.',
    ],
  },
  {
    id: 6,
    name: 'Takada Castle',
    nameJa: '高田城',
    location: 'Niigata',
    description:
      'One of Japan\'s "Top Three Night Cherry Blossom" spots. Around 4,000 trees are lit by 3,000 traditional paper lanterns (bonbori), reflecting off the castle moat.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    illuminationHours: '18:00 – 23:00',
    season: 'Early – Mid April',
    tips: [
      'Free shuttle buses run from Takada Station during the festival period.',
      'Walk the full loop around the moat — each angle offers a different composition.',
      'Try local sasadango (bamboo-leaf rice cakes) from festival vendors.',
    ],
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJa: '六義園',
    location: 'Tokyo',
    description:
      'A grand weeping cherry tree at the entrance is lit dramatically, its cascading branches glowing like a pink waterfall. The Edo-period garden adds a refined, quiet atmosphere.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    illuminationHours: '18:00 – 21:00',
    season: 'Late March – Early April',
    tips: [
      'Enter from the Somei-mon gate (2 min from Komagome Station) to skip the main-gate queue.',
      'Tripods are allowed — ideal for long-exposure shots of the weeping cherry.',
      'The garden limits admission, so arrive by 17:30 on weekends.',
    ],
  },
  {
    id: 8,
    name: 'Matsumoto Castle',
    nameJa: '松本城',
    location: 'Nagano',
    description:
      'The jet-black "Crow Castle" is illuminated alongside 300 Somei Yoshino trees. The contrast between dark walls and pale blossoms, doubled in the moat, is extraordinary.',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80',
    illuminationHours: '17:30 – 21:00',
    season: 'Mid – Late April',
    tips: [
      'The best reflection shot is from the southwest corner of the moat.',
      'A free "Cherry Blossom Festival" runs during peak bloom with taiko drums and tea ceremony.',
      'Pair your visit with a soak at Matsumoto\'s Asama Onsen, 20 minutes by bus.',
    ],
  },
]
