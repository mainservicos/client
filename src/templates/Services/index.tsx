import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'
import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryServices } from 'graphql/queries/services'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ServiceCard from 'components/ServiceCard'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'

import * as S from './styles'

export type ServicesTemplateProps = {
  filterItems: ItemProps[]
}

const ServicesTemplate = ({ filterItems }: ServicesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryServices({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  if (!data) return <p>loading...</p>

  const { services, servicesConnection } = data

  const hasMoreServices =
    services.length < (servicesConnection?.values?.length || 0)

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

        <section>
          {data?.services.length ? (
            <>
              <Grid>
                {data?.services.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    title={service.name}
                    slug={service.slug!}
                    img={`http://localhost:1337${service.cover!.url}`}
                    price={service.price!}
                  />
                ))}
              </Grid>
              {hasMoreServices && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Carregando..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Mostrar Mais</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="
                Não encontramos nenhum serviço ou produto com este filtro"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default ServicesTemplate
