import { ITeam } from 'interfaces/team'

import { randomNumber } from './number'

export const TEAM_DEFAULT: ITeam = {
  id: randomNumber(),
  description: '',
  name: '',
  players: [],
  tags: [],
  type: 'fantasy',
  website: '',
  formation: [3, 4, 3],
}
