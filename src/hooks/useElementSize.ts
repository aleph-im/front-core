import { useRef, useEffect, useState } from 'react'

export function useElementSize<E extends HTMLElement>(
  deps: any[] = [],
  reff: React.RefObject<E> = { current: null },
): [React.RefObject<E>, DOMRect | undefined] {
  const ref = useRef<E>(reff.current || null)
  const [size, setSize] = useState<DOMRect>()

  useEffect(() => {
    function updateSize() {
      if (ref.current) {
        setSize(ref.current.getBoundingClientRect())
      }
    }

    updateSize()

    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [ref, ...deps])

  return [ref, size]
}
