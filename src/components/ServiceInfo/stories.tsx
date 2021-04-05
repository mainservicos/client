import { Story, Meta } from '@storybook/react/types-6-0'
import ServiceInfo, { ServiceInfoProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/ServiceInfo',
  component: ServiceInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame
} as Meta

export const Default: Story<ServiceInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <ServiceInfo {...args} />
  </div>
)
