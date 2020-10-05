import { ITeam } from 'interfaces/team'
import { TEAMS } from 'mocks/teams'
import { createActions, createReducer } from 'reduxsauce'
import { IActionsFromCreators, ITeamListActionCreators } from 'store/types'

const INITIAL_STATE: ITeam[] = []

const add = (state = TEAMS, action: { team: ITeam }) => {
  return [...state, action.team]
}

const update = (state = TEAMS, action: { team: ITeam }) =>
  state.map((t) => (t.id === action.team.id ? action.team : t))

const remove = (state = TEAMS, action: { team: ITeam }) =>
  state.filter((t) => !(t.id === action.team.id))

const actions = {
  addTeam: ['team'],
  updateTeam: ['team'],
  removeTeam: ['team'],
}

export const {
  Types,
  Creators,
}: IActionsFromCreators<ITeamListActionCreators> = createActions(actions)

const handlers = {
  [Types.ADD_TEAM]: add,
  [Types.UPDATE_TEAM]: update,
  [Types.REMOVE_TEAM]: remove,
}

export default createReducer(INITIAL_STATE, handlers)
