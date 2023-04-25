import { RefObject, useEffect, useRef } from 'react'

export function useClickOutside(
  callback: () => void,
  _refs?: RefObject<HTMLElement>[],
): RefObject<HTMLElement>[] {
  const refs = _refs || [useRef<HTMLElement>(null)]

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
  })

  return refs
}
