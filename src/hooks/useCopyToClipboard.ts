export function useClipboard(text: string): void {
  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  copyToClipboard()
}
