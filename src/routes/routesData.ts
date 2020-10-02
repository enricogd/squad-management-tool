import CreateTeam from 'src/pages/CreateTeam'
import MyTeam from 'src/pages/MyTeam'

export const routesEnum = {
  MY_TEAM: '/',
  CREATE_TEAM: '/create-team',
}

export const routesData = [
  {
    component: MyTeam,
    name: 'My Team',
    path: routesEnum.MY_TEAM,
  },
  {
    component: CreateTeam,
    name: 'Create Team',
    path: routesEnum.CREATE_TEAM,
  },
]