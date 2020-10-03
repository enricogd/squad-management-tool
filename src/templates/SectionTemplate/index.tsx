import React from 'react'
import * as S from './styles'
export default function SectionTemplate({
  children,
}: {
  children: JSX.Element
}) {
  return (
    <>
      <S.Section>{children}</S.Section>
    </>
  )
}
