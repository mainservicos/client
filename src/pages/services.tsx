import ServicesTemplate, { ServicesTemplateProps } from 'templates/Services'
import filterItemsMock from 'components/ExploreSidebar/mock'
import servicesMock from 'components/ServiceCardSlider/mock'

export default function ServicesPage(props: ServicesTemplateProps) {
  return <ServicesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      services: servicesMock,
      filterItems: filterItemsMock
    }
  }
}
