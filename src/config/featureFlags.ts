/**
 * Feature Flags
 *
 * Toggle features on/off via constants below.
 * Any flag can also be overridden at runtime through a URL search-parameter
 * whose name matches the flag key (e.g. ?yozakura_guide=true).
 */

const FLAGS = {
  /** Show the Yozakura (night cherry blossom) guide page */
  yozakura_guide: false,
} as const

type FlagName = keyof typeof FLAGS

/**
 * Returns the effective value of a feature flag.
 *
 * Priority:
 *  1. URL parameter override  (?flag=true / ?flag=false)
 *  2. Compile-time constant in FLAGS
 */
export function isFeatureEnabled(flag: FlagName): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const override = params.get(flag)
    if (override === 'true') return true
    if (override === 'false') return false
  }
  return FLAGS[flag]
}
