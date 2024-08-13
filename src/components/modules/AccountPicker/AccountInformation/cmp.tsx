import React, { memo, useMemo } from 'react'
import { StyledLine } from './styles'
import { AccountInformationProps } from './types'
import { Logo } from '../../../common/Logo'
import Button from '../../../common/Button'
import Icon from '../../../common/Icon'
import { useTheme } from 'styled-components'
import Price from '../../../common/Price'
import { formatCurrency } from '../../../../utils'

export const AccountInformation = ({
  vouchers,
  balance,
  rewards,
  accountAddress,
  accountAddressHref,
}: AccountInformationProps) => {
  const theme = useTheme()
  const { color, button3 } = theme.component.walletPicker

  const displayBalance = useMemo(() => formatCurrency(balance), [balance])
  const displayAddress = useMemo(
    () => `${accountAddress?.slice(0, 8)}...${accountAddress?.slice(-6)}`,
    [accountAddress],
  )

  return (
    <>
      <div tw="flex items-center gap-4">
        <Logo img="aleph" color="text" size="3rem" />
        <div tw="leading-3">
          <div
            className="tp-code1 fs-24"
            tw="whitespace-nowrap leading-4! mb-3"
          >
            {displayBalance}
          </div>
          <span className="fs-16 m-0" tw="opacity-40">
            ALEPH
          </span>
        </div>
      </div>

      {rewards && (
        <>
          <StyledLine />
          <div tw="flex items-start justify-between gap-4">
            <span className="fs-10 tp-body3" tw="opacity-60 mt-1">
              EST. REWARDS
            </span>
            <div tw="text-right">
              <Price
                value={rewards.amount}
                className="fs-16 tp-body3"
                humanReadable={false}
                css={{ color: color.rewards }}
              />
              <div className="fs-12 tp-body1" tw="opacity-60">
                Next distribution in {rewards.days} days
              </div>
            </div>
          </div>
        </>
      )}

      {(accountAddressHref || vouchers) && (
        <>
          <StyledLine />
          <div tw="flex flex-col gap-6">
            {vouchers &&
              vouchers.map((voucher) => (
                <div tw="flex items-center justify-between" key={voucher.name}>
                  <div tw="flex items-center gap-2 max-w-sm ">
                    <img
                      src={voucher.image}
                      alt={voucher.imageAlt}
                      tw="w-12 h-12"
                    />
                    <div className="fs-16 tp-body3" tw="line-clamp-1">
                      {voucher.name}
                    </div>
                  </div>
                  <div tw="text-right pl-2" className="tp-body">
                    x{voucher.amount}
                  </div>
                </div>
              ))}
            <div tw="text-center">
              {accountAddressHref ? (
                <>
                  <Button
                    as="a"
                    target="_blank"
                    size="md"
                    href={accountAddressHref}
                    kind={button3.kind}
                    variant={button3.variant}
                    color={button3.color}
                  >
                    {displayAddress}
                    <Icon name="external-link-square-alt" tw="ml-2.5" />
                  </Button>
                </>
              ) : (
                displayAddress
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
AccountInformation.displayName = 'AccountInformation'

export default memo(AccountInformation) as typeof AccountInformation
