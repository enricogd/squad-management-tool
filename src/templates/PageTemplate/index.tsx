import React from 'react'

export default function PageTemplate({ children }: { children: JSX.Element }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
