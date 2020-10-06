import PlayerAvatar from 'components/PlayerAvatar'
import PlayerCard from 'components/PlayerCard'
import RadioInput from 'components/RadioInput'
import TagInput from 'components/TagInput'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import { ITeam } from 'interfaces/team'
import { PLAYERS } from 'mocks/players'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Col, Grid, Row } from 'styles/grid'
import SectionTemplate from 'templates/SectionTemplate'
import { useTypedSelector } from 'utils/hook'
import { Creators as teamToEditActions } from 'store/ducks/teamToEdit'

import * as S from './styles'
import { IPlayer } from 'interfaces/player'

export default function CreateTeam() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { teamToEdit } = useTypedSelector(['teamToEdit'])

  const [team, setTeam] = useState(teamToEdit)

  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>()

  const { name, description, tags, website, type } = team

  const updateTeam = (key: keyof Omit<ITeam, 'id'>) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target
    setTeam((t) => ({ ...t, [key]: value }))
  }

  const setPlayerInPosition = (idx: number) => {
    if (!selectedPlayer) return

    let position = [...team.players]

    position[idx] = selectedPlayer

    setTeam({ ...team, players: position })
    setSelectedPlayer(undefined)
  }

  // TODO: refine this numerology-like algorithm
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
          {row.map((player: IPlayer | undefined, playerIdx) => (
            <PlayerAvatar
              player={player}
              key={playerIdx}
              onClick={setPlayerInPosition}
              position={rowIdx ? array[rowIdx] + array[rowIdx - 1] : playerIdx}
            />
          ))}
        </S.PlayerRow>
      )
    })

    return result
  }

  useEffect(() => {
    setTeam(teamToEdit)
  }, [teamToEdit])

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <SectionTemplate title="Create your team">
            <S.Wrapper>
              <Row>
                <S.Headline>
                  <h3>TEAM INFORMATION</h3>
                </S.Headline>
              </Row>
              <Row>
                <Col size={1}>
                  <TextInput
                    id="team-name"
                    label="Team name"
                    onChange={updateTeam('name')}
                    placeholder="Insert team name"
                    value={name}
                  />
                  <TextArea
                    id="team-desc"
                    label="Description"
                    onChange={updateTeam('description')}
                    placeholder="Insert team description"
                    value={description}
                  />
                </Col>
                <Col size={1}>
                  <TextInput
                    id="team-website"
                    label="Team website"
                    onChange={updateTeam('website')}
                    placeholder="Insert team website"
                    value={website}
                  />
                  <S.Label>Team type</S.Label>
                  <Row>
                    <RadioInput
                      checked={type === 'real'}
                      id="team-type"
                      label="Real"
                      name="team-type"
                      onChange={updateTeam('type')}
                      value="real"
                    />
                    <RadioInput
                      checked={type === 'fantasy'}
                      id="team-type"
                      label="Fantasy"
                      name="team-type"
                      onChange={updateTeam('type')}
                      value="fantasy"
                    />
                  </Row>
                  <TagInput
                    id="team-tags"
                    label="Tags"
                    onChange={updateTeam('tags')}
                    value={tags}
                  />
                </Col>
              </Row>
              <Row>
                <S.Headline>
                  <h3>CONFIGURE SQUAD</h3>
                </S.Headline>
              </Row>
              <Row>
                <Col size={1}>
                  <div>
                    Formation <span>3-4-3</span>
                  </div>
                  <S.SoccerField>
                    {/* {handleFormation([3, 4, 3], teamToEdit.players)} */}
                    <S.PlayerRow>
                      <PlayerAvatar
                        player={team.players[0]}
                        position={0}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[1]}
                        position={1}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[2]}
                        position={2}
                        onClick={setPlayerInPosition}
                      />
                    </S.PlayerRow>
                    <S.FieldCenter />
                    <S.LineCenter />
                    <S.PlayerRow>
                      <PlayerAvatar
                        player={team.players[3]}
                        position={3}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[4]}
                        position={4}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[5]}
                        position={5}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[6]}
                        position={6}
                        onClick={setPlayerInPosition}
                      />
                    </S.PlayerRow>
                    <S.PlayerRow>
                      <PlayerAvatar
                        player={team.players[7]}
                        position={7}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[8]}
                        position={8}
                        onClick={setPlayerInPosition}
                      />
                      <PlayerAvatar
                        player={team.players[9]}
                        position={9}
                        onClick={setPlayerInPosition}
                      />
                    </S.PlayerRow>
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
                </Col>
                <Col size={1}>
                  {PLAYERS.map((player, idx) => (
                    <span onClick={() => setSelectedPlayer(player)} key={idx}>
                      <PlayerCard key={player.player_id} player={player} />
                    </span>
                  ))}
                </Col>
              </Row>
            </S.Wrapper>
          </SectionTemplate>
        </Col>
      </Row>
    </Grid>
  )
}
