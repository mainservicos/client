import { gql } from '@apollo/client'

export const MUTATION_CREATE_SERVICE = gql`
  mutation MutationCreateService($input: createServiceInput!) {
    createService(input: $input) {
      service {
        name
        description
        price
        cover {
          id
        }
        released_at
        contact
      }
    }
  }
`
