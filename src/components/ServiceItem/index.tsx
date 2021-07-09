import * as S from './styles'

export type ServiceItemProps = {
  img: string
  title: string
  price: string
}

const ServiceItem = ({ img, title, price }: ServiceItemProps) => (
  <S.Wrapper>
    <S.ServiceContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.ServiceContent>
  </S.Wrapper>
)

export default ServiceItem
