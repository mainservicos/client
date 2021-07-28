import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'

import ServiceList, { ServiceListProps } from 'components/ServiceList'

import {
  QueryServiceByUser,
  QueryServiceByUserVariables
} from 'graphql/generated/QueryServiceByUser'
import { QUERY_SERVICES_BY_USER } from 'graphql/queries/services'

export default function Services({ items }: ServiceListProps) {
  return (
    <Profile>
      <ServiceList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const {
    data: { users }
  } = await apolloClient.query<QueryServiceByUser, QueryServiceByUserVariables>(
    {
      query: QUERY_SERVICES_BY_USER,
      variables: { email: session?.user?.email }
    }
  )

  return {
    props: {
      session,
      items: users[0].services
    }
  }
}
