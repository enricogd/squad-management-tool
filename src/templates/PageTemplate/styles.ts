import styled, { css } from 'styled-components'
import { mediaQuery } from 'styles/helpers'

export const Main = styled.main`
  ${({ theme }) => css`
    bottom: 40px;
    overflow-y: scroll;
    padding: 2rem;
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    background-color: ${theme.colors.pageBg};

    ${mediaQuery('xs')(`
      padding: 0;
    `)}
  `}
`
