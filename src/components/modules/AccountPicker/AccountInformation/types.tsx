export type Voucher = {
  name: string
  image: string
  imageAlt: string
  // externalUrl: string
  amount: number
}

export type AccountInformationProps = {
  accountAddress?: string
  accountAddressHref?: string
  balance?: number
  rewards?: {
    amount: number
    days?: number
  }
  vouchers?: Voucher[]
}
