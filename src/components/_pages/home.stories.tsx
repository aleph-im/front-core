import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import Header from './components/Header'
import { AlephDapp } from './resources/AlephDapp'
import { BulletList } from '../BulletList'
import InfoBox from './components/InfoBox'
import Button from '../Button'
import Icon from '../Icon'

export default {
  title: 'Examples/Pages/HomePage',
  decorators: [withDesign],
} as ComponentMeta<any>

const defaultArgs: Partial<any> = {}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A115&t=OG6V4eRdvQIurCbK-0',
  },
}

// ---

const HomePageTemplate: ComponentStory<any> = (args) => {
  return (
    <div style={{ width: args.width, border: '1px dotted white' }}>
      <Header />
      <main>
        <section>
          <h2 className='tp-h5'>Keep your dApp running smoothly, thanks to our reliable web3 cloud service</h2>
          <p className='tp-body1 mb-0'>Access trusted off-chain data or computiation withtin a couple lines of code</p>
        </section>
        <section className='pt-0'>
          <AlephDapp />
        </section>
        <section className='pt-0'>
          <BulletList items={[
            {
              kind: 'check2',
              title: 'Blockchain Agnostic'
            },
            {
              kind: 'check2',
              title: 'Lightining Fast'
            },
            {
              kind: 'check2',
              title: 'Low cost'
            },
            {
              kind: 'check2',
              title: 'Trustless'
            }
          ]} />
        </section>
        <section className='pt-0'>
          <h2 className='tp-h4 mb-sm'>Why use Aleph.im?</h2>
          <h3 className='tp-h7'>Why use Aleph.im?</h3>
          <p>Run your data storage and business logic on our unstoppable decentralized network. Instead of a centralized service susch as AWS or Google Cloud.</p>
        </section>
        <section className='pt-0'>
          <h2 className='tp-h5'>Computing solutions</h2>
          <InfoBox title='Private VM'>
            Confidential, private and encrypted virtual machine.
          </InfoBox>
          <InfoBox title='24/7 VM'>
            Processes or functions that need to run seamless all the time.
            <span className='d-block mt-xxs'>
              <Button
                kind="neon"
                size='regular'
                variant='text-only'
                color='main0'
                as='a'
                href='https://aleph.im'
                target="_blank"
              >See the subject<Icon name='arrow-right' className='ml-xs' /></Button>
            </span>
          </InfoBox>
          <InfoBox title='Lambda'>
            Basicly, serverless computing at your fingertips.
          </InfoBox>
        </section>
      </main>
    </div>
  )
}

export const Mobile = HomePageTemplate.bind({})
Mobile.args = {
  ...defaultArgs,
  width: '390px'
}
Mobile.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },
}
