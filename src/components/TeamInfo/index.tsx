import RadioInput from 'components/RadioInput'
import TagInput from 'components/TagInput'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import { ITeam } from 'interfaces/team'
import React from 'react'
import { Col, Grid, Row } from 'styles/grid'

import * as S from './styles'

export default function TeamInfo(props: { teamToEdit: ITeam }) {
  const { teamToEdit } = props

  const { name, players, description, tags, website, type } = teamToEdit

  return (
    <>
      <Grid>
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
            <S.TeamTypeRow>
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
            </S.TeamTypeRow>
            <TagInput label="Tags" id="team-tags" value={tags} />
          </Col>
        </Row>
      </Grid>
    </>
  )
}
