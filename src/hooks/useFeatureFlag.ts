import { isFeatureEnabled } from '../config/featureFlags'

/**
 * React hook that returns whether a feature flag is active.
 * Re-evaluates on every render so URL-param changes after
 * navigation are picked up immediately.
 */
export function useFeatureFlag(flagDefault: boolean, urlParam: string): boolean {
  return isFeatureEnabled(flagDefault, urlParam)
}
