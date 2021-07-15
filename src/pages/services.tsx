import ServicesTemplate, { ServicesTemplateProps } from 'templates/Services'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_SERVICES } from 'graphql/queries/services'
import {
  queryServices,
  queryServicesVariables
} from 'graphql/generated/queryServices'

export default function ServicesPage(props: ServicesTemplateProps) {
  return <ServicesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    queryServices,
    queryServicesVariables
  >({
    query: QUERY_SERVICES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      services: data.services.map((service) => ({
        title: service.name,
        slug: service.slug,
        developer: service.user!.name,
        img: `http://localhost:1337${service.cover!.url}`,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(service.price!)
      })),
      filterItems: filterItemsMock
    }
  }
}
