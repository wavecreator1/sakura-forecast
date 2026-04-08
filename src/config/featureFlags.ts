/**
 * Feature Flags
 *
 * Toggle features on/off via constants below.
 * Any flag can also be overridden at runtime through a URL search-parameter
 * whose name matches the flag key (e.g. ?yozakura_guide=true).
 */

const FLAGS = {
  /** Night cherry-blossom (夜桜) guide page */
  yozakura_guide: false,
} as const

export type FlagName = keyof typeof FLAGS

/**
 * Returns the effective value of a feature flag.
 *
 * Priority:
 *   1. URL search-parameter  (?flag=true / ?flag=false)
 *   2. Compile-time constant  (FLAGS object above)
 */
export function isFeatureEnabled(flag: FlagName): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get(flag)
    if (raw !== null) {
      return raw === 'true' || raw === '1'
    }
  }
  return FLAGS[flag]
}
