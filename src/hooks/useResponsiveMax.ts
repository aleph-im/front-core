import { BreakpointId } from '../themes'
import { useResponsiveBreakpoint } from './useResponsiveBreakpoint'
import { useTheme } from 'styled-components'

export function useResponsiveMax(maxBp: BreakpointId): boolean {
  const theme = useTheme()
  const bp = useResponsiveBreakpoint()

  return theme.breakpoint[bp] < theme.breakpoint[maxBp]
}
