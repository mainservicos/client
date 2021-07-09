import styled from 'styled-components'
import * as ServiceItemStyles from 'components/ServiceItem/styles'

export const Wrapper = styled.div`
  ${ServiceItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
