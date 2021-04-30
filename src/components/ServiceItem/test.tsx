import { render, screen } from '@testing-library/react'

import ServiceItem from '.'

describe('<ServiceItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<ServiceItem />)

    expect(
      screen.getByRole('heading', { name: /ServiceItem/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
