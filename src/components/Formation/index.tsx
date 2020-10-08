import PlayerAvatar from 'components/PlayerAvatar'
import { IPlayer } from 'interfaces/player'
import React from 'react'
import * as S from './styles'
import { IFormationProps, ISelectOption } from './types'
import Select from 'react-select'

const VALID_FORMATIONS = [
  [3, 4, 3],
  [3, 5, 2],
  [4, 3, 2],
  [4, 4, 2],
  [4, 5, 1],
  [5, 4, 1],
]

export default function Formation(props: IFormationProps) {
  const { team, setPlayerInPosition, onSave, formation, setFormation } = props

  const getFormationOption = (value: number[]): ISelectOption => ({
    value,
    label: value.join(' - '),
  })
  const formationOptions = VALID_FORMATIONS.map(getFormationOption)
  console.log(formationOptions)

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

  const handleSelectChange = (opt: ISelectOption) => {
    setFormation(opt.value)
  }

  return (
    <>
      <S.SelectWrapper>
        <span>Formation</span>
        <Select
          //@ts-ignore
          onChange={handleSelectChange}
          options={formationOptions}
          styles={S.SelectCustomStyles}
          value={getFormationOption(formation)}
          width={'5rem'}
        />
      </S.SelectWrapper>
      <S.SoccerField>
        {handleFormation(formation, team.players)}
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
