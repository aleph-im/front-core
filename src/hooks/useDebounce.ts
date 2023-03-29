import { useEffect } from 'react'

function useDebounce(
  callback: (...args: any[]) => any,
  delay: number,
  ...deps: any[]
): void {
  useEffect(() => {
    const timer = setTimeout(callback, delay)
    return () => clearTimeout(timer)
  }, [delay, callback, ...deps])
}

export default useDebounce
