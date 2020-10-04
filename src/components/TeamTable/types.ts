import { ITeam } from 'interfaces/team'

export interface ISortBy {
  header: keyof Pick<ITeam, 'name' | 'description'> | 'default'
  order: 'asc' | 'desc'
}
