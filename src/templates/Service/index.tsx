import Base from 'templates/Base'

import ServiceInfo, { ServiceInfoProps } from 'components/ServiceInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'

import * as S from './styles'

export type ServiceTemplateProps = {
  cover: string
  serviceInfo: ServiceInfoProps
  gallery?: GalleryImageProps[]
  description: string
}

const Service = ({
  cover,
  serviceInfo,
  gallery,
  description
}: ServiceTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionServiceInfo>
        <ServiceInfo {...serviceInfo} />
      </S.SectionServiceInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>
    </S.Main>
  </Base>
)

export default Service
