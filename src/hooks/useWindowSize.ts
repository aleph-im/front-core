import { useState, useEffect } from 'react'

export type WindowSize = { width: number, height: number }

export function useWindowSize(): WindowSize | undefined {
  const [size, setSize] = useState<WindowSize>()

  useEffect(() => {
    function updateSize() {
      setSize({
        width: window.outerWidth,
        height: window.outerHeight,
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return size
}
