import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;
`

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex: ${(props: { size: number }) => props.size};
`
