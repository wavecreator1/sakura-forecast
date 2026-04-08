/**
 * Feature flags for the Sakura Forecast application.
 *
 * Each flag has a compile-time default. Flags can be overridden at runtime
 * via URL search parameters (e.g. ?yozakura=true).
 */

const FLAG_DEFAULTS: Record<string, boolean> = {
  yozakura_guide: false,
}

function getUrlOverride(key: string): boolean | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const value = params.get(key)
  if (value === 'true') return true
  if (value === 'false') return false
  return null
}

export function isFeatureEnabled(flag: keyof typeof FLAG_DEFAULTS): boolean {
  // URL parameter uses short name: ?yozakura=true
  const shortName = flag.replace('_guide', '')
  const urlOverride = getUrlOverride(shortName) ?? getUrlOverride(flag)
  if (urlOverride !== null) return urlOverride
  return FLAG_DEFAULTS[flag] ?? false
}
