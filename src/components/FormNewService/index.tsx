import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  People,
  MonetizationOn,
  ErrorOutline
} from '@styled-icons/material-outlined'
import React, { useState } from 'react'
import { Whatsapp } from '@styled-icons/bootstrap'
import { ServiceInput } from 'graphql/generated/globalTypes'
import { MUTATION_CREATE_SERVICE } from 'graphql/mutations/service'
import { useMutation } from '@apollo/client'
import slugify from 'react-slugify'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
const TODAY = new Date().toISOString().slice(0, 10)

import TextArea from 'components/TextArea'
import { FormWrapper, FormLoading, FormError } from 'components/Form'
// import Upload from 'components/Upload'

export type FormNewServiceProps = {
  user: string
}

const FormNewService = ({ user }: FormNewServiceProps) => {
  const [formError, setFormError] = useState('')
  const { push } = useRouter()

  const [values, setValues] = useState<ServiceInput>({
    name: ' Sem título ',
    cover: '16',
    description: 'Sem descrição',
    released_at: TODAY,
    price: Number(0),
    slug: 'error',
    contact: 'Sem contato',
    user: user
  })

  const handleInput = (field: string, value: string) => {
    if (field === 'price') setValues((s) => ({ ...s, [field]: Number(value) }))
    else setValues((s) => ({ ...s, [field]: value }))
  }

  const [createService, { loading }] = useMutation(MUTATION_CREATE_SERVICE, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      push({ pathname: '/profile/services' })
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    console.log(values)

    createService({
      variables: {
        input: {
          data: {
            name: values.name,
            description: values.description,
            released_at: values.released_at,
            price: values.price,
            slug: slugify(values.name, {
              delimiter: '-',
              prefix: uuidv4().slice(0, 4)
            }),
            contact: values.contact,
            cover: '16',
            user: user
          }
        }
      }
    })
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          icon={<People />}
          name="name"
          placeholder="Título do anúncio"
          label="Título"
          required
          type="text"
          onInputChange={(v) => handleInput('name', v)}
        />

        <TextArea
          label="Descrição"
          name="description"
          onInputChange={(v) => handleInput('description', v)}
          required
        />

        <TextField
          icon={<MonetizationOn />}
          name="price"
          type="text"
          placeholder="R$ 0,00"
          label="Preço"
          onInputChange={(v) => handleInput('price', v)}
        />

        <TextField
          icon={<Whatsapp />}
          name="contact"
          type="text"
          label="Whatsapp"
          placeholder="99 999999999"
          required
          onInputChange={(v) => handleInput('contact', v)}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Salvar</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormNewService
