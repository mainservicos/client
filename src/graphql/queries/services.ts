import { gql } from '@apollo/client'

export const QUERY_SERVICES = gql`
  query queryServices($limit: Int!) {
    services(limit: $limit) {
      name
      slug
      cover {
        url
      }
      user {
        name
      }
      price
    }
  }
`
