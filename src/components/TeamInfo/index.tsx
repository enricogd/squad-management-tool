import RadioInput from 'components/RadioInput'
import TagInput from 'components/TagInput'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import React from 'react'
import { Col, Grid, Row } from 'styles/grid'
import * as S from './styles'

export default function TeamInfo() {
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
            />
            <TextArea
              label="Description"
              id="team-desc"
              placeholder="Insert team description"
            />
          </Col>
          <Col size={1}>
            <TextInput
              label="Team website"
              id="team-website"
              placeholder="Insert team website"
            />
            <S.Label>Team type</S.Label>
            <S.TeamTypeRow>
              <RadioInput name="team-type" label="Real" id="team-type" />
              <RadioInput name="team-type" label="Fantasy" id="team-type" />
            </S.TeamTypeRow>
            <TagInput label="Tags" id="team-tags" />
          </Col>
        </Row>
      </Grid>
    </>
  )
}
