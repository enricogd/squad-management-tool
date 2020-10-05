import styled, { css } from 'styled-components'
import { fontType, mediaQuery, toRem, transition } from 'styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;
    position: relative;
    width: 100%;
    label {
      color: ${theme.colors.darkGrey};
      cursor: text;
      font-size: ${theme.font.sizes.medium};
      left: 0px;
      position: absolute;
      top: -1.5rem;
      ${transition()}

      ${fontType('b')};
      ${mediaQuery('sm')(`
        font-size: ${theme.font.sizes.small};
        `)}
    }

    textarea {
      border-radius: 4px;
      border: solid 1px ${theme.colors.lightGrey};
      color: ${theme.colors.grey};
      font-size: ${toRem(14)};
      height: 78px;
      padding: 0.5rem;
      width: 100%;
      ${fontType('r')};

      ::placeholder {
        color: ${theme.colors.lightGrey};
      }

      &:focus,
      &:valid {
        border: solid 1px ${theme.colors.error};

        + label {
          color: ${theme.colors.error};
        }
      }

      &[disabled] {
        border: dashed 1px ${theme.colors.error};

        + label {
          color: ${theme.colors.grey};
          font-size: ${toRem(10)};
          left: 16px;
          top: 12px;
          ${fontType('r')};
        }
      }
    }
  `}
`
