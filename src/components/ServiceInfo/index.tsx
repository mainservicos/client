import { Whatsapp } from '@styled-icons/bootstrap'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

import formatPrice from 'utils/format-price'

export type ServiceInfoProps = {
  title: string
  description: string
  price: number
  contact: ContactProps
}

type ContactProps = {
  whatsapp: string
}

const ServiceInfo = ({
  title,
  description,
  price,
  contact
}: ServiceInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button
        icon={<Whatsapp />}
        size="large"
        href={`https://api.whatsapp.com/send?phone=55${contact.whatsapp}&text=Ol%C3%A1%2C%20vim%20pela%20plataforma%20Ma%C3%ACn.`}
        minimal
        as="a"
        target="_blank"
      >
        {contact?.whatsapp}
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default ServiceInfo
