// import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import { Email, People } from '@styled-icons/material-outlined'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      Meu perfil
    </Heading>

    <S.Form>
      <TextField
        icon={<People />}
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
        disabled
      />

      <TextField
        icon={<Email />}
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue={email}
        label="E-mail"
        disabled
      />

      {/* <Button size="large">Salvar</Button> */}
    </S.Form>
  </>
)

export default FormProfile
