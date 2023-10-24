/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, RefObject, useState, useEffect } from 'react'

export type UseCollapsibleHeightProps<E extends HTMLElement> = {
  isCollapsed: boolean
  containerRef?: RefObject<E>
  contentRef?: RefObject<E>
  deps?: any[]
}

export type UseCollapsibleHeightReturn<E extends HTMLElement> = {
  height: string
  containerRef: RefObject<E>
  contentRef: RefObject<E>
}

export function useCollapsibleHeight<E extends HTMLElement>({
  isCollapsed,
  containerRef,
  contentRef,
  deps = [],
}: UseCollapsibleHeightProps<E>): UseCollapsibleHeightReturn<E> {
  const defaultContainerRef = useRef<E>(null)
  const defaultContentRef = useRef<E>(null)

  containerRef = containerRef || defaultContainerRef
  contentRef = contentRef || defaultContentRef

  const [height, setHeight] = useState(!isCollapsed ? 'auto' : '0')

  function getHeights() {
    const divHeight = contentRef?.current?.getBoundingClientRect()?.height || 0
    const wrapHeight =
      containerRef?.current?.getBoundingClientRect()?.height || 0

    return [divHeight, wrapHeight]
  }

  useEffect(() => {
    let frame: number

    function clear() {
      frame && cancelAnimationFrame(frame)
      containerRef?.current?.removeEventListener('transitionend', openFn)
    }

    async function openFn() {
      setHeight('auto')
    }

    async function closeFn() {
      setHeight('0')
    }

    const [divHeight, wrapHeight] = getHeights()

    clear()

    if (!isCollapsed) {
      setHeight(() => {
        containerRef?.current?.addEventListener('transitionend', openFn)
        return `${divHeight}px`
      })
    } else {
      setHeight(() => {
        frame = requestAnimationFrame(closeFn)
        return `${wrapHeight}px`
      })
    }

    return clear
  }, [isCollapsed, ...deps])

  return { height, containerRef, contentRef }
}
