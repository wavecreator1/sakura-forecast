import { NavLink } from 'react-router-dom'
import { isFeatureEnabled } from '../config/featureFlags'

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-sakura-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-2 group">
            <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform group-hover:rotate-12" aria-hidden="true">
              <defs>
                <radialGradient id="ng" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="#fde6ea"/>
                  <stop offset="100%" stopColor="#f06e88"/>
                </radialGradient>
              </defs>
              <g transform="translate(16,16)">
                <ellipse rx="5" ry="8" fill="url(#ng)" transform="rotate(0) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#ng)" transform="rotate(72) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#ng)" transform="rotate(144) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#ng)" transform="rotate(216) translate(0,-6)"/>
                <ellipse rx="5" ry="8" fill="url(#ng)" transform="rotate(288) translate(0,-6)"/>
                <circle r="3" fill="#e84468"/>
              </g>
            </svg>
            <div>
              <span className="font-serif text-xl font-bold text-sakura-600">Sakura Forecast</span>
              <span className="block text-xs text-sakura-400">桜前線 2026</span>
            </div>
          </NavLink>

          <div className="flex items-center gap-1 sm:gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-sakura-50 text-sakura-700' : 'text-gray-600 hover:text-sakura-600 hover:bg-sakura-50/50'
                }`
              }
            >
              Forecast Map
            </NavLink>
            <NavLink
              to="/spots"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-sakura-50 text-sakura-700' : 'text-gray-600 hover:text-sakura-600 hover:bg-sakura-50/50'
                }`
              }
            >
              Top Spots
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-sakura-50 text-sakura-700' : 'text-gray-600 hover:text-sakura-600 hover:bg-sakura-50/50'
                }`
              }
            >
              History
            </NavLink>
            {isFeatureEnabled('yozakura_guide') && (
              <NavLink
                to="/yozakura"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'bg-sakura-50 text-sakura-700' : 'text-gray-600 hover:text-sakura-600 hover:bg-sakura-50/50'
                  }`
                }
              >
                夜桜
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
