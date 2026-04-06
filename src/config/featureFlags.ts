/**
 * Feature Flags
 *
 * Toggle features by changing the constants below.
 * Flags can also be activated at runtime via URL search parameters
 * (e.g. ?yozakura=true).
 */

/** Static toggle — set to `true` to enable the Night Viewing (夜桜) section. */
const YOZAKURA_GUIDE_DEFAULT = false

const SESSION_KEY = 'yozakura_enabled'

/** Check whether the yozakura_guide feature is enabled. */
export function isYozakuraEnabled(): boolean {
  if (YOZAKURA_GUIDE_DEFAULT) return true

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    if (params.get('yozakura') === 'true') {
      sessionStorage.setItem(SESSION_KEY, 'true')
      return true
    }

    if (sessionStorage.getItem(SESSION_KEY) === 'true') return true
  }

  return false
}
