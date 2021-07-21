import Home, { HomeTemplateProps } from 'templates/Home'
// import servicesMock from 'components/ServiceCardSlider/mock'
// import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'

const TODAY = new Date().toISOString().slice(0, 10)

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request

// faz lógica
// pode ser buscar dados numa API
// fazer calculo|leitura de context

// retorno dos dados
export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newServices, otherServices }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY.slice(0, 24) },
    fetchPolicy: 'no-cache' // garantir sempre dado novo na geração do estático!
  })

  return {
    props: {
      revalidate: 10,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newServices: newServices.map((service) => ({
        title: service.name,
        slug: service.slug,
        user: service.user!.name,
        img: `http://localhost:1337${service.cover?.url}`,
        price: service.price
      })),

      otherServices: otherServices.map((service) => ({
        title: service.name,
        slug: service.slug,
        user: service.user!.name,
        img: `http://localhost:1337${service.cover?.url}`,
        price: service.price
      }))
      // mostPopularGames: servicesMock,
      // upcommingGames: servicesMock,
      // upcommingHighligth: highlightMock,
      // upcommingMoreGames: servicesMock,
      // freeGames: servicesMock,
      // freeHighligth: highlightMock
    }
  }
}
