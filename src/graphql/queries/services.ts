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
      contact
      categories {
        name
      }
    }
  }
`

export const QUERY_SERVICES_BY_USER = gql`
  query QueryServiceByUser($id: String!) {
    services(where: { user: { email: $id } }) {
      name
      id
      contact
      cover {
        url
      }
      price
      slug
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
