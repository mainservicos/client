import Base from 'templates/Base'

import ServiceInfo, { ServiceInfoProps } from 'components/ServiceInfo'
import TextContent from 'components/TextContent'

import * as S from './styles'

export type ServiceTemplateProps = {
  serviceInfo: ServiceInfoProps
  description: string
}

const Service = ({ serviceInfo, description }: ServiceTemplateProps) => (
  <Base>
    <S.Main>
      <S.SectionServiceInfo>
        <ServiceInfo {...serviceInfo} />
      </S.SectionServiceInfo>
      <S.SectionDescription>
        <TextContent title="Descrição" content={description} />
      </S.SectionDescription>
    </S.Main>
  </Base>
)

export default Service
