import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { ServiceFragment } from 'graphql/fragments/service'

// GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newServices: services(
      where: { created_at: "2021-07-13T03:03:44.138Z" }
      sort: "created_at:desc"
      limit: 8
    ) {
      ...ServiceFragment
    }
  }
  ${BannerFragment}
  ${ServiceFragment}
`
