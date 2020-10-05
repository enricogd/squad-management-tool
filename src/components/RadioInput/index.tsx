import React from 'react'

import * as S from './styles'
import { IInputPrimaryProps } from './types'

export default function RadioInput({
  label,
  id,
  onChange,
  ...rest
}: IInputPrimaryProps) {
  return (
    <S.Wrapper>
      <input {...rest} type="radio" id={id} required onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </S.Wrapper>
  )
}
