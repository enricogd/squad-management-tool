import styled, { css } from 'styled-components'
import { fontType, transition, mediaQuery } from 'styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-right: 2rem;

    label {
      color: ${theme.colors.grey};
      font-size: ${theme.font.sizes.small};

      ${fontType('b')};
      ${transition()}
      ${mediaQuery('sm')(`
		font-size: ${theme.font.sizes.small};
		`)}
    }

    input {
      margin-right: 0.5rem;
      ${transition()}

      &:checked {
        border: solid 1px ${theme.colors.error};

        + label {
          color: ${theme.colors.error};
        }
      }
    }
  `}
`
