import Link from 'next/link'
import Empty from 'components/Empty'
import Button from 'components/Button'

import { Add } from '@styled-icons/material-outlined'

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
      {console.log(items)}
    </Heading>

    <Link href="/service/new" passHref>
      <Button icon={<Add />} as="a">
        Novo Anúncio
      </Button>
    </Link>

    {items.length ? (
      items.map((item) => <ServiceItem key={item.id} {...item} />)
    ) : (
      <Empty title="Você ainda não publicou nenhum anúncio" description="..." />
    )}
  </S.Wrapper>
)

export default ServiceList
