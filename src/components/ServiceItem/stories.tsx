import { Story, Meta } from '@storybook/react/types-6-0'
import ServiceItem from '.'

export default {
  title: 'ServiceItem',
  component: ServiceItem
} as Meta

export const Default: Story = () => <ServiceItem />
