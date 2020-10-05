import React from 'react'
import * as S from './styles'
import { IPlayerAvatarProps } from './types'
import ReactTooltip from 'react-tooltip'

export default function PlayerAvatar(props: IPlayerAvatarProps) {
  const { player, pickedRatio, border = 'none' } = props

  const { player_name: playerName, nationality, age } = player

  const getFirstNameInitial = () => playerName[0]

  const getLastNameInitial = () => {
    const separatedPlayerName = playerName.split(' ')
    const lastNameIndex = separatedPlayerName.length - 1
    const lastName = separatedPlayerName[lastNameIndex]
    const lastNameInitial = lastName[0]

    return lastNameInitial
  }

  return (
    <>
      <S.AvatarContainer>
        {playerName ? (
          <S.Border borderStyle={border}>
            <S.PlayerAvatar data-tip data-for={`${playerName}-tooltip`}>
              <span>{`${getFirstNameInitial()}${getLastNameInitial()}`}</span>
            </S.PlayerAvatar>
            <ReactTooltip id={`${playerName}-tooltip`}>
              {playerName}
              {nationality}
              {age}
            </ReactTooltip>
            {pickedRatio && <p>{`${String(pickedRatio)}%`}</p>}
          </S.Border>
        ) : (
          <S.Border borderStyle={'placeholder'}>
            <S.Placeholder>
              <span>+</span>
            </S.Placeholder>
          </S.Border>
        )}
      </S.AvatarContainer>
    </>
  )
}
