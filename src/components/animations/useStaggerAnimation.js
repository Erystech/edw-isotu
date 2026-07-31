/**
 * useStaggerAnimation
 * Pure calculation — returns an array of delay values (ms) so each
 * item in a list animates in slightly after the one before it.
 * No side effects, so it's just a plain function, not a hook, but
 * named/exported as one to match how it's consumed (mirrors the
 * naming convention of usePageTransition).
 *
 * @param {number} count - number of items to stagger
 * @param {{ baseDelay?: number, step?: number, max?: number }} options
 */
export function useStaggerAnimation(count, { baseDelay = 0, step = 80, max = 600 } = {}) {
  return Array.from({ length: count }, (_, i) =>
    Math.min(baseDelay + i * step, max)
  );
}