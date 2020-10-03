import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
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
