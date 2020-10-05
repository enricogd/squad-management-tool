import React from 'react'

import { render } from '@testing-library/react'

import Footer from './index'

it('should render a paragraph', () => {
  const { getByText } = render(<Footer />)

  expect(getByText('2020 - All rights reserved'))
})
