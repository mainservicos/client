import FormNewService, { FormNewServiceProps } from 'components/FormNewService'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import NewService from 'templates/NewService'

export default function Service(props: FormNewServiceProps) {
  return (
    <NewService>
      <FormNewService {...props} />
    </NewService>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      user: session?.id
    }
  }
}
