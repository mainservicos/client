import { Story, Meta } from '@storybook/react/types-6-0'

import ServiceCard, { ServiceCardProps } from '.'

export default {
  title: 'ServiceCard',
  component: ServiceCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<ServiceCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ServiceCard {...args} />
  </div>
)

export const WithRibbon: Story<ServiceCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ServiceCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
