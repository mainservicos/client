import Base from 'templates/Base'

import ServiceInfo, { ServiceInfoProps } from 'components/ServiceInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'

import * as S from './styles'

export type ServiceTemplateProps = {
  serviceInfo: ServiceInfoProps
  gallery?: GalleryImageProps[]
  description: string
}

const Service = ({
  serviceInfo,
  gallery,
  description
}: ServiceTemplateProps) => (
  <Base>
    <S.Main>
      <S.SectionServiceInfo>
        <ServiceInfo {...serviceInfo} />
      </S.SectionServiceInfo>
      <S.SectionDescription>
        <TextContent title="Descrição" content={description} />
      </S.SectionDescription>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
    </S.Main>
  </Base>
)

export default Service
