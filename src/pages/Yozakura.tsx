import { yozakuraSpots } from '../data/yozakuraSpots'

function Yozakura() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sakura-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
            Night Illumination Guide
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            夜桜 <span className="text-sakura-400">Yozakura</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the magic of cherry blossoms illuminated against the night sky.
            Discover Japan's most enchanting nighttime hanami spots, complete with
            lighting schedules and insider tips.
          </p>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yozakuraSpots.map((spot) => (
            <div
              key={spot.id}
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/40 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/600x300/1a1a2e/f0a500?text=🌙🌸'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-500/30">
                  <span className="text-sm font-semibold text-amber-400">#{spot.id}</span>
                </div>
                <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gray-700">
                  <span className="text-xs text-gray-300">{spot.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {spot.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {spot.description}
                </p>

                {/* Light-up Info */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400 text-sm" aria-hidden="true">
                      &#x2728;
                    </span>
                    <span className="text-xs text-gray-300">{spot.lightUpPeriod}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400 text-sm" aria-hidden="true">
                      &#x1F553;
                    </span>
                    <span className="text-xs text-gray-300">{spot.lightUpHours}</span>
                  </div>
                </div>

                {/* Tip */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3">
                  <p className="text-xs text-amber-200">
                    <span className="font-semibold text-amber-400">Tip: </span>
                    {spot.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Yozakura
