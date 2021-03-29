import { Story, Meta } from '@storybook/react/types-6-0'

import { ServiceCardProps } from 'components/ServiceCard'
import ServiceCardSlider from '.'

import items from './mock'

export default {
  title: 'ServiceCardSlider',
  component: ServiceCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ServiceCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ServiceCardSlider items={args} {...args} />
  </div>
)
