import { IPlayer } from './player'

export interface IApiTeamsResponse {
  team_id: number
  name: string
  code: null
  logo: string
  is_national: false
  country: string
  founded: number
  venue_name: string
  venue_surface: string
  venue_address: string
  venue_city: string
  venue_capacity: number
}

export interface ITeams {
  description?: string
  name: string
  players: IPlayer[]
  tags?: string[]
  type: 'real' | 'fantasy'
  website: string
  formation: number[]
}
