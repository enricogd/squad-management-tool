import styled, { css } from 'styled-components'

export const Footer = styled.footer`
  ${({ theme }) => css`
    align-content: center;
    background-color: ${theme.colors.lightGrey};
    bottom: 0;
    color: ${theme.colors.darkGrey};
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    font-weight: 400;
    height: 40px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
  `}
`
