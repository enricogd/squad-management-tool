import styled, { css } from 'styled-components'
import { fontType, mediaQuery } from 'styles/helpers'

export const SoccerField = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.verticalGradient};
    display: flex;
    margin-top: 1rem;
    border-radius: 4px;
    position: relative;
    color: white;

    h2 {
      font-size: ${theme.font.sizes.large};
      ${fontType('b')}
      ${mediaQuery('xs')(`
        font-size: ${theme.font.sizes.small}
      `)};
    }
  `}
`

export const LeftSide = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-right: 1px solid ${theme.colors.lightGrey};
    flex: 1;
    justify-content: center;
    padding: 3rem 1.5rem;
    text-align: center;
  `}
`

export const RightSide = styled.div`
  ${({ theme }) => css`
    align-items: center;
    flex: 1;
    justify-content: center;
    padding: 3rem 1.5rem;
    text-align: center;
  `}
`

export const FieldCenter = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 1px solid ${theme.colors.lightGrey};
    height: 30px;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const AvatarContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
`

export const PlayerAvatar = styled.div`
  ${({ theme }) => css`
    background: white;
    border-radius: 50%;
    color: ${theme.colors.darkGrey};
    font-weight: 500;
    height: 5rem;
    position: relative;
    text-align: center;
    width: 5rem;

    ${mediaQuery('xs')(`
        height: 2.5rem;
        width: 2.5rem;
    `)}

    span {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: ${theme.font.sizes.xlarge};
      ${fontType('m')};

      ${mediaQuery('xs')(`
        font-size: ${theme.font.sizes.medium};
    `)}
    }
  `}
`
