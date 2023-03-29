import { MutableRefObject, useEffect } from "react"

export function useClickOutside(ref: MutableRefObject<HTMLElement>, callback: () => void): void {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) return
      callback()
    }

    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  })
}
