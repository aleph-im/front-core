import { useState, useEffect } from 'react'

export type WindowScroll = { scrollX: number; scrollY: number }

export function useWindowScroll(
  debounceDelay: number = 300,
): WindowScroll | undefined {
  const [value, setValue] = useState<WindowScroll>()

  useEffect(() => {
    let timmerId: NodeJS.Timeout

    function update() {
      setValue({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      })
    }

    function debouncedUpdate() {
      if (!debounceDelay) return update()

      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(update, debounceDelay)
    }

    window.addEventListener('scroll', debouncedUpdate)

    update()

    return () => {
      timmerId && clearTimeout(timmerId)
      window.removeEventListener('scroll', debouncedUpdate)
    }
  }, [debounceDelay])

  return value
}
