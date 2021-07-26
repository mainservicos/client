import { ContactPhone } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

import formatPrice from 'utils/format-price'

export type ServiceInfoProps = {
  title: string
  description: string
  price: number
  whatsapp: string
}

const ServiceInfo = ({
  title,
  description,
  price,
  whatsapp
}: ServiceInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<ContactPhone />} size="large" minimal>
        {whatsapp}
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default ServiceInfo
