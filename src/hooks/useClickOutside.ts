/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useRef } from 'react'

export function useClickOutside(
  callback: () => void,
  _refs?: RefObject<HTMLElement>[],
  deps: any[] = [],
): RefObject<HTMLElement>[] {
  const defaultRefs = [useRef<HTMLElement>(null)]
  const refs = _refs || defaultRefs

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        refs.some(
          (ref) => ref.current && ref.current.contains(event.target as Node),
        )
      )
        return

      callback()
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [callback, refs, ...deps])

  return refs
}
