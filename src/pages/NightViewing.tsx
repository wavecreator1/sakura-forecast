import { nightSpots } from '../data/nightSpots'

function NightViewing() {
  return (
    <div className="bg-gray-950 min-h-screen -mt-px">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-3 font-medium">
            夜桜 &middot; Yozakura
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Night Viewing Guide
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            When the sun sets, Japan's cherry blossoms transform under lantern light and
            spotlights. Discover the best illuminated hanami spots for an unforgettable
            evening stroll.
          </p>
        </div>
      </div>

      {/* Spots */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nightSpots.map((spot) => (
            <article
              key={spot.id}
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/40 transition-colors"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement
                    img.onerror = null
                    img.src =
                      'https://placehold.co/600x300/1a1a2e/f59e0b?text=🌸+夜桜'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {spot.name}
                    <span className="ml-2 text-amber-400 text-base font-normal">
                      {spot.nameJp}
                    </span>
                  </h3>
                  <span className="text-sm text-gray-400">{spot.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed">{spot.description}</p>

                {/* Illumination info */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400" aria-hidden="true">
                      {/* Lantern icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.061l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.061l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.061 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                      </svg>
                    </span>
                    <span className="text-amber-300">{spot.illuminationHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-pink-400" aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-pink-300">{spot.season}</span>
                  </div>
                </div>

                {/* Tips */}
                <div className="border-t border-gray-800 pt-3">
                  <h4 className="text-xs uppercase tracking-wider text-amber-500/80 mb-2 font-semibold">
                    Tips
                  </h4>
                  <ul className="space-y-1.5">
                    {spot.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-amber-500/60 mt-0.5 shrink-0">&#9656;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Illumination dates and hours are approximate and may vary by year and weather.
            Check official sources before your visit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NightViewing
