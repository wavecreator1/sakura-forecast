/**
 * Feature Flags
 *
 * Toggle features on/off via constants below.
 * Any flag can also be overridden at runtime with a URL search parameter.
 *
 * Example: append ?yozakura=true to enable the Night Viewing guide.
 *
 * URL param overrides are captured once on initial page load so they
 * persist across SPA navigations (which strip query parameters).
 */

const FEATURE_FLAGS = {
  /** Show the Night Viewing (夜桜) guide page and navbar link */
  yozakura_guide: false,
} as const

type FlagName = keyof typeof FEATURE_FLAGS

// Map flag names to shorter URL param names for convenience
const paramAliases: Record<FlagName, string> = {
  yozakura_guide: 'yozakura',
}

// Cache URL param overrides at module load time so they survive SPA navigations
const urlOverrides: Partial<Record<FlagName, boolean>> = {}

if (typeof window !== 'undefined') {
  const params = new URLSearchParams(window.location.search)
  for (const flag of Object.keys(FEATURE_FLAGS) as FlagName[]) {
    const paramName = paramAliases[flag] ?? flag
    const paramValue = params.get(paramName)
    if (paramValue !== null) {
      urlOverrides[flag] = paramValue === 'true' || paramValue === '1'
    }
  }
}

/**
 * Returns whether a feature flag is enabled.
 * Checks cached URL param overrides first (captured on initial page load),
 * then falls back to the compile-time constant above.
 */
export function isFeatureEnabled(flag: FlagName): boolean {
  if (flag in urlOverrides) {
    return urlOverrides[flag]!
  }

  return FEATURE_FLAGS[flag]
}
