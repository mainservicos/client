import ServiceList, { ServiceListProps } from 'components/ServiceList'
import Profile from 'templates/Profile'

import ordersMock from 'components/ServiceList/mock'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'

export default function Services({ items }: ServiceListProps) {
  return (
    <Profile>
      <ServiceList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      items: ordersMock,
      session
    }
  }
}
