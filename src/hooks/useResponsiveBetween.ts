import { BreakpointId } from '../themes'
import { useResponsiveMin } from './useResponsiveMin'
import { useResponsiveMax } from './useResponsiveMax'

export function useResponsiveBetween(
  minBp: BreakpointId,
  maxBp: BreakpointId,
): boolean {
  const min = useResponsiveMin(minBp)
  const max = useResponsiveMax(maxBp)

  return min && max
}
