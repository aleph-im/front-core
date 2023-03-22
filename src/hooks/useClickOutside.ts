import { MutableRefObject, useEffect } from "react"

export function useClickOutside(ref: MutableRefObject<HTMLElement>, callback: () => void): void {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })
}

