import React from 'react'

import * as S from './styles'
import { IPickedPlayers } from './types'

export default function PickedPlayers(props: Partial<IPickedPlayers>) {
  return (
    <S.SoccerField>
      <S.LeftSide>
        <h2>Most picked player</h2>
        <S.AvatarContainer>
          <S.PlayerAvatar>
            <span>CR</span>
          </S.PlayerAvatar>
          <p>123</p>
        </S.AvatarContainer>
      </S.LeftSide>

      <S.FieldCenter />

      <S.RightSide>
        <h2>Less picked player</h2>
        <S.AvatarContainer>
          <S.PlayerAvatar>
            <span>ZZ</span>
          </S.PlayerAvatar>
          <p>123</p>
        </S.AvatarContainer>
      </S.RightSide>
    </S.SoccerField>
  )
}
