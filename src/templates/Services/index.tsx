import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'
import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryServices } from 'graphql/queries/services'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ServiceCard from 'components/ServiceCard'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type ServicesTemplateProps = {
  filterItems: ItemProps[]
}

const ServicesTemplate = ({ filterItems }: ServicesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryServices({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/services',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.services.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.name}
                  slug={service.slug!}
                  user={service.user!.name}
                  img={`http://localhost:1337${service.cover!.url}`}
                  price={service.price!}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default ServicesTemplate
