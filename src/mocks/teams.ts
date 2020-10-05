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
    players: [PLAYERS[0], PLAYERS[1]],
    formation: [1, 2, 3],
  },
  {
    id: randomNumber(),
    name: 'Not Real Madrid',
    description: '',
    website: 'https://www.realmadrid.com/en',
    type: 'fantasy',
    tags: ['euro', 'atk', 'best'],
    players: [PLAYERS[2], PLAYERS[3]],
    formation: [3, 2, 1],
  },
]
