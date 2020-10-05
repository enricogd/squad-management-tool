import PlayerCard from 'components/PlayerCard'
import RadioInput from 'components/RadioInput'
import TagInput from 'components/TagInput'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import { PLAYERS } from 'mocks/players'
import React from 'react'
import { Col, Grid, Row } from 'styles/grid'
import * as S from './styles'

export default function TeamConfig() {
  return (
    <>
      <Grid>
        <Row>
          <S.Headline>
            <h3>TEAM CONFIGURATION</h3>
          </S.Headline>
        </Row>
        <Row>
          <Col size={1}>CAMPO</Col>
          <Col size={1}>
            {PLAYERS.map((player) => (
              <PlayerCard player={player} />
            ))}
          </Col>
        </Row>
      </Grid>
    </>
  )
}
