import Empty from 'components/Empty'
import ServiceItem, { ServiceItemProps } from 'components/ServiceItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type ServiceListProps = {
  items?: ServiceItemProps[]
}

const ServiceList = ({ items = [] }: ServiceListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      Meus Anúncios
    </Heading>

    {items.length ? (
      items.map((item) => <ServiceItem key={item.title} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default ServiceList
