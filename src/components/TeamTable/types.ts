import { ITeam } from 'interfaces/team'

export interface ISortBy {
  header: keyof Pick<ITeam, 'name' | 'description'> | 'default'
  order: 'asc' | 'desc'
}

export interface ITeamTableProps {
  teamsList: ITeam[]
  deleteTeam: (team: ITeam) => void
  createTeam: () => void
  updateTeam: (team: ITeam) => void
}
