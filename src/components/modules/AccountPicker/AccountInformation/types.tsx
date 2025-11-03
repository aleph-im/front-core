import { LinkComponent } from '../../../../types'

export type Voucher = {
  name: string
  image: string
  imageAlt: string
  amount: number
}

export type AccountInformationProps = {
  Link: LinkComponent
  accountAddress?: string
  accountAddressHref?: string
  balance?: number
  showCredits: boolean
  credits?: number
  creditsEquivalent:
    | {
        loading: true
        currency: string
      }
    | {
        loading: false
        currency: string
        amount: number
      }
  rewards?: {
    amount: number
    days?: number
  }
  vouchers?: Voucher[]
  disabledTopUp?: boolean
  handleTopUpClick?: () => void
  externalUrl: {
    text: string
    url: string
  }
}
