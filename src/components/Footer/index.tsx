import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contato
        </Heading>

        <a href="mailto:mainservicos@gmail.com">mainservicos@gmail.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Redes Sociais
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/mainservicos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/mainservicos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/mainservicos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/mainservicos"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Início</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Termos
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Maìn Servicos 2021 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
