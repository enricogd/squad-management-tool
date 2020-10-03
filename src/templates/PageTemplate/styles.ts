import styled, { css } from 'styled-components'

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
  `}
`
