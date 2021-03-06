import styled, { css } from 'styled-components'
import { mediaQuery, fontType } from 'styles/helpers'

export const AvatarContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  z-index: 50;

  ${mediaQuery('xs')(`
        margin: 0;
      `)}
`

export const Border = styled.div`
  ${({ theme }) => css`
    background-color: transparent;

    ${(props: { borderStyle: 'highlight' | 'placeholder' | 'none' }) => {
      if (props.borderStyle === 'highlight') {
        return `border: 2px dashed ${theme.colors.avatarBorderHighlight}`
      } else if (props.borderStyle === 'placeholder') {
        return `border: 2px dashed ${theme.colors.grey}`
      } else {
        return `border: 2px dashed transparent`
      }
    }};
    border-radius: 50%;
    padding: 0.3rem;
  `}
`

export const PlayerAvatar = styled.div`
  ${({ theme }) => css`
    background: white;
    border-radius: 50%;
    color: ${theme.colors.darkGrey};
    font-weight: 500;
    height: 4rem;
    position: relative;
    text-align: center;
    width: 4rem;
    z-index: 50;

    ${mediaQuery('xs')(`
        height: 2rem;
        width: 2rem;
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

export const Placeholder = styled.div`
  ${({ theme }) => css`
    background-color: #cc9abe88;
    border-radius: 50%;
    color: ${theme.colors.darkGrey};
    font-weight: 500;
    height: 4rem;
    position: relative;
    text-align: center;
    width: 4rem;
    z-index: 50;

    ${mediaQuery('xs')(`
        height: 2rem;
        width: 2rem;
    `)}

    span {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: ${theme.font.sizes.xlarge};
      color: white;
      ${fontType('m')};

      ${mediaQuery('xs')(`
        font-size: ${theme.font.sizes.medium};
    `)}
    }
  `}
`
