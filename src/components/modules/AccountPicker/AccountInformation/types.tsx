export type AccountInformationProps = {
  accountAddress?: string
  accountAddressHref?: string
  balance?: number
  rewards?: {
    amount: number
    days?: number
  }
}
