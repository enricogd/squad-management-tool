import { ITeams } from 'src/interfaces/teams'

import { PLAYERS } from './players'

export const TEAMS: ITeams[] = [
  {
    name: 'Barcelona',
    description: 'Barcelona Squad',
    website: 'https://www.fcbarcelona.com/en/',
    type: 'real',
    tags: ['euro', 'champions', 'spanish'],
    players: [PLAYERS[0], PLAYERS[1]],
  },
  {
    name: 'Not Real Madrid',
    description: undefined,
    website: 'https://www.realmadrid.com/en',
    type: 'fantasy',
    tags: ['euro', 'atk', 'best'],
    players: [PLAYERS[2], PLAYERS[3]],
  },
]
