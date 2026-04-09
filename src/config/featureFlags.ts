/**
 * Feature Flags
 *
 * Toggle features on/off via the constants below.
 * Any flag can also be overridden at runtime through a URL search-parameter
 * whose name matches the flag key (e.g. ?yozakura_guide=true).
 */

const FLAGS = {
  /** Show the 夜桜 (Yozakura) night cherry-blossom guide */
  yozakura_guide: false,
} as const

type FlagName = keyof typeof FLAGS

/**
 * Returns `true` when a feature flag is enabled.
 *
 * Resolution order:
 *  1. URL search-parameter  (e.g. `?yozakura_guide=true`)
 *  2. Static constant in this file
 */
export function isFeatureEnabled(flag: FlagName): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const urlValue = params.get(flag)
    if (urlValue === 'true') return true
    if (urlValue === 'false') return false
  }
  return FLAGS[flag]
}
