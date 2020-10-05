import styled, { css } from 'styled-components'
import { Row } from 'styles/grid'
import { fontType, mediaQuery, transition } from 'styles/helpers'

export const TeamTypeRow = styled(Row)``

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

export const Wrapper = styled.div`
  ${({ theme }) => css`
    justify-content: center;
  `}
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

export const SoccerField = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.verticalGradient};
    display: flex;
    flex-direction: column;
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

export const TopSide = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-bottom: 1px solid ${theme.colors.lightGrey};
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    padding: 3rem 1.5rem;
    text-align: center;
  `}
`

export const BottomSide = styled.div`
  ${({ theme }) => css`
    align-items: center;
    flex-grow: 1;

    flex-shrink: 0;

    justify-content: center;
    padding: 3rem 1.5rem;
    text-align: center;
  `}
`

export const FieldCenter = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 1px solid ${theme.colors.lightGrey};
    height: 4rem;
    width: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`
