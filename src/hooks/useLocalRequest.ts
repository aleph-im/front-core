import { useState } from 'react'
import { UseRequestProps, UseRequestReturn, useRequest } from './useRequest'

export type LocalRequest<T> = {
  data: T | undefined
  loading: boolean
  error: Error | undefined
}

export type UseLocalRequestProps<T> = Omit<
  UseRequestProps<T>,
  'state' | 'setState'
>

export type UseLocalRequestReturn<T> = UseRequestReturn<T>

export function useLocalRequest<T>(
  props: UseLocalRequestProps<T>,
): UseLocalRequestReturn<T> {
  const [state, setState] = useState<LocalRequest<T>>({
    data: undefined,
    loading: false,
    error: undefined,
  })

  return useRequest({ state, setState, ...props })
}
