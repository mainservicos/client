import Link from 'next/link'
import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/services' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu Perfil</span>
      </S.Link>
    </Link>

    <Link href="/profile/services" passHref>
      <S.Link
        isActive={activeLink === '/profile/services'}
        title="Meus anúncios"
      >
        <FormatListBulleted size={24} />
        <span>Meus Anúncios</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <ExitToApp size={24} />
        <span>Sair</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
