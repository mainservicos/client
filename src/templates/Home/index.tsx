import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { ServiceCardProps } from 'components/ServiceCard'
// import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'

import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newServices: ServiceCardProps[]
  // mostPopularHighlight: HighlightProps
  // mostPopularGames: ServiceCardProps[]
  // upcommingGames: ServiceCardProps[]
  // upcommingHighligth: HighlightProps
  // upcommingMoreGames: ServiceCardProps[]
}

const Home = ({
  banners,
  newServices
}: // mostPopularHighlight,
// mostPopularGames
// upcommingGames,
// upcommingHighligth,
// upcommingMoreGames
HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="Novidades" games={newServices} color="black" />
    </S.SectionNews>

    {/* <Showcase
      title="Mais buscados"
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    /> */}
    {/*
    <S.SectionUpcoming>
      <Showcase title="Seção 3" games={upcommingGames} />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming> */}
  </Base>
)

export default Home
