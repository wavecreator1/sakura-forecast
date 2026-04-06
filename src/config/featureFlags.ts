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
 *
 * URL overrides are cached at module load time so they persist across
 * client-side navigations (React Router drops query params from NavLinks).
 */
const URL_PARAM_MAP: Record<FeatureFlagName, string> = {
  yozakura_guide: 'yozakura',
};

// Cache URL overrides once at module load so they survive client-side navigation.
const urlOverrides: Partial<Record<FeatureFlagName, boolean>> = {};

(function cacheUrlOverrides() {
  const params = new URLSearchParams(window.location.search);
  for (const [flag, param] of Object.entries(URL_PARAM_MAP) as [FeatureFlagName, string][]) {
    const value = params.get(param);
    if (value === 'true') urlOverrides[flag] = true;
    else if (value === 'false') urlOverrides[flag] = false;
  }
})();

export function isFeatureEnabled(flag: FeatureFlagName): boolean {
  if (flag in urlOverrides) return urlOverrides[flag]!;
  return FEATURE_FLAGS[flag];
}
