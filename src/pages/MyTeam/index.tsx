import React from 'react'
import AverageList from 'components/AverageList'
import TeamTable from 'components/TeamTable'
import { Col, Grid, Row } from 'styles/grid'
import PickedPlayers from 'components/PickedPlayers'

export default function MyTeam() {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <TeamTable />
        </Col>
        <Col size={1}>
          <div>
            <AverageList />
          </div>
          <div>
            <PickedPlayers />
          </div>
        </Col>
      </Row>
    </Grid>
  )
}
