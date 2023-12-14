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
      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(update, debounceDelay)
    }

    update()
    window.addEventListener('resize', debouncedUpdate)

    return () => {
      timmerId && clearTimeout(timmerId)
      window.removeEventListener('resize', debouncedUpdate)
    }
  }, [debounceDelay, inner])

  return value
}
