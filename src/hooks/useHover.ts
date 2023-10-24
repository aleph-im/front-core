/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState, RefObject, useRef } from 'react'

export type UseHoverProps<E extends HTMLElement> = {
  ref?: RefObject<E>
  propagate?: boolean
  deps?: any[]
}

export type UseHoverReturn<E extends HTMLElement> = {
  isHover: boolean
  ref: RefObject<E>
}

export function useHover<E extends HTMLElement>({
  ref: refProp,
  propagate = true,
  deps = [],
}: UseHoverProps<E>): UseHoverReturn<E> {
  const defaultRef = useRef(null)
  const ref = refProp || defaultRef

  const [isHover, setIsHover] = useState<boolean>(false)

  useLayoutEffect(() => {
    const current = ref.current
    if (!current) return

    function handleEnter(e: MouseEvent) {
      if (!propagate) e.stopPropagation()
      setIsHover(true)
    }

    function handleLeave(e: MouseEvent) {
      if (!propagate) e.stopPropagation()
      setIsHover(false)
    }

    current.addEventListener('mouseover', handleEnter)
    current.addEventListener('mouseout', handleLeave)

    return () => {
      if (!current) return

      current.removeEventListener('mouseover', handleEnter)
      current.removeEventListener('mouseout', handleLeave)
    }
  }, [propagate, ref, ...deps])

  return {
    isHover,
    ref,
  }
}
