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
  credits?: number
  rewards?: {
    amount: number
    days?: number
  }
  vouchers?: Voucher[]
  externalUrl: {
    text: string
    url: string
  }
}
