import { useState } from 'react'
import { spots } from '../data/spots'

function TopSpots() {
  const [filter, setFilter] = useState<string>('All')
  const allTags = ['All', ...Array.from(new Set(spots.flatMap((s) => s.tags)))]

  const filtered = filter === 'All' ? spots : spots.filter((s) => s.tags.includes(filter))

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sakura-700 mb-2">
          おすすめ花見スポット10選
        </h1>
        <p className="text-lg text-sakura-500 mb-1">Top 10 Hanami Spots</p>
        <p className="text-gray-500 max-w-xl mx-auto">
          東京の名所から山間の絶景まで、日本で最も愛される桜の名所をご紹介します。
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === tag
                ? 'bg-sakura-500 text-white'
                : 'bg-sakura-50 text-sakura-600 hover:bg-sakura-100'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Spots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((spot, index) => (
          <div
            key={spot.id}
            className="group bg-white rounded-2xl border border-sakura-100 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={spot.image}
                alt={spot.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x300/fde6ea/e84468?text=🌸'
                }}
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <span className="text-sm font-semibold text-sakura-600">#{index + 1}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-lg font-bold text-gray-800">{spot.name}</h3>
                <span className="text-sm text-gray-400 whitespace-nowrap ml-2">{spot.location}</span>
              </div>
              <p className="text-sm text-sakura-500 mb-2">🌸 {spot.bloomDates}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{spot.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {spot.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-sakura-50 text-sakura-500 px-2 py-0.5 rounded-full"
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
  )
}

export default TopSpots
