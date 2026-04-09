function Footer() {
  return (
    <footer className="bg-white border-t border-sakura-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="w-6 h-6" aria-hidden="true">
              <defs>
                <radialGradient id="fg" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="#fde6ea"/>
                  <stop offset="100%" stopColor="#f06e88"/>
                </radialGradient>
              </defs>
              <g transform="translate(16,16)">
                <ellipse rx="5" ry="8" fill="url(#fg)" transform="rotate(0) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#fg)" transform="rotate(72) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#fg)" transform="rotate(144) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#fg)" transform="rotate(216) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#fg)" transform="rotate(288) translate(0,-6)"/>
                <circle r="3" fill="#e84468"/>
              </g>
            </svg>
            <span className="text-sm text-gray-500">桜前線 2026 — Sakura Forecast</span>
          </div>
          <p className="text-xs text-gray-400">
            データはイラスト用です。実際の開花日は気象条件により異なります。
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
