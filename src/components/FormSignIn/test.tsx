import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /esqueci minha senha/i })
    ).toBeInTheDocument()
  })

  it('should render text to sign up if already have an account', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /criar conta/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/não possui uma conta\?/i)).toBeInTheDocument()
  })
})
