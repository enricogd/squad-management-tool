import { IPlayer } from 'interfaces/player'
import { ITeam } from 'interfaces/team'
import { PLAYERS } from 'mocks/players'

import { randomNumber } from './number'

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
