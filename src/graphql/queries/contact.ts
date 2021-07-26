import { gql, QueryHookOptions, useQuery } from '@apollo/client'

import {
  QueryContact,
  QueryContactVariables
} from 'graphql/generated/QueryContact'

export const QUERY_CONTACT = gql`
  query QueryContact($identifier: String!) {
    contacts(where: { user: { email: $identifier } }) {
      id
      whatsapp
    }
  }
`

export function useQueryContact(
  options?: QueryHookOptions<QueryContact, QueryContactVariables>
) {
  return useQuery<QueryContact, QueryContactVariables>(QUERY_CONTACT, options)
}
