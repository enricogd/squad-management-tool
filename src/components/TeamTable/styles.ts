import styled, { css } from 'styled-components'
import { fontType } from 'styles/helpers'

export const Wrapper = styled.div`
  padding: 1rem 0.5rem;
`

export const Table = styled.table`
  ${({ theme }) => css`
    overflow-x: auto;
    width: 100%;
    border-collapse: collapse;
    color: ${theme.colors.darkGrey};

    thead {
      text-align: left;
      tr {
        border-bottom: none;
      }
    }

    tbody {
      tr {
        &:hover {
          border-bottom: 1px solid transparent;
          background-color: ${theme.colors.cellHighlight};
          color: ${theme.colors.cellFontHighlight};

          ${ButtonsWrapper} {
            display: flex;
          }
        }

        td {
          border-radius: 5px 0 0 5px;
          &:last-child {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-radius: 0 5px 5px 0;
          }
        }
      }
    }

    tr {
      border-bottom: 1px solid ${theme.colors.lightGrey};
    }

    th {
      padding: 1.5rem 0 1.5rem 1rem;
      cursor: pointer;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      &:first-of-type {
        width: 33%;
      }

      &:first-child {
        padding: 1.5rem 1.5rem 1.5rem 1rem;
        /* border-right: 1px solid ${theme.colors.lightGrey}; */

        background-image: linear-gradient(
          ${theme.colors.lightGrey},
          ${theme.colors.lightGrey}
        );
        background-repeat: no-repeat;
        background-size: 1px 50%, calc(100% - 4px) 100%;
        background-position: right center, 4px 0;
      }
    }

    td {
      padding: 1rem 0 1rem 1rem;
      align-items: center;
      ${fontType('b')}
      &:first-child {
        padding: 1rem;
      }
    }
  `}
`

export const ButtonsWrapper = styled.div`
  display: none;
  > * {
    margin-right: 0.5rem;
    cursor: pointer;
  }
`
