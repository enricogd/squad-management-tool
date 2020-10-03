import styled, { css } from 'styled-components'
import { transition } from 'styles/helpers'

export const Section = styled.section`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.sectionBg};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    align-items: center;
    border-bottom: 1px solid ${theme.colors.lightGrey};
    color: ${theme.colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
    line-height: 2.5rem;
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    width: 100%;
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
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;

    ${transition(0.1)}

    /* &:hover {
      box-shadow: inset -2px -2px 8px rgba(135, 53, 131, 1),
        inset -2px -2px 12px rgba(135, 53, 131, 0.5),
        inset 2px 2px 4px rgba(135, 53, 131, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    } */

    &:active {
      position: relative;
      top: 0.5px;
      box-shadow: none;
    }
  `}
`
