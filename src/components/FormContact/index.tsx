import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import { Phone } from '@styled-icons/material-outlined'

import * as S from './styles'

export type FormContactProps = {
  whatsapp?: string
}

const FormProfile = ({ whatsapp }: FormContactProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      Meu Contato
    </Heading>

    <S.Form>
      <TextField
        icon={<Phone />}
        name="whatsapp"
        placeholder="(XX) XXXXX-XXXX"
        label="WhatsApp"
        initialValue={whatsapp}
      />
      <br />
      <Button size="large">Salvar</Button>
    </S.Form>
  </>
)

export default FormProfile
