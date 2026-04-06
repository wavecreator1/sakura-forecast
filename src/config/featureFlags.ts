/**
 * Feature Flags
 *
 * Toggle features on/off via constants below.
 * Any flag can also be overridden at runtime with a URL search parameter.
 *
 * Example: append ?yozakura=true to enable the Night Viewing guide.
 */

const FEATURE_FLAGS = {
  /** Show the Night Viewing (夜桜) guide page and navbar link */
  yozakura_guide: false,
} as const

type FlagName = keyof typeof FEATURE_FLAGS

/**
 * Returns whether a feature flag is enabled.
 * Checks URL search params first (e.g. ?yozakura=true), then falls back
 * to the compile-time constant above.
 */
export function isFeatureEnabled(flag: FlagName): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)

    // Map flag names to shorter URL param names for convenience
    const paramAliases: Record<FlagName, string> = {
      yozakura_guide: 'yozakura',
    }

    const paramName = paramAliases[flag] ?? flag
    const paramValue = params.get(paramName)

    if (paramValue !== null) {
      return paramValue === 'true' || paramValue === '1'
    }
  }

  return FEATURE_FLAGS[flag]
}
