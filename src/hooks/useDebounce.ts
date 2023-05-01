/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export function useDebounce(
  callback: (...args: any[]) => any,
  delay: number,
  ...deps: any[]
): void {
  useEffect(() => {
    const timer = setTimeout(callback, delay)
    return () => clearTimeout(timer)
  }, [delay, callback, ...deps])
}
