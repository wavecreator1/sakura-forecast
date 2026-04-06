import { useState } from 'react'
import { regions, statusColors, statusLabels, statusLabelsEn, type Region } from '../data/regions'

function ForecastMap() {
  const [selected, setSelected] = useState<Region | null>(null)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-sakura-700 mb-2">
          2026 桜開花予報
        </h1>
        <p className="text-lg text-sakura-500 mb-1">Cherry Blossom Forecast</p>
        <p className="text-gray-500 max-w-xl mx-auto">
          桜前線の北上を追いかけましょう。3月下旬から5月にかけて、日本列島を桜が彩ります。
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 flex-wrap">
        {Object.entries(statusLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="w-3.5 h-3.5 rounded-full border border-white shadow-sm"
              style={{ backgroundColor: statusColors[key as Region['status']] }}
            />
            <span className="text-sm text-gray-600 font-medium">{label}</span>
            <span className="text-xs text-gray-400">({statusLabelsEn[key as Region['status']]})</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="bg-gradient-to-br from-sakura-50/40 to-green-50/30 rounded-2xl p-6 flex items-center justify-center min-h-[480px] border border-sakura-100">
          <svg viewBox="0 0 500 720" className="w-full max-w-md drop-shadow-sm">
            {/* Hokkaido */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'hokkaido') || null)}
              className="cursor-pointer"
            >
              <path
                d="M310,60 Q340,45 370,50 Q400,55 410,75 Q415,95 400,110 Q385,125 365,130 Q340,135 320,125 Q300,115 295,95 Q290,75 310,60 Z"
                fill={statusColors[regions.find(r => r.id === 'hokkaido')!.status]}
                opacity={selected?.id === 'hokkaido' ? 0.9 : 0.65}
                stroke={selected?.id === 'hokkaido' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'hokkaido' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="355" y="90" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '11px' }}>北海道</text>
            </g>

            {/* Tohoku */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'tohoku') || null)}
              className="cursor-pointer"
            >
              <path
                d="M320,150 Q340,140 355,155 Q365,175 360,200 Q355,225 345,245 Q330,260 315,255 Q300,245 295,225 Q290,200 295,180 Q300,160 320,150 Z"
                fill={statusColors[regions.find(r => r.id === 'tohoku')!.status]}
                opacity={selected?.id === 'tohoku' ? 0.9 : 0.65}
                stroke={selected?.id === 'tohoku' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'tohoku' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="328" y="200" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '11px' }}>東北</text>
            </g>

            {/* Kanto */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'kanto') || null)}
              className="cursor-pointer"
            >
              <path
                d="M310,265 Q335,258 350,270 Q360,285 355,305 Q345,320 325,325 Q305,325 295,310 Q285,295 290,278 Q295,265 310,265 Z"
                fill={statusColors[regions.find(r => r.id === 'kanto')!.status]}
                opacity={selected?.id === 'kanto' ? 0.9 : 0.65}
                stroke={selected?.id === 'kanto' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'kanto' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="325" y="293" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '11px' }}>関東</text>
            </g>

            {/* Chubu */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'chubu') || null)}
              className="cursor-pointer"
            >
              <path
                d="M260,260 Q285,250 300,265 Q305,280 295,300 Q280,315 260,315 Q240,310 235,295 Q230,275 245,262 Q250,258 260,260 Z"
                fill={statusColors[regions.find(r => r.id === 'chubu')!.status]}
                opacity={selected?.id === 'chubu' ? 0.9 : 0.65}
                stroke={selected?.id === 'chubu' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'chubu' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="268" y="285" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '11px' }}>中部</text>
            </g>

            {/* Kansai */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'kansai') || null)}
              className="cursor-pointer"
            >
              <path
                d="M240,318 Q265,308 278,320 Q285,335 275,350 Q260,362 240,360 Q222,355 218,340 Q215,325 225,315 Q230,312 240,318 Z"
                fill={statusColors[regions.find(r => r.id === 'kansai')!.status]}
                opacity={selected?.id === 'kansai' ? 0.9 : 0.65}
                stroke={selected?.id === 'kansai' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'kansai' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="250" y="338" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '11px' }}>関西</text>
            </g>

            {/* Chugoku */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'chugoku') || null)}
              className="cursor-pointer"
            >
              <path
                d="M180,325 Q210,315 228,325 Q235,340 225,355 Q210,365 190,362 Q170,358 165,342 Q162,330 175,322 Z"
                fill={statusColors[regions.find(r => r.id === 'chugoku')!.status]}
                opacity={selected?.id === 'chugoku' ? 0.9 : 0.65}
                stroke={selected?.id === 'chugoku' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'chugoku' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="198" y="342" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '10px' }}>中国</text>
            </g>

            {/* Shikoku */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'shikoku') || null)}
              className="cursor-pointer"
            >
              <path
                d="M200,370 Q225,365 245,372 Q255,382 248,395 Q238,405 218,405 Q198,402 190,390 Q185,378 195,370 Z"
                fill={statusColors[regions.find(r => r.id === 'shikoku')!.status]}
                opacity={selected?.id === 'shikoku' ? 0.9 : 0.65}
                stroke={selected?.id === 'shikoku' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'shikoku' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="220" y="387" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '10px' }}>四国</text>
            </g>

            {/* Kyushu */}
            <g
              onClick={() => setSelected(regions.find(r => r.id === 'kyushu') || null)}
              className="cursor-pointer"
            >
              <path
                d="M155,370 Q175,360 185,375 Q190,395 185,420 Q178,445 165,455 Q148,460 138,445 Q130,425 132,400 Q135,380 150,370 Z"
                fill={statusColors[regions.find(r => r.id === 'kyushu')!.status]}
                opacity={selected?.id === 'kyushu' ? 0.9 : 0.65}
                stroke={selected?.id === 'kyushu' ? '#1f2937' : '#fff'}
                strokeWidth={selected?.id === 'kyushu' ? 2.5 : 1}
                className="transition-all duration-300 hover:opacity-80"
              />
              <text x="160" y="415" textAnchor="middle" dominantBaseline="central" className="font-bold fill-white pointer-events-none" style={{ fontSize: '11px' }}>九州</text>
            </g>

            {/* Okinawa */}
            <circle cx={130} cy={560} r={6} fill="#b01d45" opacity={0.55} />
            <circle cx={145} cy={570} r={5} fill="#b01d45" opacity={0.55} />
            <circle cx={155} cy={585} r={4} fill="#b01d45" opacity={0.5} />
            <text x={142} y={610} textAnchor="middle" className="fill-gray-400" style={{ fontSize: '11px' }}>沖縄</text>

            {/* Decorative sakura petals */}
            <g opacity={0.15}>
              <circle cx={100} cy={180} r={4} fill="#f06e88" />
              <circle cx={420} cy={250} r={3} fill="#f06e88" />
              <circle cx={80} cy={400} r={5} fill="#f06e88" />
              <circle cx={440} cy={150} r={3} fill="#f06e88" />
              <circle cx={90} cy={300} r={4} fill="#f06e88" />
            </g>
          </svg>
        </div>

        {/* Regional Forecast List */}
        <div>
          <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-1">地域別予報</h2>
          <p className="text-sm text-gray-400 mb-4">Regional Forecast — click a region to see details</p>
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
                    <p className="text-sm text-sakura-600 mt-0.5">開花予想日: {region.forecastDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: statusColors[region.status] }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: statusColors[region.status] }}
                    >
                      {statusLabels[region.status]}
                    </span>
                  </div>
                </div>
                {selected?.id === region.id && (
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{region.description}</p>
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
