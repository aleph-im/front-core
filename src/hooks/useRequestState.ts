import { useCallback } from 'react'
import { useNotification } from '../components'

export type RequestCallbacks<T> = {
  onSuccess?: (data: T, defaultSuccessHandler: () => void) => void
  onError?: (error: Error, defaultErrorHandler: (error: Error) => void) => void
  onLoad?: () => void
}

export type RequestCallbacksReturn<T> = {
  onSuccess: (data: T) => void
  onError: (error: Error) => void
  onLoad: () => void
}

export type RequestState<T> = {
  data: T | undefined
  loading: boolean
  error: Error | undefined
}

export type UseRequestStateProps<T> = RequestCallbacks<T> & {
  state: RequestState<T>
  flushData?: boolean
  setState: (prevState: RequestState<T>) => void
}

export type UseRequestStateReturn<T> = [
  RequestState<T>,
  RequestCallbacksReturn<T>,
]

export function useRequestState<T>({
  state,
  flushData,
  setState,
  onSuccess: successProp,
  onError: errorProp,
  onLoad: loadProp,
}: UseRequestStateProps<T>): UseRequestStateReturn<T> {
  const noti = useNotification()

  const onSuccess = useCallback(
    (data: T) => {
      setState({ data, loading: false, error: undefined })

      function defaultSuccessHandler() {
        noti &&
          noti.add({
            variant: 'success',
            title: 'Operation complete',
          })
      }

      return successProp
        ? successProp(data, defaultSuccessHandler)
        : defaultSuccessHandler()
    },
    [noti, setState, successProp],
  )

  const onError = useCallback(
    (error: Error) => {
      setState({
        data: flushData ? undefined : state.data,
        loading: false,
        error,
      })

      function defaultErrorHandler(error: Error) {
        const text = error.message
        const cause = (error as any)?.cause
        const detail = cause || (cause as Error)?.message

        noti &&
          noti.add({
            variant: 'error',
            title: 'Error',
            text,
            detail,
          })
      }

      return errorProp
        ? errorProp(error, defaultErrorHandler)
        : defaultErrorHandler(error)
    },
    [state, noti, flushData, setState, errorProp],
  )

  const onLoad = useCallback(() => {
    setState({
      data: flushData ? undefined : state.data,
      loading: true,
      error: undefined,
    })

    loadProp && loadProp()
  }, [state, flushData, setState, loadProp])

  return [state, { onSuccess, onError, onLoad }]
}
