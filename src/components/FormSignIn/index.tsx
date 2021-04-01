import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import { FormLink, FormWrapper } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">esqueci minha senha</S.ForgotPassword>

      <Button size="large" fullWidth>
        Entrar
      </Button>

      <FormLink>
        Não possui uma conta?{' '}
        <Link href="/sign-up">
          <a>Criar conta</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
