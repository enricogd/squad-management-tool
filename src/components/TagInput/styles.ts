import styled, { css } from 'styled-components'
import { fontType, mediaQuery, toRem, transition } from 'styles/helpers'

export const TagInput = styled.div`
  ${({ theme }) => css`
    align-items: flex-start;
    border-radius: 6px;
    border: solid 1px ${theme.colors.lightGrey};
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    max-width: 443px;
    min-height: 48px;
    padding: 0 8px;
    position: relative;
    width: 100%;

    label {
      ${fontType('b')};
      ${transition()}
      color: ${theme.colors.darkGrey};
      cursor: text;
      font-size: ${theme.font.sizes.medium};
      left: 0px;
      position: absolute;
      top: -1.5rem;
      ${mediaQuery('sm')(`
		font-size: ${theme.font.sizes.small};
		`)}
    }

    input {
      ${fontType('r')};
      ${transition()}
      align-self: center;
      border-radius: 4px;
      border: none;
      color: ${theme.colors.grey};
      font-size: ${toRem(14)};
      padding: 0.5rem;
      width: 100%;
      ::placeholder {
        color: ${theme.colors.lightGrey};
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 8px 0 0 0;
      li {
        align-items: center;
        background: ${theme.colors.secondary};
        border-radius: 2rem;
        color: #fff;
        display: flex;
        font-size: ${theme.font.sizes.small};
        height: 2rem;
        justify-content: center;
        list-style: none;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0 0.5rem;
        width: auto;
        span {
          &:last-of-type {
            color: white;
            cursor: pointer;
            display: block;
            font-size: 1rem;
            height: 1rem;
            line-height: 1rem;
            margin-left: 0.5rem;
            text-align: center;
            width: 1rem;
          }
        }
      }
    }
  `}
`
