const nightSpots = [
  {
    id: 1,
    name: 'Chidorigafuchi',
    nameJa: '千鳥ヶ淵',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Chidorigafuchi',
    trees: '~260 trees',
    illuminationHours: '18:00 - 22:00',
    period: 'Late March - Early April',
    description:
      'The moat along the Imperial Palace is lined with cherry trees whose branches arch over the water, creating magical reflections. Rowboats glide beneath illuminated canopies of blossoms.',
    tips: 'Rent a rowboat for the most magical perspective. Arrive by 17:30 to queue before lights turn on. Weekdays are significantly less crowded.',
  },
  {
    id: 2,
    name: 'Meguro River',
    nameJa: '目黒川',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Meguro+River',
    trees: '~800 trees',
    illuminationHours: '17:00 - 21:00',
    period: 'Late March - Mid April',
    description:
      'Approximately 800 cherry trees line both banks of this urban river, creating a tunnel of pink. At night, warm lantern light transforms the scene into a dreamlike corridor of blossoms.',
    tips: 'Walk from Nakameguro Station upstream for the best illuminated stretch. Street food stalls open along the river. Visit on a calm night to see perfect reflections.',
  },
  {
    id: 3,
    name: 'Maruyama Park',
    nameJa: '円山公園',
    location: 'Kyoto',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Maruyama+Park',
    trees: '~680 trees',
    illuminationHours: '18:00 - 01:00',
    period: 'Late March - Mid April',
    description:
      'Home to the famous weeping cherry tree (shidarezakura) that becomes the star of Kyoto at night. The ancient tree, over 80 years old, is dramatically lit from below, its cascading branches glowing against the dark sky.',
    tips: 'The iconic weeping cherry is best photographed from the southeast side. Bring a blanket for a late-night picnic beneath the blossoms. Food vendors stay open late.',
  },
  {
    id: 4,
    name: 'Osaka Castle Park',
    nameJa: '大阪城公園',
    location: 'Osaka',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Osaka+Castle',
    trees: '~3,000 trees',
    illuminationHours: '18:00 - 21:00',
    period: 'Late March - Mid April',
    description:
      'The illuminated castle tower rises behind thousands of cherry trees in the Nishinomaru Garden. The contrast of the golden castle against soft pink blossoms and dark sky is unforgettable.',
    tips: 'Nishinomaru Garden charges a small admission fee (¥350) but is worth it for the castle backdrop. The garden closes at 21:00 sharp; arrive by 19:00 for the best experience.',
  },
  {
    id: 5,
    name: 'Takada Castle Ruins',
    nameJa: '高田城址公園',
    location: 'Niigata',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Takada+Castle',
    trees: '~4,000 trees',
    illuminationHours: '18:00 - 23:00',
    period: 'Early - Mid April',
    description:
      'Considered one of Japan\'s three great night cherry blossom spots. Around 4,000 trees are lit by 3,000 lanterns along the castle moat, creating an ocean of soft pink light reflected in the still water.',
    tips: 'This is a must-see for serious yozakura fans. The reflection in the moat is the iconic shot — find a spot on the east bridge. Shuttle buses run from Takada Station during the festival.',
  },
  {
    id: 6,
    name: 'Hirosaki Castle',
    nameJa: '弘前城',
    location: 'Aomori',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Hirosaki+Castle',
    trees: '~2,600 trees',
    illuminationHours: '18:30 - 22:00',
    period: 'Late April - Early May',
    description:
      'As petals fall into the castle moat, the water turns into a pink carpet — the famous "hanaikada" (flower raft). At night, illuminated trees and the petal-covered moat create a scene of ethereal beauty.',
    tips: 'Time your visit for late bloom when petals blanket the moat. The pink petal carpet (hanaikada) at the outer moat is most visible from the Shunyo Bridge. Blooms later than Tokyo — plan for late April.',
  },
  {
    id: 7,
    name: 'Rikugien Garden',
    nameJa: '六義園',
    location: 'Tokyo',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Rikugien',
    trees: '~40 trees (featured weeping cherry)',
    illuminationHours: '18:00 - 21:00',
    period: 'Late March - Early April',
    description:
      'This Edo-period strolling garden centers its spring display around a magnificent weeping cherry tree, over 15 meters wide. Dramatic uplighting makes the cascading blossoms glow like a waterfall of light.',
    tips: 'Lines form early at the Somei Gate — arrive 30 minutes before illumination begins. The main weeping cherry near the entrance is the star, but walk the full garden path for hidden views. ¥300 admission.',
  },
  {
    id: 8,
    name: 'Tsuruga Castle',
    nameJa: '鶴ヶ城',
    location: 'Fukushima',
    image: 'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8+Tsuruga+Castle',
    trees: '~1,000 trees',
    illuminationHours: '18:30 - 21:30',
    period: 'Mid - Late April',
    description:
      'Also known as Aizu-Wakamatsu Castle, this beautifully reconstructed fortress is surrounded by over 1,000 cherry trees. The red-tiled castle roof and white walls glow amid pink blossoms under night illumination.',
    tips: 'Climb the castle tower (open until 20:30 during festival) for aerial views of the illuminated trees below. Pair with a visit to nearby Iimoriyama hill. Less crowded than the major city spots.',
  },
];

