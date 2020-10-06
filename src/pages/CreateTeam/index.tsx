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
import { Creators as teamListActions } from 'store/ducks/teamsList'

import * as S from './styles'
import { IPlayer } from 'interfaces/player'
import { routesEnum } from 'routes/routesData'

export default function CreateTeam() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { teamToEdit, teamsList } = useTypedSelector([
    'teamToEdit',
    'teamsList',
  ])

  const [team, setTeam] = useState(teamToEdit)
  const [isTeamValid, setIsTeamValid] = useState(false)
  console.log({ team, isTeamValid, teamToEdit })

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
    // setSelectedPlayer(undefined)
  }

  // TODO: can't handle formations with more than 3 rows

  const teamValidation = () => {
    const teamNameIsValid = team.name.length > 4

    const teamWebsiteIsValid =
      team.website.search(
        /(?:http|https):\/\/((?:[\w-]+)(?:\.[\w-]+)+)(?:[\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
      ) !== -1

    const haveElevenPlayer = team.players.every((x) => x !== '')

    console.log({ teamNameIsValid, teamWebsiteIsValid, haveElevenPlayer })

    const isAllValid = teamNameIsValid && teamWebsiteIsValid && haveElevenPlayer

    return isAllValid
  }

  const createOrUpdateTeam = () => {
    if (!teamValidation()) return

    const updateOrCreate = teamsList.some((x) => x.id === team.id)
      ? 'updateTeam'
      : 'addTeam'

    dispatch(teamListActions[updateOrCreate](team))
    history.push(routesEnum.MY_TEAM)
  }

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
                    type="text"
                    maxLength={30}
                    value={name}
                  />
                  <TextArea
                    id="team-desc"
                    label="Description"
                    onChange={updateTeam('description')}
                    placeholder="Insert team description"
                    type="text"
                    value={description}
                    maxLength={200}
                  />
                </Col>
                <Col size={1}>
                  <TextInput
                    id="team-website"
                    label="Team website"
                    onChange={updateTeam('website')}
                    placeholder="Insert team website"
                    type="url"
                    value={website}
                    maxLength={100}
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
                  <S.Button onClick={createOrUpdateTeam}>Save</S.Button>
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
