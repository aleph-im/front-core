/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, RefObject, useEffect } from 'react'

export type useBoundsProps<E extends HTMLElement> = {
  ref?: RefObject<E>
  deps: any[]
}

export type useBoundsReturn<E extends HTMLElement> = {
  ref: RefObject<E>
  bounds?: DOMRect
}

export function useBounds<E extends HTMLElement>({
  ref,
  deps,
}: useBoundsProps<E>): useBoundsReturn<E> {
  const defaultRef = useRef<E>(null)
  ref = ref || defaultRef

  const [bounds, setBounds] = useState<DOMRect>()

  useEffect(() => {
    if (!ref) return
    if (!ref.current) return

    setBounds(ref.current.getBoundingClientRect())
  }, [ref, ...deps])

  return { bounds, ref }
}
