import { createActions, createReducer } from 'reduxsauce'

import { ITeam } from 'interfaces/team'

const INITIAL_STATE: ITeam = {
  description: '',
  name: '',
  players: [],
  tags: [],
  type: 'fantasy',
  website: '',
  formation: [3, 4, 3],
}

const set = (state = INITIAL_STATE, action: { team: ITeam }): ITeam =>
  action.team

const update = (state = INITIAL_STATE, action: { team: ITeam }): ITeam => ({
  ...state,
  ...action.team,
})

const actions = {
  setTeam: ['team'],
  updateTeam: ['team'],
}

export const { Types, Creators } = createActions(actions)

const handlers = {
  [Types.SET_TEAM]: set,
  [Types.UPDATE_TEAM]: update,
}

export default createReducer(INITIAL_STATE, handlers)
