import ServiceList, { ServiceListProps } from 'components/ServiceList'
import Profile from 'templates/Profile'

import ordersMock from 'components/ServiceList/mock'

export default function Services({ items }: ServiceListProps) {
  return (
    <Profile>
      <ServiceList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
