import styled from 'styled-components'
import { mediaQuery } from 'styles/helpers'

export const Wrapper = styled.div`
  padding: 3rem 10rem;

  ${mediaQuery('md')(`
    padding: 3rem 5rem;
  `)}
  ${mediaQuery('sm')(`
    padding: 3rem 1rem;
  `)}
`
