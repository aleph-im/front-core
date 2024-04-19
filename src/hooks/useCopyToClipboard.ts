import { useCallback } from 'react'
import { useNotification } from '../components/common/Notification/context'

export type UseCopyToClipboardProps = string

export type UseCopyToClipboardReturn = () => Promise<boolean>

export function useCopyToClipboard(
  text: UseCopyToClipboardProps,
): UseCopyToClipboardReturn {
  const handleCopyText = useCallback(async () => {
    try {
      if (!navigator?.clipboard) throw new Error('Clipboard not supported')
      await navigator.clipboard.writeText(text)
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      return false
    }
  }, [text])

  return handleCopyText
}

export type UseCopyToClipboardAndNotifyProps = string

export type UseCopyToClipboardAndNotifyReturn = () => Promise<boolean>

export function useCopyToClipboardAndNotify(
  text: UseCopyToClipboardAndNotifyProps,
): UseCopyToClipboardAndNotifyReturn {
  const noti = useNotification()
  const copy = useCopyToClipboard(text)

  const handleCopyText = useCallback(async () => {
    const result = await copy()
    if (!result) return result

    if (!noti) return result
    noti.add({
      variant: 'success',
      title: 'Copied to clipboard',
    })

    return result
  }, [copy, noti])

  return handleCopyText
}

export default useCopyToClipboard
