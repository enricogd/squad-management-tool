import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

import * as S from './styles'

export default function PageTemplate({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}
