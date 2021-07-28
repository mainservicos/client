import * as S from './styles'
import Link from 'next/link'

export type ServiceItemProps = {
  id: string
  cover: coverProps
  name: string
  price: string
  slug: string
}

type coverProps = {
  url: string
  alternativeText: string
}

const ServiceItem = ({ cover, name, price, slug }: ServiceItemProps) => (
  <S.Wrapper>
    <Link href={`/service/${slug}`} passHref>
      <S.ServiceContent>
        <S.ImageBox>
          <img
            src={process.env.NEXT_PUBLIC_API_URL + cover.url}
            alt={cover.alternativeText}
          />
        </S.ImageBox>

        <S.Content>
          <S.Title>{name}</S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.ServiceContent>
    </Link>
  </S.Wrapper>
)

export default ServiceItem
