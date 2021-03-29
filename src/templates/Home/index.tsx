import { BannerProps } from 'components/Banner'
import { ServiceCardProps } from 'components/ServiceCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import GameCardSlider from 'components/ServiceCardSlider'
import BannerSlider from 'components/BannerSlider'

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
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighligth} />
      <GameCardSlider items={upcommingMoreGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighligth} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
