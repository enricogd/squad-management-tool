import { ITeam } from 'interfaces/team'

const playersArray = new Array(11).fill('')

export const TEAM_DEFAULT = (number: number): ITeam => ({
  id: number,
  description: '',
  name: '',
  players: playersArray,
  tags: [],
  type: 'fantasy',
  website: '',
  formation: [3, 4, 3],
})
