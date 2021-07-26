import { gql } from '@apollo/client'

export const QUERY_USER_BY_ID = gql`
  query QueryUserById($id: ID!) {
    user(id: $id) {
      username
      email
    }
  }
`
