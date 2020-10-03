import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

it('should render a logo', () => {
  const { getByTestId } = render(<Header />)

  expect(getByTestId('logo')).toHaveAttribute('src')
})

it('should render a headline', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('headline')).toHaveTextContent('Squad Management Tool')
})

it('should render an avatar', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('logo')).toHaveAttribute('src')
})
