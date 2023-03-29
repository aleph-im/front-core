import { useRef, useState, RefObject, useEffect } from 'react'

export function useBounds<E extends HTMLElement>(
  event?: string,
  _ref: RefObject<E> = { current: null },
  deps: any[] = [],
): [DOMRect | undefined, RefObject<E>] {
  const ref = _ref || useRef<E>(null)
  const [size, setSize] = useState<DOMRect>()

  useEffect(() => {
    if (!ref.current) return

    function updateSize() {
      if (!ref.current) return
      setSize(ref.current.getBoundingClientRect())
    }

    updateSize()
    event && ref.current.addEventListener(event, updateSize)

    return () => {
      if (!ref.current) return
      event && ref.current.removeEventListener(event, updateSize)
    }
  }, [ref.current, event, ...deps])

  return [size, ref]
}
