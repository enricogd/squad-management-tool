import styled, { css } from 'styled-components'
import { mediaQuery } from 'styles/helpers'

export const Main = styled.main`
  ${({ theme }) => css`
    bottom: 40px;
    padding: 2rem;
    background-color: ${theme.colors.pageBg};
    max-width: 1366px;
    width: 100%;

    ${mediaQuery('xs')(`
      padding: 0;
    `)}
  `}
`

export const Background = styled.div`
  ${({ theme }) => css`
    bottom: 40px;
    overflow-y: scroll;
    padding: 0 2rem;
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    justify-content: center;
    display: flex;
    background-color: ${theme.colors.pageBg};

    ${mediaQuery('xs')(`
      padding: 0;
    `)}
  `}
`
