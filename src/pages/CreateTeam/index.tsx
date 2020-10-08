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
import { Creators as teamListActions } from 'store/ducks/teamsList'

import * as S from './styles'
import { IPlayer } from 'interfaces/player'
import { routesEnum } from 'routes/routesData'
import Formation from 'components/Formation'

export default function CreateTeam() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { teamToEdit, teamsList } = useTypedSelector([
    'teamToEdit',
    'teamsList',
  ])
  const [team, setTeam] = useState(teamToEdit)
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>()
  const [inputTags, setInputTags] = useState<string[]>([...teamToEdit.tags])

  const { name, description, website, type } = team

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
    // TODO: uncomment this
    // setSelectedPlayer(undefined)
  }

  const teamValidation = () => {
    const teamNameIsValid = team.name.length > 4

    const teamWebsiteIsValid =
      team.website.search(
        /(?:http|https):\/\/((?:[\w-]+)(?:\.[\w-]+)+)(?:[\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?/
      ) !== -1

    const haveElevenPlayer = team.players.every((x) => x !== '')

    // console.log({ teamNameIsValid, teamWebsiteIsValid, haveElevenPlayer })

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

  useEffect(() => {
    setTeam({ ...teamToEdit, tags: inputTags })
  }, [teamToEdit, inputTags])

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
                  <div>
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
                  </div>
                  <TagInput
                    id="team-tags"
                    label="Tags"
                    tags={inputTags}
                    setTags={setInputTags}
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
                  <Formation
                    team={team}
                    setPlayerInPosition={setPlayerInPosition}
                    onSave={createOrUpdateTeam}
                  />
                </Col>
                <Col size={1}>
                  {PLAYERS.map((player, idx) => (
                    <span onClick={() => setSelectedPlayer(player)} key={idx}>
                      <PlayerCard
                        key={player.player_id}
                        player={player}
                        selected={
                          selectedPlayer?.player_id === player.player_id
                        }
                      />
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
