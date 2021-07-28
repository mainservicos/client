import { Container } from 'components/Container'
import Heading from 'components/Heading'

import Base from 'templates/Base'

import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}
const NewService = ({ children }: ProfileTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Novo
        </Heading>

        <S.Main>
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default NewService
