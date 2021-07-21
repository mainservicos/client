import { initializeApollo } from 'utils/apollo'
import { QUERY_SERVICES } from 'graphql/queries/services'
import {
  queryServices,
  queryServicesVariables
} from 'graphql/generated/queryServices'
import { parseQueryStringToWhere } from 'utils/filter'

import ServicesTemplate, { ServicesTemplateProps } from 'templates/Services'
import { GetServerSidePropsContext } from 'next'

export default function ServicesPage(props: ServicesTemplateProps) {
  return <ServicesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: [
      { label: 'Free', name: 0 },
      { label: 'Under $50', name: 50 },
      { label: 'Under $100', name: 100 },
      { label: 'Under $150', name: 150 },
      { label: 'Under $250', name: 250 },
      { label: 'Under $500', name: 500 }
    ]
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Lowest to highest', name: 'price:asc' },
      { label: 'Highest to lowest', name: 'price:desc' }
    ]
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: [
      { label: 'Action', name: 'action' },
      { label: 'Adventure', name: 'adventure' },
      { label: 'Sports', name: 'sports' },
      { label: 'Puzzle', name: 'puzzle' },
      { label: 'Horror', name: 'horror' },
      { label: 'Platform', name: 'platform' },
      { label: 'Fantasy', name: 'fantasy' },
      { label: 'RPG', name: 'role-playing' },
      { label: 'JRPG', name: 'jrpg' },
      { label: 'Simulation', name: 'simulation' },
      { label: 'Strategy', name: 'strategy' },
      { label: 'Shooter', name: 'shooter' }
    ]
  }

  const filterItems = [filterSort, filterPrice, filterCategories]

  await apolloClient.query<queryServices, queryServicesVariables>({
    query: QUERY_SERVICES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
