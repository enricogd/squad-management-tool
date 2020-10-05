import React from 'react'

import * as S from './styles'
import { ISectionProps } from './types'

export default function SectionTemplate(props: ISectionProps) {
  const { children, title, onClick } = props

  return (
    <S.Section>
      <S.Header>
        <h2>{title}</h2>
        {onClick && <S.Button onClick={onClick}>+</S.Button>}
      </S.Header>
      <S.Main>{children}</S.Main>
    </S.Section>
  )
}
