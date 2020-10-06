import React from 'react'
import * as S from './styles'
import { IPlayerAvatarProps } from './types'
import ReactTooltip from 'react-tooltip'
import { Grid, Row, Col } from 'styles/grid'

export default function PlayerAvatar(props: IPlayerAvatarProps) {
  // TODO: find a better way to deal with a null player
  const {
    player = { player_name: '', nationality: '', age: '' },
    pickedRatio,
    border = 'none',
    onClick,
    position,
  } = props

  // const { player_name: playerName, nationality, age } = player

  const getFirstNameInitial = (name: string) => {
    if (!name) return
    return name[0]
  }

  const getLastNameInitial = (name: string) => {
    if (!name) return

    const separatedPlayerName = name.split(' ')
    const lastNameIndex = separatedPlayerName.length - 1
    const lastName = separatedPlayerName[lastNameIndex]
    const lastNameInitial = lastName[0]

    return lastNameInitial
  }

  return (
    <>
      <S.AvatarContainer onClick={() => onClick(position)}>
        {player?.player_name ? (
          <S.Border borderStyle={border}>
            <S.PlayerAvatar
              data-tip
              data-for={`${player?.player_name}-tooltip`}>
              <span>{`${getFirstNameInitial(
                player?.player_name || ''
              )}${getLastNameInitial(player?.player_name || '')}`}</span>
            </S.PlayerAvatar>
            <ReactTooltip id={`${player?.player_name}-tooltip`}>
              <Grid>
                <Row>
                  <Col size={1}>
                    <Row>{player?.player_name}</Row>
                    <Row>{player?.nationality}</Row>
                  </Col>
                  <Col size={1}>{player?.age}</Col>
                </Row>
              </Grid>
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
