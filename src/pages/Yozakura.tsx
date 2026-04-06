import { yozakuraSpots } from '../data/yozakuraSpots'

function Yozakura() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-gray-950 to-gray-950" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-amber-300/80 text-sm tracking-widest uppercase mb-3">
            Night Illumination Guide
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">
            夜桜 <span className="text-sakura-300">Yozakura</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of cherry blossoms illuminated under the night sky.
            Discover Japan's most enchanting yozakura spots with lighting schedules,
            insider tips, and the best times to visit.
          </p>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yozakuraSpots.map((spot) => (
            <article
              key={spot.id}
              className="group bg-gray-900/80 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/30 transition-colors"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      'https://placehold.co/600x400/1a1a2e/f7a0b0?text=Night+Sakura'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {spot.name}
                  </h3>
                  <p className="text-amber-300/90 text-sm">{spot.nameJa}</p>
                </div>
                <div className="absolute top-3 right-3 bg-gray-950/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="text-xs text-gray-300">{spot.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Meta Row */}
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-full">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    {spot.lightingHours}
                  </span>
                  <span className="flex items-center gap-1.5 bg-sakura-500/10 text-sakura-300 px-2.5 py-1 rounded-full">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {spot.season}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">
                    {spot.treeCount}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {spot.description}
                </p>

                {/* Tip */}
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-3">
                  <p className="text-xs text-amber-200/70 leading-relaxed">
                    <span className="font-semibold text-amber-300">Tip: </span>
                    {spot.tip}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Yozakura
