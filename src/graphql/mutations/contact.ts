import { gql } from '@apollo/client'

export const MUTATION_CREATE_CONTACT = gql`
  mutation MutationCreateContact($input: createContactInput!) {
    createContact(input: $input) {
      contact {
        id
        whatsapp
      }
    }
  }
`

export const MUTATION_UPDATE_CONTACT = gql`
  mutation MutationUpdateContact($input: updateContactInput) {
    updateContact(input: $input) {
      contact {
        id
        whatsapp
      }
    }
  }
`
