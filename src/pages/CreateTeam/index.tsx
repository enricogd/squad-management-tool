import PlayerAvatar from 'components/PlayerAvatar'
import PlayerCard from 'components/PlayerCard'
import RadioInput from 'components/RadioInput'
import TagInput from 'components/TagInput'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import { PLAYERS } from 'mocks/players'
import React from 'react'
import { Col, Grid, Row } from 'styles/grid'
import SectionTemplate from 'templates/SectionTemplate'
import { useTypedSelector } from 'utils/hook'

import * as S from './styles'

export default function CreateTeam() {
  const { teamToEdit } = useTypedSelector(['teamToEdit'])

  const { name, players, description, tags, website, type } = teamToEdit

  console.log({ teamToEdit })

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
                    label="Team name"
                    id="team-name"
                    placeholder="Insert team name"
                    value={name}
                  />
                  <TextArea
                    label="Description"
                    id="team-desc"
                    placeholder="Insert team description"
                    value={description}
                  />
                </Col>
                <Col size={1}>
                  <TextInput
                    label="Team website"
                    id="team-website"
                    placeholder="Insert team website"
                    value={website}
                  />
                  <S.Label>Team type</S.Label>
                  <Row>
                    <RadioInput
                      name="team-type"
                      label="Real"
                      id="team-type"
                      checked={type === 'real'}
                    />
                    <RadioInput
                      name="team-type"
                      label="Fantasy"
                      id="team-type"
                      checked={type === 'fantasy'}
                    />
                  </Row>
                  <TagInput label="Tags" id="team-tags" value={tags} />
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
                    <S.PlayerRow>
                      <PlayerAvatar player={PLAYERS[0]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                    </S.PlayerRow>
                    <S.FieldCenter />
                    <S.LineCenter />
                    <S.PlayerRow>
                      <PlayerAvatar player={PLAYERS[0]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                    </S.PlayerRow>
                    <S.PlayerRow>
                      <PlayerAvatar player={PLAYERS[0]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                      <PlayerAvatar player={PLAYERS[2]} />
                    </S.PlayerRow>
                    <S.PlayerRow>
                      <PlayerAvatar player={PLAYERS[0]} />
                    </S.PlayerRow>
                  </S.SoccerField>
                </Col>
                <Col size={1}>
                  {PLAYERS.map((player) => (
                    <PlayerCard player={player} />
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
