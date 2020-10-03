import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.sectionBg};
    border-radius: 12px;
    /* box-shadow: 2px 2px 4px #00000015; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem;
    padding: 1rem;
  `}
`
