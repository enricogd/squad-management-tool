import AverageList from 'components/AverageList'
import PickedPlayers from 'components/PickedPlayers'
import TeamTable from 'components/TeamTable'
import { ITeam } from 'interfaces/team'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Creators as TeamListActions } from 'store/ducks/teamsList'
import { Creators as teamToEditActions } from 'store/ducks/teamToEdit'
import { Col, Grid, Row } from 'styles/grid'
import { useTypedSelector } from 'utils/hook'
import { TEAM_DEFAULT } from 'utils/team'

export default function MyTeam() {
  const { teamsList } = useTypedSelector(['teamsList'])

  const dispatch = useDispatch()

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
