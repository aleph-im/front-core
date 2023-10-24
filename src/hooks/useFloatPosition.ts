/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, RefObject, useMemo } from 'react'
import { useBounds } from './useBounds'

export type FloatPositionType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type FloatPosition = { x: number; y: number }

export type UseFloatPositionProps<
  M extends HTMLElement,
  A extends HTMLElement,
> = {
  my: FloatPositionType
  at: FloatPositionType
  margin?: FloatPosition
  offset?: FloatPosition
  myRef?: RefObject<M>
  atRef?: RefObject<A>
  deps?: any[]
}

export type UseFloatPositionReturn<
  M extends HTMLElement,
  A extends HTMLElement,
> = {
  position: FloatPosition
  myRef: RefObject<M>
  atRef: RefObject<A>
}

export function useFloatPosition<M extends HTMLElement, A extends HTMLElement>({
  my,
  at,
  myRef,
  atRef,
  margin = { x: 5, y: 5 },
  offset = { x: 0, y: 0 },
  deps = [],
}: UseFloatPositionProps<M, A>): UseFloatPositionReturn<M, A> {
  const defaultMyRef = useRef<M>(null)
  const defaultAtRef = useRef<A>(null)

  myRef = myRef || defaultMyRef
  atRef = atRef || defaultAtRef

  const { bounds: floaterBounds } = useBounds({
    ref: myRef,
    deps,
  })

  const { bounds: targetBounds } = useBounds({
    ref: atRef,
    deps,
  })

  const position: FloatPosition = useMemo(() => {
    const [myPosY, myPosX] = my.split('-')
    const [atPosY, atPosX] = at.split('-')

    const {
      x: atX,
      y: atY,
      width: atW,
      height: atH,
    } = targetBounds || { x: 0, y: 0, width: 0, height: 0 }

    const { width: myW, height: myH } = floaterBounds || {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }

    const targetX =
      atPosX === 'left' ? atX : atPosX === 'center' ? atX + atW / 2 : atX + atW

    const targetY =
      atPosY === 'top' ? atY : atPosY === 'center' ? atY + atH / 2 : atY + atH

    const tooltipOffsetX =
      myPosX === 'left'
        ? margin.x
        : myPosX === 'center'
        ? -(myW / 2)
        : -(myW + margin.x)

    const tooltipOffsetY =
      myPosY === 'top'
        ? margin.y
        : myPosY === 'center'
        ? -(myH / 2)
        : -(myH + margin.y)

    const x = targetX + tooltipOffsetX + offset.x
    const y = targetY + tooltipOffsetY + offset.y

    return { x, y }
  }, [at, my, targetBounds, floaterBounds, offset, margin])

  return { position, myRef, atRef }
}
