import { ITeam } from 'interfaces/team'

export interface IStore {
  teamsList: ITeam[]
  teamToEdit: ITeam
}
