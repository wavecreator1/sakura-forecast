/**
 * Feature Flags
 *
 * Toggle features by changing the constant below or by adding
 * the corresponding URL search parameter (e.g. ?yozakura=true).
 */

/** Static default for the yozakura (night viewing) guide */
export const YOZAKURA_GUIDE_DEFAULT = false

/**
 * Checks whether a feature flag is enabled.
 * The URL parameter always wins; otherwise the static default is used.
 */
export function isFeatureEnabled(
  flagDefault: boolean,
  urlParam: string,
): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const value = params.get(urlParam)
    if (value === 'true') return true
    if (value === 'false') return false
  }
  return flagDefault
}
