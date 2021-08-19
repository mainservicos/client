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
    title: 'Preço',
    name: 'price_lte',
    type: 'radio',
    fields: [
      { label: 'Grátis', name: 0 },
      { label: 'Até R$50', name: 50 },
      { label: 'Até R$100', name: 100 },
      { label: 'Até R$150', name: 150 },
      { label: 'Até R$250', name: 250 },
      { label: 'Até R$500', name: 500 }
    ]
  }

  const filterSort = {
    title: 'Ordernar por ',
    name: 'sort',
    type: 'radio',
    fields: [
      { label: 'Menor valor', name: 'price:asc' },
      { label: 'Maior valor', name: 'price:desc' }
    ]
  }

  // const filterCategories = {
  //   title: 'Categorias',
  //   name: 'categories',
  //   type: 'checkbox',
  //   fields: [{ label: 'Costura', name: 'costura' }]
  // }

  const filterItems = [filterSort, filterPrice]

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
