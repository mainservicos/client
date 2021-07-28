import { East } from '@styled-icons/material-outlined'
import Link from 'next/link'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'
import * as S from './styles'
import formatPrice from 'utils/format-price'

export type ServiceCardProps = {
  slug: string
  title: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const ServiceCard = ({
  slug,
  title,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: ServiceCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`service/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`service/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
        </S.Info>
      </Link>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button icon={<East />} size="small">
          Ver
        </Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ServiceCard
