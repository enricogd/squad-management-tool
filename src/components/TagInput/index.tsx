import React from 'react'

import { IInputPrimaryProps } from './types'
import * as S from './styles'

export default function TagInput({
  label,
  id,
  onChange,
  ...rest
}: IInputPrimaryProps) {
  return (
    <S.Wrapper>
      <textarea {...rest} id={id} required onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </S.Wrapper>
  )
}
