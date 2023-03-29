import { useLayoutEffect, useState, RefObject, useRef } from 'react'

export function useHover<E extends HTMLElement>(
  _ref?: RefObject<E>,
  propagate: boolean = true,
): [boolean, RefObject<E>] {
  const ref = _ref ? _ref : useRef(null)
  const [isHover, setIsHover] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (!ref.current) return

    function handleEnter(e: MouseEvent) {
      if (!propagate) e.stopPropagation()
      setIsHover(true)
    }

    function handleLeave(e: MouseEvent) {
      if (!propagate) e.stopPropagation()
      setIsHover(false)
    }

    ref.current.addEventListener('mouseover', handleEnter)
    ref.current.addEventListener('mouseout', handleLeave)

    return () => {
      if (!ref.current) return

      ref.current.removeEventListener('mouseover', handleEnter)
      ref.current.removeEventListener('mouseout', handleLeave)
    }
  }, [ref.current, propagate])

  return [isHover, ref]
}
