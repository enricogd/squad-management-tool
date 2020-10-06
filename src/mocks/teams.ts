import { ITeam } from 'interfaces/team'
import { randomNumber } from 'utils/number'

import { PLAYERS } from './players'

export const TEAMS: ITeam[] = [
  {
    id: randomNumber(),
    name: 'Barcelona',
    description: 'Barcelona Squad',
    website: 'https://www.fcbarcelona.com/en/',
    type: 'real',
    tags: ['euro', 'champions', 'spanish'],
    players: new Array(11).fill(undefined).map((x, idx) => PLAYERS[idx]),
    formation: [3, 4, 3],
  },
  {
    id: randomNumber(),
    name: 'Not Real Madrid',
    description: '',
    website: 'https://www.realmadrid.com/en',
    type: 'fantasy',
    tags: [],
    players: new Array(11).fill(undefined).map((x, idx) => PLAYERS[idx]),
    formation: [3, 4, 3],
  },
]
