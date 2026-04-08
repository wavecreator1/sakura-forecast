import { yozakuraSpots } from '../data/yozakura'

function Yozakura() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-gray-950 to-gray-950" />
        <div className="absolute top-6 left-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">
            Night Illumination Guide
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-sakura-300 to-amber-300">
              夜桜
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience Japan's cherry blossoms after dark. Discover the most breathtaking
            illuminated sakura spots where light, water, and petals create unforgettable night-time magic.
          </p>
        </div>
      </div>

      {/* Tips Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gray-900/80 border border-amber-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
          <div className="text-3xl flex-shrink-0">🏮</div>
          <div>
            <h2 className="font-serif text-lg font-semibold text-amber-300 mb-1">
              Night Viewing Tips
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Arrive 30 minutes before illumination starts to find a good spot. Bring a light jacket —
              spring nights can drop to 5–10 °C. A small tripod is essential for photography; most spots
              ban flash. Check official sites for exact dates, as schedules shift with bloom timing.
            </p>
          </div>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yozakuraSpots.map((spot) => (
            <div
              key={spot.id}
              className="group bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.onerror = null
                    img.src =
                      'https://placehold.co/600x300/1a1a2e/e2a87e?text=🌙🌸'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">
                    {spot.name}
                  </h3>
                  <span className="text-sm text-amber-300">{spot.nameJa}</span>
                </div>
                <div className="absolute top-3 right-3 bg-gray-950/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="text-xs font-medium text-amber-400">{spot.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{spot.description}</p>

                {/* Lightup Info */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                    <span className="text-amber-400 text-sm">💡</span>
                    <div>
                      <p className="text-xs text-gray-500">Illumination</p>
                      <p className="text-sm font-medium text-amber-300">{spot.lightupHours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-lg px-3 py-2">
                    <span className="text-pink-400 text-sm">🌸</span>
                    <div>
                      <p className="text-xs text-gray-500">Period</p>
                      <p className="text-sm font-medium text-pink-300">{spot.period}</p>
                    </div>
                  </div>
                </div>

                {/* Tip */}
                <div className="bg-amber-500/5 border border-amber-500/10 rounded-lg p-3 mb-4">
                  <p className="text-xs text-amber-200/80">
                    <span className="font-semibold text-amber-400">Tip: </span>
                    {spot.tip}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {spot.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
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
