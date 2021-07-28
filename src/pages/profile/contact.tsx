import FormContact, { FormContactProps } from 'components/FormContact'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import {
  QueryContact,
  QueryContactVariables
} from 'graphql/generated/QueryContact'
import { QUERY_CONTACT } from 'graphql/queries/contact'

export default function Me(props: FormContactProps) {
  return (
    <Profile>
      <FormContact {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<
    QueryContact,
    QueryContactVariables
  >({
    query: QUERY_CONTACT,
    variables: { identifier: session?.user?.email }
  })

  return {
    props: {
      session,
      whatsapp: data.contacts[0].whatsapp
    }
  }
}
