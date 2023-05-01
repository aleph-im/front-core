/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, RefObject, useEffect } from 'react'

export function useBounds<E extends HTMLElement>(
  event?: string,
  _ref?: RefObject<E>,
  deps: any[] = [],
): [DOMRect | undefined, RefObject<E>] {
  const defaultRef = useRef<E>(null)
  const ref = _ref || defaultRef
  const [size, setSize] = useState<DOMRect>()

  useEffect(() => {
    const current = ref.current
    if (!current) return

    function updateSize() {
      if (!current) return
      setSize(current.getBoundingClientRect())
    }

    updateSize()
    event && current.addEventListener(event, updateSize)

    return () => {
      if (!current) return
      event && current.removeEventListener(event, updateSize)
    }
  }, [ref, event, ...deps])

  return [size, ref]
}