function NightViewing() {
  return (
    <div className="bg-gray-950 min-h-screen -mt-px">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-gray-950 to-gray-950 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* decorative "stars" */}
          <div className="absolute top-8 left-[10%] w-1 h-1 bg-white rounded-full opacity-60" />
          <div className="absolute top-20 left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-40" />
          <div className="absolute top-12 right-[15%] w-1 h-1 bg-white rounded-full opacity-50" />
          <div className="absolute top-32 right-[30%] w-0.5 h-0.5 bg-white rounded-full opacity-30" />
          <div className="absolute top-6 right-[45%] w-0.5 h-0.5 bg-white rounded-full opacity-50" />
          <div className="absolute top-24 left-[60%] w-1 h-1 bg-white rounded-full opacity-40" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-block text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
            夜桜 — Yozakura
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Night Viewing Guide
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the enchanting beauty of cherry blossoms under the stars. Discover Japan's
            best illuminated nighttime sakura spots, where warm lantern light transforms familiar
            parks into scenes of ethereal wonder.
          </p>
        </div>
      </div>

      {/* Tips banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6 mb-12">
        <div className="bg-amber-950/40 border border-amber-800/30 rounded-2xl p-6 backdrop-blur-sm">
          <h2 className="font-serif text-lg font-semibold text-amber-300 mb-2 flex items-center gap-2">
            <span aria-hidden="true">🏮</span> General Yozakura Tips
          </h2>
          <ul className="text-amber-100/80 text-sm space-y-1.5 list-disc list-inside">
            <li>Dress warmly — spring nights in Japan can drop to 5-10&deg;C.</li>
            <li>Bring a small tarp or blanket if you plan to sit and enjoy the view.</li>
            <li>Tripods are often restricted in crowded areas; a fast lens helps for photos.</li>
            <li>Weekday evenings are far less crowded than weekends at popular spots.</li>
          </ul>
        </div>
      </div>

      {/* Spots */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nightSpots.map((spot) => (
            <div
              key={spot.id}
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-700/50 transition-colors"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={spot.image}
                  alt={`${spot.name} night cherry blossoms`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/600x400/1a1a2e/f5a0b0?text=%F0%9F%8C%B8';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">
                    {spot.name}
                  </h3>
                  <span className="text-amber-300 text-sm">{spot.nameJa} — {spot.location}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                {/* Meta row */}
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded-full">
                    <span aria-hidden="true">🌙</span> {spot.illuminationHours}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-pink-400 bg-pink-950/50 px-2.5 py-1 rounded-full">
                    <span aria-hidden="true">🌸</span> {spot.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full">
                    {spot.trees}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">{spot.description}</p>

                {/* Tips */}
                <div className="bg-gray-800/50 rounded-xl p-3.5 border border-gray-700/50">
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
                    Insider Tips
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">{spot.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NightViewing;
