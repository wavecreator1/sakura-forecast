/**
 * Feature Flags Configuration
 *
 * Toggle features on/off via:
 * 1. The constant below (requires rebuild)
 * 2. URL parameter override — e.g. ?yozakura=true (instant, no rebuild)
 */

/** Set to true to enable the Night Viewing (Yozakura) guide by default */
const YOZAKURA_GUIDE_ENABLED = false;

/**
 * Returns whether the Yozakura guide feature is active.
 * The URL parameter ?yozakura=true overrides the config constant.
 */
export function isYozakuraEnabled(): boolean {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const urlOverride = params.get('yozakura');
    if (urlOverride !== null) {
      return urlOverride === 'true';
    }
  }
  return YOZAKURA_GUIDE_ENABLED;
}
