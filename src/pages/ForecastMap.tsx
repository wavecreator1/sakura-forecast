import { useState } from 'react'
import { regions, statusColors, statusLabels, type Region } from '../data/regions'

/* Stylized SVG paths for each Japan region (simplified outlines) */
const regionPaths: Record<string, string> = {
  hokkaido:
    'M 255 28 C 260 25, 275 20, 290 22 C 305 24, 318 30, 325 40 C 332 50, 335 62, 330 75 C 325 88, 315 95, 302 100 C 289 105, 275 108, 268 100 C 261 92, 258 80, 252 72 C 246 64, 238 58, 238 48 C 238 38, 250 31, 255 28 Z',
  tohoku:
    'M 268 115 C 275 112, 285 110, 290 115 C 295 120, 298 130, 298 142 C 298 154, 295 168, 290 178 C 285 188, 278 195, 272 195 C 266 195, 260 188, 258 178 C 256 168, 255 154, 256 142 C 257 130, 261 118, 268 115 Z',
  kanto:
    'M 272 200 C 280 198, 290 200, 295 208 C 300 216, 298 225, 292 230 C 286 235, 276 235, 270 230 C 264 225, 262 216, 266 208 C 268 202, 272 200, 272 200 Z',
  chubu:
    'M 240 195 C 248 190, 260 192, 265 200 C 270 208, 268 218, 260 225 C 252 232, 240 235, 232 228 C 224 221, 222 210, 228 202 C 232 196, 240 195, 240 195 Z',
  kansai:
    'M 225 238 C 232 235, 245 237, 250 244 C 255 251, 252 260, 245 265 C 238 270, 228 270, 222 264 C 216 258, 215 248, 220 242 C 223 238, 225 238, 225 238 Z',
  chugoku:
    'M 190 235 C 198 230, 212 232, 218 240 C 224 248, 222 258, 214 262 C 206 266, 194 265, 188 258 C 182 251, 182 240, 190 235 Z',
  shikoku:
    'M 210 272 C 218 268, 232 270, 238 278 C 244 286, 240 296, 232 300 C 224 304, 212 302, 206 296 C 200 290, 202 278, 210 272 Z',
  kyushu:
    'M 168 260 C 176 255, 190 258, 194 268 C 198 278, 195 292, 188 300 C 181 308, 170 312, 164 305 C 158 298, 155 285, 158 275 C 160 267, 168 260, 168 260 Z',
}

const labelPositions: Record<string, { x: number; y: number }> = {
  hokkaido: { x: 288, y: 60 },
  tohoku: { x: 275, y: 155 },
  kanto: { x: 282, y: 215 },
  chubu: { x: 248, y: 212 },
  kansai: { x: 236, y: 252 },
  chugoku: { x: 204, y: 248 },
  shikoku: { x: 222, y: 286 },
  kyushu: { x: 178, y: 282 },
}

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
        {/* Stylized SVG Map of Japan */}
        <div className="bg-gradient-to-b from-sakura-50/40 to-white rounded-2xl p-6 flex items-center justify-center min-h-96 border border-sakura-100">
          <svg viewBox="130 10 230 340" className="w-full max-w-md drop-shadow-sm">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="shadow">
                <feDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor="#00000020" />
              </filter>
              {/* Water pattern background */}
              <pattern id="water" patternUnits="userSpaceOnUse" width="8" height="8">
                <rect width="8" height="8" fill="#e0f2fe" />
                <circle cx="4" cy="4" r="0.5" fill="#bae6fd" opacity="0.5" />
              </pattern>
            </defs>

            {/* Ocean background */}
            <rect x="130" y="10" width="230" height="340" fill="url(#water)" rx="12" />

            {/* Decorative sakura petals scattered */}
            <g opacity="0.15">
              <circle cx="155" cy="50" r="3" fill="#f06e88" />
              <circle cx="340" cy="80" r="2" fill="#f06e88" />
              <circle cx="160" cy="180" r="2.5" fill="#f06e88" />
              <circle cx="345" cy="200" r="2" fill="#f06e88" />
              <circle cx="150" cy="310" r="3" fill="#f06e88" />
              <circle cx="335" cy="150" r="2" fill="#f06e88" />
            </g>

            {/* Region shapes */}
            {regions.map((region) => {
              const path = regionPaths[region.id]
              if (!path) return null
              const isSelected = selected?.id === region.id
              const pos = labelPositions[region.id]
              return (
                <g
                  key={region.id}
                  onClick={() => setSelected(region)}
                  className="cursor-pointer"
                  filter={isSelected ? 'url(#glow)' : 'url(#shadow)'}
                >
                  <path
                    d={path}
                    fill={statusColors[region.status]}
                    opacity={isSelected ? 0.95 : 0.7}
                    stroke={isSelected ? '#1f2937' : '#ffffff'}
                    strokeWidth={isSelected ? 1.5 : 0.8}
                    className="transition-all duration-300"
                  />
                  {pos && (
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="pointer-events-none select-none"
                      fontSize="7"
                      fontWeight="600"
                      fill="white"
                      stroke="#00000030"
                      strokeWidth="0.3"
                    >
                      {region.nameJp}
                    </text>
                  )}
                </g>
              )
            })}

            {/* Okinawa chain */}
            <g opacity={0.6}>
              <circle cx="175" cy="330" r="3" fill="#b01d45" />
              <circle cx="182" cy="335" r="2.5" fill="#b01d45" />
              <circle cx="188" cy="338" r="2" fill="#b01d45" />
              <text x="182" y="346" textAnchor="middle" fontSize="6" fill="#9ca3af">
                沖縄
              </text>
            </g>

            {/* Compass rose */}
            <g transform="translate(345, 30)" opacity="0.3">
              <line x1="0" y1="-8" x2="0" y2="8" stroke="#9ca3af" strokeWidth="0.5" />
              <line x1="-8" y1="0" x2="8" y2="0" stroke="#9ca3af" strokeWidth="0.5" />
              <text x="0" y="-10" textAnchor="middle" fontSize="5" fill="#9ca3af">
                N
              </text>
            </g>
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
