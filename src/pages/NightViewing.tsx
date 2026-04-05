import { nightSpots } from '../data/nightSpots';

export default function NightViewing() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-gray-950 to-gray-950" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-amber-400 font-serif text-lg tracking-widest mb-3">
            夜桜ガイド
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-pink-300 via-amber-200 to-pink-300 bg-clip-text text-transparent">
            Night Viewing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience Japan's cherry blossoms under the stars. Our curated guide
            to the most breathtaking illuminated yozakura spots — where warm
            lantern light meets delicate pink petals.
          </p>
        </div>

        {/* decorative floating dots */}
        <div className="absolute top-10 left-1/4 w-2 h-2 rounded-full bg-amber-400/40 animate-pulse" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 rounded-full bg-pink-400/30 animate-pulse delay-300" />
        <div className="absolute bottom-16 left-1/3 w-1 h-1 rounded-full bg-amber-300/50 animate-pulse delay-700" />
      </section>

      {/* Tips banner */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-gray-900/80 border border-amber-900/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="text-3xl shrink-0">🏮</div>
          <div>
            <h2 className="text-amber-300 font-serif text-xl font-semibold mb-2">
              Yozakura Etiquette
            </h2>
            <ul className="text-gray-400 space-y-1 text-sm leading-relaxed list-disc list-inside">
              <li>Keep noise levels low — night viewing is a contemplative experience</li>
              <li>Bring a small blanket or portable seat for extended viewing</li>
              <li>Tripods are welcome at most spots, but be mindful of walkways</li>
              <li>Many illuminations end by 21:00–22:00 — arrive early for the best experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spots grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid gap-8">
          {nightSpots.map((spot, idx) => (
            <article
              key={spot.id}
              className={`bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden md:grid md:grid-cols-2 ${
                idx % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative h-64 md:h-auto min-h-[300px] ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={spot.image}
                  alt={`${spot.name} night cherry blossoms`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-950/40" />
                {spot.lanternCount && (
                  <span className="absolute top-4 left-4 bg-amber-500/90 text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                    {spot.lanternCount}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className={`p-6 md:p-8 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="text-2xl font-serif font-bold text-pink-200">
                    {spot.name}
                  </h3>
                  <span className="text-amber-400/70 font-serif text-sm">
                    {spot.nameJp}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{spot.location}</p>

                <p className="text-gray-300 leading-relaxed mb-5 text-sm">
                  {spot.description}
                </p>

                {/* Illumination info */}
                <div className="flex flex-wrap gap-4 mb-5">
                  <div className="bg-gray-800/80 rounded-xl px-4 py-3 flex-1 min-w-[140px]">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Hours
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {spot.illuminationHours}
                    </p>
                  </div>
                  <div className="bg-gray-800/80 rounded-xl px-4 py-3 flex-1 min-w-[140px]">
                    <p className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      Season
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {spot.illuminationPeriod}
                    </p>
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <p className="text-amber-300/80 text-xs font-semibold uppercase tracking-wider mb-2">
                    Tips
                  </p>
                  <ul className="space-y-1.5">
                    {spot.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-2"
                      >
                        <span className="text-amber-500/70 mt-0.5">✦</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-gray-800 py-10 text-center px-4">
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Illumination schedules may change due to weather or bloom conditions.
          Check official venue websites for the latest information before visiting.
        </p>
      </section>
    </div>
  );
}
