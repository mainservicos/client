import { gql } from '@apollo/client'

export const ServiceFragment = gql`
  fragment ServiceFragment on Service {
    id
    name
    slug
    cover {
      url
    }
    user {
      username
      contacts {
        whatsapp
      }
    }
    price
  }
`
