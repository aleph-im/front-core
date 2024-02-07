import { useState, useEffect } from 'react'

export type WindowSize = { width: number; height: number }

export function useWindowSize(
  debounceDelay: number = 300,
  inner: boolean = true,
): WindowSize | undefined {
  const [value, setValue] = useState<WindowSize>()

  useEffect(() => {
    let timmerId: NodeJS.Timeout

    function update() {
      setValue({
        width: inner ? window.innerWidth : window.outerWidth,
        height: inner ? window.innerHeight : window.outerHeight,
      })
    }

    function debouncedUpdate() {
      if (!debounceDelay) return update()

      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(update, debounceDelay)
    }

    window.addEventListener('resize', debouncedUpdate)

    update()

    return () => {
      timmerId && clearTimeout(timmerId)
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [debounceDelay, inner])

  return value
}
