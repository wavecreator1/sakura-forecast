import { useState } from 'react'
import { yozakuraSpots } from '../data/yozakura'

function Yozakura() {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-pink-300 animate-pulse"
              style={{
                left: `${(i * 17) % 100}%`,
                top: `${(i * 13) % 80}%`,
                animationDelay: `${i * 0.3}s`,
                fontSize: `${10 + (i % 4) * 4}px`,
              }}
            >
              &#x2727;
            </span>
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-amber-300 tracking-widest text-sm uppercase mb-3 font-medium">
            Night Cherry Blossoms
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            夜桜ガイド
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Experience Japan's cherry blossoms under the stars. Discover the most
            enchanting illuminated hanami spots for an unforgettable evening.
          </p>
        </div>
      </section>

      {/* Tips Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-4 mb-12">
        <div className="bg-gray-900/80 border border-amber-500/20 rounded-2xl p-5 sm:p-6 flex items-start gap-4">
          <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
            &#x1F319;
          </span>
          <div>
            <h2 className="text-amber-300 font-semibold mb-1">
              Yozakura Viewing Tips
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dress warmly — spring nights can be chilly. Bring a small mat or
              blanket for riverside spots. Tripods are often restricted near
              castle grounds, so check in advance. Most illuminations run for
              2–3 weeks during peak bloom; check local updates before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* Spots Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {yozakuraSpots.map((spot) => {
            const isOpen = selectedSpot === spot.id
            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setSelectedSpot(isOpen ? null : spot.id)}
                className="text-left group bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = '1'
                        img.src =
                          'https://placehold.co/600x300/1a1a2e/e0a050?text=%E5%A4%9C%E6%A1%9C'
                      }
                    }}
                  />
                  {/* Warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif text-xl font-bold text-white drop-shadow-lg">
                      {spot.name}
                      <span className="ml-2 text-amber-300/80 text-base font-normal">
                        {spot.nameJa}
                      </span>
                    </h3>
                    <span className="text-sm text-gray-300">{spot.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {spot.description}
                  </p>

                  {/* Light-up info */}
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-full">
                      <span aria-hidden="true">&#x1F4A1;</span>
                      {spot.lightUpHours}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-pink-500/10 text-pink-300 px-2.5 py-1 rounded-full">
                      <span aria-hidden="true">&#x1F338;</span>
                      {spot.season}
                    </span>
                  </div>

                  {/* Expandable tip */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                      <p className="text-xs text-amber-200/80 font-medium mb-1">
                        Tip
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {spot.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Yozakura
