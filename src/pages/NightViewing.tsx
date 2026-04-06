import { nightSpots } from '../data/nightSpots'

function NightViewing() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-100">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-gray-950/60 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-3">
            夜桜 &middot; Yozakura
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Night Viewing Guide
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            When the sun sets, Japan&rsquo;s cherry blossoms take on an ethereal glow.
            Discover the best illuminated spots for an unforgettable nighttime hanami experience.
          </p>
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nightSpots.map((spot) => (
            <div
              key={spot.id}
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-amber-500/40 transition-colors"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      'https://placehold.co/600x300/1a1a2e/e0a346?text=🌸+Night'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-serif text-xl font-bold text-white drop-shadow-md">
                    {spot.name}
                  </h3>
                  <p className="text-amber-300 text-sm">
                    {spot.nameJa} &middot; {spot.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-400 leading-relaxed">{spot.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-full border border-amber-500/20">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                    {spot.illuminationHours}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-pink-500/10 text-pink-400 px-3 py-1.5 rounded-full border border-pink-500/20">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                    {spot.season}
                  </span>
                </div>

                {/* Tips */}
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    Tips
                  </p>
                  <ul className="space-y-1.5">
                    {spot.tips.map((tip, i) => (
                      <li key={i} className="text-xs text-gray-500 flex gap-2">
                        <span className="text-amber-500/60 mt-0.5 shrink-0">&#9679;</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 text-gray-600 text-sm">
          <p>
            Illumination hours vary by year and weather. Check official event pages before visiting.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NightViewing
