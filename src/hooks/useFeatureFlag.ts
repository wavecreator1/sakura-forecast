import { useState } from 'react'
import { isFeatureEnabled } from '../config/featureFlags'

/**
 * React hook that evaluates a feature flag once on initial page load
 * and persists the result in state so it survives client-side navigation.
 * The flag can still be toggled by reloading the page with a different
 * URL parameter value (e.g. ?yozakura=true or ?yozakura=false).
 */
export function useFeatureFlag(flagDefault: boolean, urlParam: string): boolean {
  const [enabled] = useState(() => isFeatureEnabled(flagDefault, urlParam))
  return enabled
}
