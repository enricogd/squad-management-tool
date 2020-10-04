import styled, { css } from 'styled-components'
import venturusLogo from 'assets/images/logo_venturus-small.png'
import { fontType, mediaQuery } from 'styles/helpers'

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.horizontalGradient};
    color: white;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100%;

    h1 {
      font-size: ${theme.font.sizes.large};
      ${fontType('r')}
    }
  `}
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${mediaQuery('sm')(`
    h1, span {
      display: none;
    }
  `)}
`

export const Logo = styled.img.attrs({
  src: venturusLogo,
  alt: 'Venturus logo',
})`
  height: auto;
  margin-right: 1rem;
  width: 50px;
`

export const UserAvatar = styled.div`
  ${({ theme }) => css`
    background: white;
    border-radius: 50%;
    color: ${theme.colors.darkGrey};
    font-weight: 500;
    height: 50px;
    margin-left: 1rem;
    position: relative;
    text-align: center;
    text-align: center;
    width: 50px;

    div {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: ${theme.font.sizes.large};
      ${fontType('m')};
    }
  `}
`
