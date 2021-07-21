import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { ServiceFragment } from 'graphql/fragments/service'

// GET_HOME | QUERY_HOME
export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      ...BannerFragment
    }

    newServices: services(
      where: { released_at: $date }
      sort: "released_at:desc"
      limit: 8
    ) {
      ...ServiceFragment
    }

    otherServices: services(sort: "released_at:desc", limit: 8) {
      ...ServiceFragment
    }
  }
  ${BannerFragment}
  ${ServiceFragment}
`
