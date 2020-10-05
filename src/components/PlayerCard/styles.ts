import styled, { css } from 'styled-components'
import { fontType } from 'styles/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.greyVerticalGradient};
    border: 2px dashed ${theme.colors.lightGrey};
    margin-bottom: 0.5rem;
  `}
`

export const Label = styled.div`
  ${({ theme }) => css`
    ${fontType('b')}
    font-size: ${theme.font.sizes.medium};
    margin-bottom: 0.8rem;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`
export const Value = styled.span`
  ${({ theme }) => css`
    ${fontType('b')}
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.secondary};
  `}
`
