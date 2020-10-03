import React from 'react'
import AverageList from 'components/AverageList'
import TeamTable from 'components/TeamTable'
import { Col, Grid, Row } from 'styles/grid'

export default function MyTeam() {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <TeamTable />
        </Col>
        <Col size={1}>
          <AverageList />
          <div>campo de futebol</div>
        </Col>
      </Row>
    </Grid>
  )
}
