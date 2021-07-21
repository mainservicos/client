import { gql } from '@apollo/client'

export const ServiceFragment = gql`
  fragment ServiceFragment on Service {
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
`
