import { useState, useEffect } from 'react'

export type WindowSize = { width: number; height: number }

export function useWindowSize(
  debounceDelay: number = 300,
): WindowSize | undefined {
  const [size, setSize] = useState<WindowSize>()

  useEffect(() => {
    let timmerId: NodeJS.Timeout

    function updateSize() {
      setSize({
        width: window.outerWidth,
        height: window.outerHeight,
      })
    }

    function debouncedUpdateSize() {
      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(() => {
        setSize({
          width: window.outerWidth,
          height: window.outerHeight,
        })
      }, debounceDelay)
    }

    updateSize()
    window.addEventListener('resize', debouncedUpdateSize)

    return () => {
      timmerId && clearTimeout(timmerId)
      window.removeEventListener('resize', debouncedUpdateSize)
    }
  }, [debounceDelay])

  return size
}
