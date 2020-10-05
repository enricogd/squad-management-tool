import { IPlayer } from 'interfaces/player'
import React from 'react'
import { Grid, Row, Col } from 'styles/grid'
import * as S from './styles'

export default function PlayerCard(props: { player: IPlayer }) {
  const { player } = props

  //   const fullName = `${player.firstname}${player.lastname}`

  return (
    <>
      <S.Wrapper>
        <Grid>
          <Row>
            <Col size={3}>
              <S.Label>
                Name:
                <S.Value> {player.player_name}</S.Value>
              </S.Label>
              <S.Label>
                Nationality: <S.Value>{player.nationality}</S.Value>
              </S.Label>
            </Col>
            <Col size={1}>
              <S.Label>
                Age: <S.Value>{player.age}</S.Value>
              </S.Label>
            </Col>
          </Row>
        </Grid>
      </S.Wrapper>
    </>
  )
}
