import { BannerProps } from 'components/Banner'
import { ServiceCardProps } from 'components/ServiceCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import ServiceCardSlider from 'components/ServiceCardSlider'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: ServiceCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: ServiceCardProps[]
  upcommingGames: ServiceCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: ServiceCardProps[]
  freeGames: ServiceCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Seção 1
        </Heading>

        <ServiceCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Seção 2
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <ServiceCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Seção 3
        </Heading>
        <ServiceCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <ServiceCardSlider items={upcommingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Seção 4
        </Heading>
        <Highlight {...freeHighligth} />
        <ServiceCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
