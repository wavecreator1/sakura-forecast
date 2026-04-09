import { yozakuraSpots } from '../data/yozakura'

function Yozakura() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-amber-500/30 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/3 w-48 h-48 bg-sakura-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/2 w-56 h-56 bg-amber-400/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">
            Night Illumination Guide
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            夜桜
            <span className="block text-2xl sm:text-3xl mt-2 text-sakura-300">
              Yozakura — Night Cherry Blossoms
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the ethereal beauty of cherry blossoms illuminated against the night sky.
            Discover Japan's most enchanting yozakura spots with light-up schedules and viewing tips.
          </p>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yozakuraSpots.map((spot) => (
            <div
              key={spot.id}
              className="group relative bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/600x400/1a1a2e/f7a0b0?text=%F0%9F%8C%B8'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-serif text-xl font-bold text-white">{spot.name}</h3>
                  <p className="text-amber-400 text-sm font-medium">{spot.nameJa}</p>
                </div>
                <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-300">{spot.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">{spot.description}</p>

                {/* Light-up Info */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                    <svg
                      className="w-4 h-4 text-amber-400 flex-shrink-0"
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
                    <span className="text-xs text-gray-400">{spot.lightUpPeriod}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                    <svg
                      className="w-4 h-4 text-amber-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-xs text-gray-400">{spot.lightUpHours}</span>
                  </div>
                </div>

                {/* Tree Count */}
                <div className="flex items-center gap-2">
                  <span className="text-sakura-400 text-sm">🌸</span>
                  <span className="text-xs text-sakura-300">{spot.treeCount}</span>
                </div>

                {/* Tips */}
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm mt-0.5">💡</span>
                    <div>
                      <p className="text-xs font-medium text-amber-400 mb-1">Viewing Tip</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{spot.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Light-up schedules may vary by year and weather conditions.
            Check local announcements before visiting.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Yozakura
