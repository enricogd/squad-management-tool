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

// Team Configuration
export const SoccerField = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.formationFieldGradient};
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
        font-size: ${theme.font.sizes.small};
      `)};
    }
  `}
`

export const PlayerRow = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding: 0.5rem;
    text-align: center;
    ${mediaQuery('xs')(`
        padding: 0;
      `)};
  `}
`

export const FieldCenter = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 2px solid ${theme.colors.lightGrey};
    height: 5rem;
    width: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const LineCenter = styled.div`
  ${({ theme }) => css`
    /* border-radius: 50%; */
    border: 1px solid ${theme.colors.lightGrey};
    height: 1px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.verticalGradient};
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 6px ${theme.colors.tertiary};
    color: white;
    font-size: 2rem;
    height: auto;
    font-size: ${theme.font.sizes.medium};
    padding: 1rem;
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    ${transition(0.1)}

    &:active {
      position: relative;
      top: 0.5px;
      box-shadow: none;
    }
  `}
`
