import { useState, useEffect } from 'react'

export type WindowScroll = { scrollX: number; scrollY: number }

export function useWindowScroll(
  debounceDelay: number = 300,
): WindowScroll | undefined {
  const [value, setValue] = useState<WindowScroll>()

  useEffect(() => {
    let timmerId: NodeJS.Timeout

    function update() {
      console.log('uuu')

      setValue({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      })
    }

    function debouncedUpdate() {
      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(update, debounceDelay)
    }

    update()
    window.addEventListener('scroll', debouncedUpdate)

    return () => {
      timmerId && clearTimeout(timmerId)
      window.removeEventListener('scroll', debouncedUpdate)
    }
  }, [debounceDelay])

  return value
}
