import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Main = styled.main`
  margin-top: 2rem;
  ${media.greaterThan('medium')`
    margin-top: 4rem;
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGallery = styled(Section)`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const SectionServiceInfo = styled(Section)``
