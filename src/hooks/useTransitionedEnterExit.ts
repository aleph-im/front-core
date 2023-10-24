/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, RefObject, useState, useEffect, useTransition } from 'react'

export type TransitionedState = 'enter' | 'exit'
export type TransitionedSubstate =
  | 'enterStart'
  | 'enterRun'
  | 'enterEnd'
  | 'exitStart'
  | 'exitRun'
  | 'exitEnd'

export type UseTransitionedEnterExitProps<E extends HTMLElement> = {
  onOff: boolean
  ref?: RefObject<E>
  deps?: any[]
}

export type UseTransitionedEnterExitReturn<E extends HTMLElement> = {
  shouldMount: boolean
  state: TransitionedState
  substate: TransitionedSubstate
  ref: RefObject<E>
}

export function useTransitionedEnterExit<E extends HTMLElement>({
  onOff,
  ref: refProp,
  deps = [],
}: UseTransitionedEnterExitProps<E>): UseTransitionedEnterExitReturn<E> {
  const defaultRef = useRef<E>(null)
  const ref = refProp || defaultRef

  const [, startTransition] = useTransition()

  const initialState = onOff ? 'enter' : 'exit'
  const initialSubstate = initialState === 'enter' ? 'enterEnd' : 'exitEnd'

  const [state, setState] = useState<TransitionedState>(initialState)

  const [substate, setSubstate] =
    useState<TransitionedSubstate>(initialSubstate)

  const [shouldMount, setShouldMount] = useState<boolean>(state === 'enter')

  useEffect(() => {
    let enterFrame: number
    let exitFrame: number

    function clear() {
      enterFrame && cancelAnimationFrame(enterFrame)
      exitFrame && cancelAnimationFrame(exitFrame)
      ref.current?.removeEventListener('transitionend', onEnterTransitionEnd)
      ref.current?.removeEventListener('transitionend', onExitTransitionEnd)
    }

    function onEnterTransitionEnd() {
      setSubstate('enterEnd')
    }

    function onExitTransitionEnd() {
      startTransition(() => {
        setSubstate('exitEnd')
        setShouldMount(false)
      })
    }

    function onEnterFrame() {
      startTransition(() => {
        setSubstate('enterStart')
        setState('enter')

        enterFrame = requestAnimationFrame(() => {
          setSubstate('enterRun')
        })
      })
    }

    function onExitFrame() {
      setSubstate('exitRun')
    }

    if (onOff) {
      if (state === 'enter') return

      if (!shouldMount) {
        setShouldMount(true)
        return
      }

      startTransition(() => {
        ref.current?.addEventListener('transitionend', onEnterTransitionEnd)
        enterFrame = requestAnimationFrame(onEnterFrame)
      })
    } else {
      if (state === 'exit') return

      startTransition(() => {
        ref.current?.addEventListener('transitionend', onExitTransitionEnd)
        exitFrame = requestAnimationFrame(onExitFrame)

        setSubstate('exitStart')
        setState('exit')
      })
    }

    return clear
  }, [onOff, shouldMount, ref, ...deps])

  return { state, substate, shouldMount, ref }
}
