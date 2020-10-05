import React from 'react'
import AverageList from 'components/AverageList'
import TeamTable from 'components/TeamTable'
import { Col, Grid, Row } from 'styles/grid'
import PickedPlayers from 'components/PickedPlayers'
import { useTypedSelector } from 'utils/hook'
import { useDispatch } from 'react-redux'
import { Creators as TeamListActions } from 'store/ducks/teamsList'
import { ITeam } from 'interfaces/team'

export default function MyTeam() {
  const { teamsList } = useTypedSelector(['teamsList'])

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(TeamListActions.addTeam(TEAMS[0]))
  // }, [])

  const deleteTeam = (team: ITeam) => {
    dispatch(TeamListActions.removeTeam(team))
  }

  console.log({ teamsList })

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <TeamTable teamList={teamsList} deleteTeam={deleteTeam} />
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
