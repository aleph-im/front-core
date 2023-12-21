import React from 'react'
import { StoryFn } from '@storybook/react'
import { ToggleContainerProps } from './types'
import ToggleContainer from './cmp'

export default {
  title: 'Components/UI/layout/ToggleContainer',
  component: ToggleContainer,
}

const defaultArgs: Partial<ToggleContainerProps> = {
  duration: 700,
  open: true,
}

// ---

const Template: StoryFn<typeof ToggleContainer> = (args) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
        odio ligula, vitae mollis orci auctor in. Morbi rhoncus erat felis,
        pretium cursus lorem aliquet sit amet. Donec ornare malesuada elementum.
        Suspendisse porttitor eleifend leo, vitae sollicitudin mi sollicitudin
        quis. Sed at lacus mattis, euismod ante eu, consectetur diam. Donec
        iaculis cursus nulla, ut lacinia tellus aliquet id. In feugiat
        consectetur lectus, at congue sem gravida et. Suspendisse auctor
        facilisis convallis. Integer a fringilla ipsum. Sed aliquam odio est,
        sed lobortis felis faucibus in. Fusce tristique vitae eros eget
        efficitur. Fusce ac nibh ultrices, elementum ex eget, ornare arcu.
      </p>
      <ToggleContainer {...args} style={{ backgroundColor: '#ffffff11' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
        odio ligula, vitae mollis orci auctor in. Morbi rhoncus erat felis,
        pretium cursus lorem aliquet sit amet. Donec ornare malesuada elementum.
        Suspendisse porttitor eleifend leo, vitae sollicitudin mi sollicitudin
        quis. Sed at lacus mattis, euismod ante eu, consectetur diam. Donec
        iaculis cursus nulla, ut lacinia tellus aliquet id. In feugiat
        consectetur lectus, at congue sem gravida et. Suspendisse auctor
        facilisis convallis. Integer a fringilla ipsum. Sed aliquam odio est,
        sed lobortis felis faucibus in. Fusce tristique vitae eros eget
        efficitur. Fusce ac nibh ultrices, elementum ex eget, ornare arcu.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ac
        placerat lacus. Nulla quam nunc, scelerisque quis orci quis, luctus
        tempus lacus. Maecenas eget felis euismod, imperdiet lorem ac, iaculis
        est. In vulputate arcu ac mollis sodales. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Aliquam sit amet est nec purus pretium
        finibus in at elit. Sed sit amet sagittis eros. Ut ut lectus consequat,
        condimentum nulla vel, aliquet nunc. Fusce tempus porttitor luctus.
        Integer nec lacus sit amet ligula aliquam tincidunt. Integer pharetra
        sem sapien, ac vehicula sem laoreet non. In efficitur, lacus eu
        dignissim efficitur, nibh orci consectetur enim, sed cursus ex nunc
        aliquet nibh. Nullam eu ante enim. Curabitur ac iaculis tellus. Sed
        bibendum nibh ligula, ut egestas est finibus eu. Proin faucibus elit
        quis luctus fringilla. Suspendisse arcu urna, imperdiet at egestas nec,
        posuere at diam. Maecenas lobortis egestas elit, rhoncus tristique leo
        pharetra sed. Ut pretium malesuada lorem ut lobortis. Vivamus eu quam
        ipsum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nunc vitae ultrices nibh. Morbi
        efficitur ornare sem lacinia rutrum. Vestibulum augue dolor, posuere sit
        amet nibh ut, maximus convallis sem. Curabitur consequat turpis eget
        urna sollicitudin, eget congue arcu ornare. Nunc placerat aliquet
        libero, vel luctus nulla vulputate sit amet. Nunc dui nulla, hendrerit
        ac posuere viverra, efficitur eu neque. Nullam cursus tristique nisi
        quis suscipit. Nulla a vestibulum orci. Sed dignissim, erat imperdiet
        condimentum facilisis, urna mi faucibus quam, nec ultricies felis massa
        ut ligula. Maecenas nec consequat dui. Proin neque orci, ultrices non
        sagittis eu, elementum quis tellus. Curabitur non laoreet nibh. Quisque
        eu nunc nec est malesuada tincidunt eget ultrices lectus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Duis vitae suscipit ex, in pharetra nibh. In vitae enim commodo
        ante imperdiet malesuada. Duis varius fringilla felis, eu iaculis nunc.
        Donec at interdum nibh. Morbi rutrum orci non sagittis dignissim.
        Pellentesque ultricies quis lacus et fringilla. Proin at mi sed sapien
        hendrerit ultricies sed in lorem. Maecenas eu rutrum odio, sit amet
        pharetra tortor. Vestibulum elementum efficitur sapien, lacinia
        tincidunt est. Quisque dui ante, pulvinar eu mi quis, condimentum
        condimentum dui.
      </ToggleContainer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas
        odio ligula, vitae mollis orci auctor in. Morbi rhoncus erat felis,
        pretium cursus lorem aliquet sit amet. Donec ornare malesuada elementum.
        Suspendisse porttitor eleifend leo, vitae sollicitudin mi sollicitudin
        quis. Sed at lacus mattis, euismod ante eu, consectetur diam. Donec
        iaculis cursus nulla, ut lacinia tellus aliquet id. In feugiat
        consectetur lectus, at congue sem gravida et. Suspendisse auctor
        facilisis convallis. Integer a fringilla ipsum. Sed aliquam odio est,
        sed lobortis felis faucibus in. Fusce tristique vitae eros eget
        efficitur. Fusce ac nibh ultrices, elementum ex eget, ornare arcu.
      </p>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  controls: { exclude: ['color', 'size'] },
}
