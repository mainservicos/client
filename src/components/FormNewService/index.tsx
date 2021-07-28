// import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import { Email, People } from '@styled-icons/material-outlined'

import * as S from './styles'

export type FormNewServiceProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormNewServiceProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      Novo
    </Heading>

    <S.Form>
      <TextField
        icon={<People />}
        name="name"
        placeholder="Título do anúncio"
        label="Título"
        required
      />

      <TextField
        icon={<Email />}
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue={email}
        label="E-mail"
      />
      <TextField
        icon={<People />}
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        icon={<Email />}
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue={email}
        label="E-mail"
      />

      {/* <Button size="large">Salvar</Button> */}
    </S.Form>
  </>
)

export default FormProfile
