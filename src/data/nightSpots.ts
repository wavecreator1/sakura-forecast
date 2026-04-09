export interface NightSpot {
  id: number
  name: string
  nameJp: string
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
    nameJp: '目黒川',
    location: 'Tokyo',
    description:
      'Over 800 cherry trees line both banks of this canal, lit by thousands of pink paper lanterns after dark. The blossoms reflect on the water surface, creating a magical double canopy of light.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
    illuminationHours: 'Sunset – 21:00',
    season: 'Late March – Early April',
    tips: [
      'Arrive before sunset to secure a good walking spot along the east bank.',
      'Nakameguro Station (Tōkyū / Hibiya Line) is the closest access point.',
      'Street food vendors set up along the river — try sakura-flavoured treats.',
    ],
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJp: '千鳥ヶ淵',
    location: 'Tokyo',
    description:
      'The Imperial Palace moat is illuminated with soft green and white lights, highlighting 260 cherry trees arching over the water. Rowboats are available for an unforgettable nighttime cruise beneath the blossoms.',
    image: 'https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?w=600&q=80',
    illuminationHours: '18:00 – 22:00 (boat rental until 20:30)',
    season: 'Late March – Early April',
    tips: [
      'Book rowboats early in the evening — queues grow fast after 19:00.',
      'Walk from Kudanshita Station (Tōzai / Hanzōmon / Shinjuku Lines).',
      'Bring a tripod for long-exposure photos of the lit-up moat.',
    ],
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJp: '円山公園',
    location: 'Kyoto',
    description:
      'Kyoto\'s most famous night-viewing spot centers on a magnificent weeping cherry tree (shidarezakura) bathed in warm spotlights. The surrounding park is dotted with lanterns and lively yatai food stalls.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    illuminationHours: '18:00 – 22:00',
    season: 'Late March – Mid April',
    tips: [
      'The iconic weeping cherry is at the centre of the park — follow the crowds.',
      'Combine with a stroll through illuminated Yasaka Shrine next door.',
      'Weeknights are significantly less crowded than weekends.',
    ],
  },
  {
    id: 4,
    name: 'Hirosaki Castle',
    nameJp: '弘前城',
    location: 'Aomori',
    description:
      'One of Japan\'s top-three cherry blossom destinations. At night, 2,600 trees and the castle are illuminated, and fallen petals form a luminous pink carpet on the outer moat — the famous "hanaikada" (flower raft).',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
    illuminationHours: '18:30 – 22:00',
    season: 'Late April – Early May',
    tips: [
      'Visit toward the end of peak bloom to see the petal-filled moat (hanaikada).',
      'The west moat and Shunyo Bridge are the best night photography spots.',
      'The festival runs ~23 April – 5 May; check dates for 2026.',
    ],
  },
  {
    id: 5,
    name: 'Osaka Castle Park',
    nameJp: '大阪城公園',
    location: 'Osaka',
    description:
      'Roughly 3,000 cherry trees surround the floodlit golden castle tower. The Nishinomaru Garden inside the castle grounds offers a ticketed, less-crowded illumination with the castle as a backdrop.',
    image: 'https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=600&q=80',
    illuminationHours: '18:00 – 21:00 (Nishinomaru Garden)',
    season: 'Late March – Mid April',
    tips: [
      'Buy Nishinomaru Garden tickets (¥350) for the best illuminated views.',
      'Bring a picnic mat — evening hanami is allowed inside the garden.',
      'The park\'s free areas along the outer moat are also beautifully lit.',
    ],
  },
  {
    id: 6,
    name: 'Takada Castle Site Park',
    nameJp: '高田城址公園',
    location: 'Niigata',
    description:
      'Ranked among Japan\'s three great night cherry-blossom spots. About 4,000 trees are illuminated by over 3,000 lanterns, and the three-story turret reflected in the moat is spectacular.',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    illuminationHours: '18:00 – 22:00',
    season: 'Early – Mid April',
    tips: [
      'Head to the Sakura Road along the west moat for the best lantern tunnel.',
      'Try local Niigata sake at the festival stalls inside the park.',
      'The castle turret observation deck is open during the festival.',
    ],
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJp: '六義園',
    location: 'Tokyo',
    description:
      'This Edo-period strolling garden spotlights a towering 15-metre weeping cherry tree at its entrance. The carefully designed lighting accentuates the cascading branches against the night sky.',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80',
    illuminationHours: '18:00 – 21:00 (last entry 20:30)',
    season: 'Late March – Early April',
    tips: [
      'Enter from the Somei-mon gate (near Komagome Station) for shortest queues.',
      'The weeping cherry is most dramatic in the first few days of bloom.',
      'Photography is best from the stone bridge looking back at the tree.',
    ],
  },
  {
    id: 8,
    name: 'Matsumoto Castle',
    nameJp: '松本城',
    location: 'Nagano',
    description:
      'The jet-black "Crow Castle" is dramatically lit against a backdrop of 300 illuminated Somei Yoshino and weeping cherry trees. The reflection in the moat doubles the spectacle.',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80',
    illuminationHours: '17:30 – 21:00',
    season: 'Mid – Late April',
    tips: [
      'Stand on the red bridge (Uzumi-bashi) for the classic reflection shot.',
      'The Sakura Festival includes taiko drumming and tea ceremony events.',
      'Combine with a day trip to nearby Takato Castle ruins for even more sakura.',
    ],
  },
]
