import React from 'react'
import AverageList from 'components/AverageList'
import TeamTable from 'components/TeamTable'
import { Col, Grid, Row } from 'styles/grid'
import PickedPlayers from 'components/PickedPlayers'
import { useTypedSelector } from 'utils/hook'
import { useDispatch } from 'react-redux'
import { Creators as TeamListActions } from 'store/ducks/teamsList'
import { Creators as teamToEditActions } from 'store/ducks/teamToEdit'
import { ITeam } from 'interfaces/team'
import { useHistory } from 'react-router-dom'
import { TEAM_DEFAULT } from 'utils/team'

export default function MyTeam() {
  const { teamsList, teamToEdit } = useTypedSelector([
    'teamsList',
    'teamToEdit',
  ])

  const dispatch = useDispatch()

  const history = useHistory()
  console.log(history)

  // useEffect(() => {
  //   dispatch(TeamListActions.addTeam(TEAMS[0]))
  // }, [])

  const deleteTeam = (team: ITeam) => {
    dispatch(TeamListActions.removeTeam(team))
  }

  const createTeam = () => {
    dispatch(teamToEditActions.createTeam(TEAM_DEFAULT))

    // history.push(routesEnum.CREATE_TEAM)
  }

  const updateTeam = (team: ITeam) => {
    dispatch(teamToEditActions.updateTeam(team))

    // history.push(routesEnum.CREATE_TEAM)
  }

  const teamTableProps = {
    teamsList,
    deleteTeam,
    createTeam,
    updateTeam,
  }

  console.log({ teamsList })

  return (
    <Grid>
      <Row>
        <Col size={1}>
          <TeamTable {...teamTableProps} />
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
