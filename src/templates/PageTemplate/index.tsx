import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function PageTemplate({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
