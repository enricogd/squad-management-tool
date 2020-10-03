import { ITeam } from 'interfaces/team'
import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE: ITeam[] = []

const add = (state = INITIAL_STATE, action: { team: ITeam }) => {
  return [...state, action.team]
}

const update = (state = INITIAL_STATE, action: { team: ITeam }) =>
  state.map((t) => (t.name === action.team.name ? action.team : t))

const remove = (state = INITIAL_STATE, action: { team: ITeam }) =>
  state.filter((t) => !(t.name === action.team.name))

const actions = {
  addTeam: ['team'],
  updateTeam: ['team'],
  removeTeam: ['team'],
}

export const { Types, Creators } = createActions(actions)

const handlers = {
  [Types.ADD_TEAM]: add,
  [Types.UPDATE_TEAM]: update,
  [Types.REMOVE_TEAM]: remove,
}

export default createReducer(INITIAL_STATE, handlers)
