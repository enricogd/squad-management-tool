import styled, { css } from 'styled-components'
import { fontType } from 'styles/helpers'

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const AvgTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGrey};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: 0.5rem;
  `}
`

export const AvgList = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.avgListBg};
    border-radius: 6px;
    padding: 0.5rem;
  `}
`

export const ListItem = styled.div`
  ${({ theme }) => css`
    background-color: white;
    border-radius: 6px;
    font-size: ${theme.font.sizes.small};
    margin-bottom: 0.3rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      ${fontType('r')}

      &:last-child {
        ${fontType('b')}
      }
    }
  `}
`
