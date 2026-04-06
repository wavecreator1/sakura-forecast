export interface YozakuraSpot {
  id: number
  name: string
  nameJa: string
  location: string
  image: string
  lightingHours: string
  season: string
  treeCount: string
  description: string
  tip: string
}

export const yozakuraSpots: YozakuraSpot[] = [
  {
    id: 1,
    name: 'Meguro River',
    nameJa: '目黒川',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Meguro+River',
    lightingHours: '17:00 - 21:00',
    season: 'Late March - Early April',
    treeCount: '~800 trees',
    description:
      'Over 800 cherry trees line both banks of the Meguro River, creating a dreamy pink tunnel illuminated by soft lanterns. The blossoms reflect on the water surface, doubling the magical effect.',
    tip: 'Walk from Nakameguro Station toward Ikejiri-Ohashi for fewer crowds. The reflection photos are best captured from the small bridges.',
  },
  {
    id: 2,
    name: 'Chidorigafuchi',
    nameJa: '千鳥ヶ淵',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Chidorigafuchi',
    lightingHours: '18:00 - 22:00',
    season: 'Late March - Early April',
    treeCount: '~260 trees',
    description:
      'The moat surrounding the Imperial Palace becomes a mirror reflecting illuminated sakura. Night boat rides through the tunnel of lit cherry blossoms are an unforgettable experience.',
    tip: 'Book boat rides early in the day as evening slots fill up quickly. The walkway on the west side offers the best vantage points for photography.',
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJa: '円山公園',
    location: 'Kyoto',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Maruyama+Park',
    lightingHours: '18:00 - 01:00',
    season: 'Late March - Mid April',
    treeCount: '~680 trees',
    description:
      'Home to Kyoto\'s most famous weeping cherry tree (shidarezakura), dramatically lit from below. The ancient tree\'s cascading branches create an ethereal canopy of pink light.',
    tip: 'Visit after 22:00 when food stalls close and crowds thin out. The weeping cherry is most photogenic from the east side.',
  },
  {
    id: 4,
    name: 'Osaka Castle Park',
    nameJa: '大阪城公園',
    location: 'Osaka',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Osaka+Castle',
    lightingHours: '18:00 - 21:00',
    season: 'Late March - Mid April',
    treeCount: '~3,000 trees',
    description:
      'The illuminated castle tower serves as a stunning backdrop to thousands of lit cherry trees in the Nishinomaru Garden. The contrast of the white castle against pink blossoms is iconic.',
    tip: 'Nishinomaru Garden charges a small admission fee at night but is far less crowded than the free areas. Bring a tripod for long-exposure shots of the castle.',
  },
  {
    id: 5,
    name: 'Takada Castle Ruins',
    nameJa: '高田城址公園',
    location: 'Niigata',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Takada+Castle',
    lightingHours: '18:00 - 21:00',
    season: 'Early - Mid April',
    treeCount: '~4,000 trees',
    description:
      'Ranked among Japan\'s top three night cherry blossom spots. Over 3,000 bonbori lanterns illuminate the castle moat, creating a spectacular reflection of pink and gold on the water.',
    tip: 'Visit on a windless night for perfect mirror reflections in the moat. The Sakura Road along the west moat is the most photogenic stretch.',
  },
  {
    id: 6,
    name: 'Hirosaki Castle',
    nameJa: '弘前城',
    location: 'Aomori',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Hirosaki+Castle',
    lightingHours: '18:30 - 22:00',
    season: 'Late April - Early May',
    treeCount: '~2,600 trees',
    description:
      'Famous for its "hanaikada" (flower rafts) - fallen petals floating on the castle moat create a pink carpet effect. The lit castle and cherry tunnel over the moat are mesmerizing at night.',
    tip: 'The petal carpet (hanaikada) on the outer moat appears a few days after full bloom. Check local forecasts for peak petal-fall timing.',
  },
  {
    id: 7,
    name: 'Arashiyama',
    nameJa: '嵐山',
    location: 'Kyoto',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Arashiyama',
    lightingHours: '18:00 - 21:30',
    season: 'Late March - Mid April',
    treeCount: '~1,500 trees',
    description:
      'The Togetsukyo Bridge area transforms at night with cherry trees illuminated along the Katsura River. The bamboo grove nearby also features special lighting during the sakura season.',
    tip: 'Combine with the Hanatouro illumination event if dates overlap. Cross to the south side of Togetsukyo Bridge for the best panoramic views.',
  },
  {
    id: 8,
    name: 'Miharu Takizakura',
    nameJa: '三春滝桜',
    location: 'Fukushima',
    image: 'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Miharu+Takizakura',
    lightingHours: '18:00 - 21:00',
    season: 'Mid - Late April',
    treeCount: '1 ancient tree',
    description:
      'A single 1,000-year-old weeping cherry tree, designated a national natural monument. When illuminated at night, its massive cascading branches look like a waterfall of pink light against the dark sky.',
    tip: 'This tree stands alone in a field - dress warmly as the open area gets cold at night. Arrive before sunset to watch the transition from daylight to illumination.',
  },
]
