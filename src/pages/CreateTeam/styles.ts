import styled, { css } from 'styled-components'
import { Row } from 'styles/grid'
import { fontType, mediaQuery, transition } from 'styles/helpers'

export const Wrapper = styled.div`
  padding: 3rem 10rem;

  ${mediaQuery('md')(`
    padding: 3rem 5rem;
  `)}
  ${mediaQuery('sm')(`
    padding: 3rem 1rem;
  `)}
`

export const Headline = styled.div`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    h3 {
      color: ${theme.colors.grey};
      font-size: ${theme.font.sizes.medium};
      ${fontType('b')};
    }
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
      color: ${theme.colors.darkGrey};
      cursor: text;
      font-size: ${theme.font.sizes.medium};
      margin: 2rem 0 1rem;

      ${fontType('b')};
      ${transition()}
      ${mediaQuery('sm')(`
		font-size: ${theme.font.sizes.small};
		`)}
    }
  `}
`

// Team Info
export const TeamTypeRow = styled(Row)``
