import React from 'react'
import Header from 'src/components/Header'

export default function PageTemplate({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
