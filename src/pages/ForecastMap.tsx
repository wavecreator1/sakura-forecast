import { useState } from 'react'
import { regions, statusColors, statusLabels, type Region } from '../data/regions'

function ForecastMap() {
  const [selected, setSelected] = useState<Region | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sakura-700 mb-2">
          2026 Cherry Blossom Forecast
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Track the sakura front (桜前線) as it sweeps north across Japan from late March through May.
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mb-8">
        {Object.entries(statusLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: statusColors[key as Region['status']] }}
            />
            <span className="text-sm text-gray-600">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="bg-sakura-50/30 rounded-2xl p-6 flex items-center justify-center min-h-96">
          <svg viewBox="0 0 400 600" className="w-full max-w-sm">
            {/* Simplified Japan map using positioned circles */}
            {regions.map((region) => {
              const positions: Record<string, { cx: number; cy: number; r: number }> = {
                hokkaido: { cx: 280, cy: 120, r: 50 },
                tohoku: { cx: 260, cy: 230, r: 45 },
                kanto: { cx: 270, cy: 310, r: 35 },
                chubu: { cx: 230, cy: 310, r: 30 },
                kansai: { cx: 210, cy: 350, r: 28 },
                chugoku: { cx: 170, cy: 330, r: 25 },
                shikoku: { cx: 200, cy: 380, r: 25 },
                kyushu: { cx: 150, cy: 400, r: 35 },
              }
              const pos = positions[region.id]
              if (!pos) return null
              const isSelected = selected?.id === region.id
              return (
                <g key={region.id} onClick={() => setSelected(region)} className="cursor-pointer">
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r={pos.r}
                    fill={statusColors[region.status]}
                    opacity={isSelected ? 0.9 : 0.6}
                    stroke={isSelected ? '#1f2937' : 'transparent'}
                    strokeWidth={2}
                    className="transition-all duration-300"
                  />
                  <text
                    x={pos.cx}
                    y={pos.cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="text-xs font-medium fill-white pointer-events-none"
                  >
                    {region.nameJp}
                  </text>
                </g>
              )
            })}
            {/* Okinawa dots */}
            <circle cx={120} cy={530} r={5} fill="#b01d45" opacity={0.6} />
            <circle cx={135} cy={535} r={4} fill="#b01d45" opacity={0.6} />
            <text x={128} y={555} textAnchor="middle" className="text-xs fill-gray-400">沖縄</text>
          </svg>
        </div>

        {/* Regional Forecast List */}
        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-4">Regional Forecast</h2>
          <div className="space-y-1">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelected(region)}
                className={`w-full text-left p-4 rounded-xl transition-all border ${
                  selected?.id === region.id
                    ? 'border-sakura-300 bg-sakura-50 shadow-sm'
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-gray-800">{region.name}</span>
                    <span className="ml-2 text-sm text-gray-400">{region.nameJp}</span>
                    <p className="text-sm text-sakura-600 mt-0.5">Forecast: {region.forecastDate}</p>
                  </div>
                  <span
                    className="text-sm font-medium px-2 py-0.5 rounded"
                    style={{ color: statusColors[region.status] }}
                  >
                    {statusLabels[region.status]}
                  </span>
                </div>
                {selected?.id === region.id && (
                  <p className="mt-2 text-sm text-gray-500">{region.description}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForecastMap
