import styled from 'styled-components'

import { mediaQuery } from './helpers'

export const Grid = styled.div`
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Col = styled.div`
  flex: ${(props: { size: number }) => props.size};
  flex-direction: column;
  margin: 0 1rem;

  ${mediaQuery('xs')(`
    margin: 1rem;
  `)}
`
