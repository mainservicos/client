import { BannerProps } from 'components/Banner'
import { ServiceCardProps } from 'components/ServiceCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'

import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: ServiceCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: ServiceCardProps[]
  upcommingGames: ServiceCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: ServiceCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="Novidades" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Mais buscados"
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />

    <S.SectionUpcoming>
      <Showcase title="Seção 3" games={upcommingGames} />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
