import ServiceCardSlider from 'components/ServiceCardSlider'
import Heading from 'components/Heading'
import { ServiceCardProps } from 'components/ServiceCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  services?: ServiceCardProps[]
  color?: 'white' | 'black'
}

const Showcase = ({ title, highlight, services, color }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!services && <ServiceCardSlider items={services} color={color} />}
  </S.Wrapper>
)

export default Showcase
