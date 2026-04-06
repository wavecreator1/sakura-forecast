/**
 * Feature Flags
 *
 * Toggle features on/off via these constants.
 * Flags can also be overridden at runtime using URL parameters.
 */

const FEATURE_FLAGS = {
  /** Night Viewing (夜桜) guide — illuminated nighttime cherry blossom spots */
  yozakura_guide: false,
} as const;

type FeatureFlagName = keyof typeof FEATURE_FLAGS;

/**
 * Check whether a feature flag is enabled.
 *
 * Resolution order:
 *  1. URL search parameter (e.g. ?yozakura=true)  — instant toggle in the browser
 *  2. Static constant defined above
 */
const URL_PARAM_MAP: Record<FeatureFlagName, string> = {
  yozakura_guide: 'yozakura',
};

export function isFeatureEnabled(flag: FeatureFlagName): boolean {
  const paramName = URL_PARAM_MAP[flag];
  if (paramName) {
    const params = new URLSearchParams(window.location.search);
    const value = params.get(paramName);
    if (value === 'true') return true;
    if (value === 'false') return false;
  }
  return FEATURE_FLAGS[flag];
}
