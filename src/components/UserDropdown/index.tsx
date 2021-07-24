import Link from 'next/link'
import { AccountCircle, ExitToApp } from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import { signOut } from 'next-auth/client'

import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle />
          <span>Meu Perfil</span>
        </S.Link>
      </Link>

      <S.Link role="button" onClick={() => signOut()} title="Sign out">
        <ExitToApp />
        <span>Sair</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
