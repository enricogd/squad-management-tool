import { ITeam } from 'interfaces/team'

export const DEFAULT_PLAYERS_ARRAY = new Array(11).fill('')

export const TEAM_DEFAULT = (number: number): ITeam => ({
  id: number,
  description: '',
  name: '',
  players: DEFAULT_PLAYERS_ARRAY,
  tags: [],
  type: 'fantasy',
  website: '',
  formation: [3, 4, 3],
})
