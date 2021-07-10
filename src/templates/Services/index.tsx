import Base from 'templates/Base'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import ServiceCard, { ServiceCardProps } from 'components/ServiceCard'
import { Grid } from 'components/Grid'

import * as S from './styles'

export type ServicesTemplateProps = {
  services?: ServiceCardProps[]
  filterItems: ItemProps[]
}

const ServicesTemplate = ({
  filterItems,
  services = []
}: ServicesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {services.map((item) => (
              <ServiceCard key={item.title} {...item} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default ServicesTemplate
