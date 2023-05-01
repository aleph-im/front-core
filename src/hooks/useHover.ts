import { useLayoutEffect, useState, RefObject, useRef } from 'react'

export function useHover<E extends HTMLElement>(
  _ref?: RefObject<E>,
  propagate: boolean = true,
): [boolean, RefObject<E>] {
  const defaultRef = useRef(null)
  const ref = _ref || defaultRef

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
  }, [propagate, ref])

  return [isHover, ref]
}
