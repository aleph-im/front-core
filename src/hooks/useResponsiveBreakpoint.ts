import { useMemo } from 'react'
import { BreakpointId } from '../themes'
import { useTheme } from 'styled-components'
import { useWindowSize } from './useWindowSize'

export function useResponsiveBreakpoint(): BreakpointId {
  const theme = useTheme()
  const size = useWindowSize()
  const windowWidth = size?.width || 0

  // @note: sorted DESC
  const bpSizeArray = useMemo(() => {
    return Object.entries(theme.breakpoint)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => [k, v * 16]) as [BreakpointId, number][]
  }, [theme.breakpoint])

  const bp = useMemo(() => {
    const match = bpSizeArray.find(([, bpSize]) => windowWidth >= bpSize)
    return match ? match[0] : 'xs'
  }, [windowWidth, bpSizeArray])

  return bp
}
