/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, RefObject } from 'react'

export type UseScrollProps<E extends HTMLElement> = {
  ref?: RefObject<E>
  debounceDelay?: number
  deps?: any[]
}

export type UseScrollReturn<E extends HTMLElement> = {
  scrollX?: number
  scrollY?: number
  ref?: RefObject<E>
}

export function useScroll<E extends HTMLElement>({
  ref: refProp,
  debounceDelay = 300,
  deps = [],
}: UseScrollProps<E>): UseScrollReturn<E> {
  const defaultRef = useRef(null)
  const ref = refProp || defaultRef

  const [value, setValue] = useState<UseScrollReturn<E>>({})

  useEffect(() => {
    const current = ref.current
    if (!current) return

    let timmerId: NodeJS.Timeout

    function update() {
      if (!current) return

      setValue({
        scrollX: current.scrollLeft,
        scrollY: current.scrollTop,
      })
    }

    function debouncedUpdate() {
      if (!debounceDelay) return update()

      timmerId && clearTimeout(timmerId)
      timmerId = setTimeout(update, debounceDelay)
    }

    current.addEventListener('scroll', debouncedUpdate)

    update()

    return () => {
      timmerId && clearTimeout(timmerId)
      current.removeEventListener('scroll', debouncedUpdate)
    }
  }, [debounceDelay, ref, ...deps])

  return value
}
