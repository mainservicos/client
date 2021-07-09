import ServiceTemplate, { ServicesTemplateProps } from 'templates/Services'
import filterItemsMock from 'components/ExploreSidebar/mock'
import servicesMock from 'components/ServiceCardSlider/mock'

export default function ServicesPage(props: ServicesTemplateProps) {
  return <ServiceTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: servicesMock,
      filterItems: filterItemsMock
    }
  }
}
