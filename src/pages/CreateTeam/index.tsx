import TeamConfig from 'components/TeamConfig'
import TeamInfo from 'components/TeamInfo'
import React from 'react'
import { Col, Grid, Row } from 'styles/grid'
import SectionTemplate from 'templates/SectionTemplate'
import { useTypedSelector } from 'utils/hook'

import * as S from './styles'

export default function CreateTeam() {
  const { teamToEdit } = useTypedSelector(['teamToEdit'])

  console.log({ teamToEdit })

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <SectionTemplate title="Create your team">
            <S.Wrapper>
              <TeamInfo teamToEdit={teamToEdit} />
              <TeamConfig />
            </S.Wrapper>
          </SectionTemplate>
        </Col>
      </Row>
    </Grid>
  )
}
