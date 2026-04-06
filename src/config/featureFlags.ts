/**
 * Feature Flags
 *
 * Toggle features on/off via the constants below.
 * Any flag can also be overridden at runtime through a URL search-parameter
 * whose name matches the flag key (e.g. ?yozakura=true).
 */

const FLAG_DEFAULTS: Record<string, boolean> = {
  /** Night-sakura (yozakura) guide page */
  yozakura_guide: false,
}

function getUrlOverride(key: string): boolean | null {
  if (typeof window === 'undefined') return null
  const params = new URLSearchParams(window.location.search)
  const value = params.get(key) ?? params.get(key.replace('_guide', ''))
  if (value === null) return null
  return value === 'true' || value === '1'
}

export function isFeatureEnabled(flag: keyof typeof FLAG_DEFAULTS): boolean {
  const urlOverride = getUrlOverride(flag)
  if (urlOverride !== null) return urlOverride
  return FLAG_DEFAULTS[flag] ?? false
}
