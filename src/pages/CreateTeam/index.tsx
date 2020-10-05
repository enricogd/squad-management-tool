import TeamConfig from 'components/TeamConfig'
import TeamInfo from 'components/TeamInfo'
import React from 'react'
import { Grid, Row, Col } from 'styles/grid'
import SectionTemplate from 'templates/SectionTemplate'
import * as S from './styles'

export default function CreateTeam() {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <SectionTemplate title="Create your team">
            <S.Wrapper>
              <TeamInfo />
              <TeamConfig />
            </S.Wrapper>
          </SectionTemplate>
        </Col>
      </Row>
    </Grid>
  )
}
