import { useState, useEffect } from 'react'

export type WindowSize = { width: number; height: number }

export function useWindowSize(
  debounceDelay: number = 300,
): WindowSize | undefined {
  const [value, setValue] = useState<WindowSize>()

  useEffect(() => {
    let timmerId: NodeJS.Timeout

    function update() {
      setValue({
        width: window.outerWidth,
        height: window.outerHeight,
      })
    }

    function debouncedUpdate() {
      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(update, debounceDelay)
    }

    update()
    window.addEventListener('resize', debouncedUpdate)

    return () => {
      timmerId && clearTimeout(timmerId)
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [debounceDelay])

  return value
}
