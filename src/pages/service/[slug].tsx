import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import Service, { ServiceTemplateProps } from 'templates/Service'

import {
  queryServices,
  queryServicesVariables
} from 'graphql/generated/queryServices'
import {
  QUERY_SERVICES,
  QUERY_SERVICES_BY_SLUG
} from 'graphql/queries/services'
import {
  QueryServiceBySlug,
  QueryServiceBySlugVariables
} from 'graphql/generated/QueryServiceBySlug'
import { GetStaticProps } from 'next'

const apolloClient = initializeApollo()
export default function Index(props: ServiceTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null
  return <Service {...props} />
}

// gerar em build time (/Service/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    queryServices,
    queryServicesVariables
  >({
    query: QUERY_SERVICES,
    variables: { limit: 9 }
  })

  const paths = data.services.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryServiceBySlug,
    QueryServiceBySlugVariables
  >({
    query: QUERY_SERVICES_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.services.length) {
    return { notFound: true }
  }

  const service = data.services[0]

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${service.cover?.src}`,
      serviceInfo: {
        title: service.name,
        price: service.price,
        description: service.short_description
      },
      gallery: service.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: service.description
    }
  }
}
