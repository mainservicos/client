import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { ServiceFragment } from 'graphql/fragments/service'
import {
  queryServices,
  queryServicesVariables
} from 'graphql/generated/queryServices'

export const QUERY_SERVICES = gql`
  query queryServices($limit: Int!, $start: Int, $where: JSON, $sort: String) {
    services(limit: $limit, start: $start, where: $where, sort: $sort) {
      ...ServiceFragment
    }
    servicesConnection(where: $where) {
      values {
        id
      }
    }
  }
  ${ServiceFragment}
`
export const QUERY_SERVICES_BY_SLUG = gql`
  query QueryServiceBySlug($slug: String!) {
    services(where: { slug: $slug }) {
      id
      name
      short_description
      description
      price
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      user {
        name
      }
      categories {
        name
      }
      published_at
    }
  }
`
export function useQueryServices(
  options?: QueryHookOptions<queryServices, queryServicesVariables>
) {
  return useQuery<queryServices, queryServicesVariables>(
    QUERY_SERVICES,
    options
  )
}
