import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    {/* <S.Image
      src="/img/empty.svg"
      alt="A sua plataforma de serviços."
      role="image"
    /> */}

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Voltar a página inicial</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
