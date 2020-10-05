import React from 'react'

import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo />
        <h1 data-testid="headline">Squad Management Tool</h1>
      </S.Wrapper>
      <S.Wrapper>
        <span>John Doe</span>
        <S.UserAvatar>
          <div>JD</div>
        </S.UserAvatar>
      </S.Wrapper>
    </S.Header>
  )
}
