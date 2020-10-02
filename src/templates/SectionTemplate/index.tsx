import React from 'react'

export default function SectionTemplate({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <>
      <section>{children}</section>
    </>
  )
}
