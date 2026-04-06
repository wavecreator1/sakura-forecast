import { yozakuraSpots } from '../data/yozakura'

function NightViewing() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">
            夜桜 &middot; Yozakura
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Night Viewing Guide
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            When the sun sets, Japan's cherry blossoms transform under warm
            lantern light and LED illumination. Discover the best spots to
            experience the magic of yozakura — nighttime hanami.
          </p>
        </div>
      </div>

      {/* Tips banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-4 mb-12">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
          <span className="text-2xl shrink-0" aria-hidden="true">🏮</span>
          <div>
            <h2 className="text-amber-300 font-semibold mb-1">Planning Your Night Viewing</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Most illumination events are free and run during peak bloom only (typically 1–2 weeks).
              Arrive 30 minutes before lighting to secure a good spot. Bring a light jacket — spring
              evenings can be chilly. Tripods are welcome at most locations for photography.
            </p>
          </div>
        </div>
      </div>

      {/* Spots */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yozakuraSpots.map((spot) => (
            <article
              key={spot.id}
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/30 transition-colors"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      'https://placehold.co/600x300/1a1a2e/e0a040?text=%F0%9F%8C%B8'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">
                    {spot.name}
                  </h3>
                  <p className="text-amber-300 text-sm">{spot.nameJp} &middot; {spot.location}</p>
                </div>
                <div className="absolute top-3 right-3 bg-gray-950/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="text-xs text-amber-300 font-medium">
                    🌸 {spot.treeCount} trees
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{spot.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                      Illumination
                    </p>
                    <p className="text-amber-300 text-sm font-medium">{spot.illuminationHours}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                      Best Dates
                    </p>
                    <p className="text-gray-200 text-sm font-medium">{spot.bestDates}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-amber-500/5 border border-amber-500/10 rounded-lg p-3">
                  <span className="text-amber-400 text-sm mt-0.5 shrink-0">💡</span>
                  <p className="text-amber-200/80 text-xs leading-relaxed">{spot.tip}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NightViewing
