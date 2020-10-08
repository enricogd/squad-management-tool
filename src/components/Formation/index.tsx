import PlayerAvatar from 'components/PlayerAvatar'
import { IPlayer } from 'interfaces/player'
import React from 'react'
import * as S from './styles'
import { IFormationProps } from './types'

export default function Formation(props: IFormationProps) {
  const { team, setPlayerInPosition, onSave } = props

  // TODO: can't handle formations with more than 3 rows
  const handleFormation = (formation: number[], playersArray: any[]) => {
    const mutableArr = [...playersArray]

    const array = [0, ...formation]

    const formationOrder = formation.map((row) => {
      const players = mutableArr.slice(0, row)
      mutableArr.splice(0, row)
      return players
    })
    const result = formationOrder.map((row, rowIdx) => {
      return (
        <S.PlayerRow key={rowIdx}>
          {row.map((player: IPlayer, playerIdx) => (
            <PlayerAvatar
              player={player}
              key={playerIdx}
              onClick={setPlayerInPosition}
              position={
                rowIdx
                  ? array[rowIdx] + array[rowIdx - 1] + playerIdx
                  : playerIdx
              }
            />
          ))}
        </S.PlayerRow>
      )
    })
    return result
  }
  return (
    <>
      <div>
        Formation <span>3-4-3</span>
      </div>
      <S.SoccerField>
        {handleFormation([3, 4, 3], team.players)}
        <S.PlayerRow>
          <PlayerAvatar
            key={10}
            position={10}
            onClick={setPlayerInPosition}
            player={team.players[10]}
          />
        </S.PlayerRow>
        <S.FieldCenter />
        <S.LineCenter />
      </S.SoccerField>
      <S.Button onClick={onSave}>Save</S.Button>
    </>
  )
}
