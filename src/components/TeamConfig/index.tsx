import PlayerAvatar from 'components/PlayerAvatar'
import PlayerCard from 'components/PlayerCard'
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
      </Grid>
    </>
  )
}
