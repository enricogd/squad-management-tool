import React from 'react'

import { IInputPrimaryProps } from './types'
import * as S from './styles'

export default function TextInput({
  label,
  id,
  onChange,
  ...rest
}: IInputPrimaryProps) {
  return (
    <S.Wrapper>
      <input {...rest} id={id} required onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </S.Wrapper>
  )
}
