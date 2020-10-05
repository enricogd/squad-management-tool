import { ITeam } from 'interfaces/team'
import { createActions, createReducer } from 'reduxsauce'
import { IActionsFromCreators, ITeamToEditActionCreators } from 'store/types'
import { randomNumber } from 'utils/number'

const INITIAL_STATE: ITeam = {
  id: randomNumber(),
  description: '',
  name: '',
  players: [],
  tags: [],
  type: 'fantasy',
  website: '',
  formation: [3, 4, 3],
}

const create = (state = INITIAL_STATE, action: { team: ITeam }): ITeam => {
  return action.team
}

const update = (state = INITIAL_STATE, action: { team: ITeam }): ITeam => {
  return { ...state, ...action.team }
}

const actions = {
  createTeam: ['team'],
  updateTeam: ['team'],
}

export const {
  Types,
  Creators,
}: IActionsFromCreators<ITeamToEditActionCreators> = createActions(actions)

const handlers = {
  [Types.CREATE_TEAM]: create,
  [Types.UPDATE_TEAM]: update,
}

export default createReducer(INITIAL_STATE, handlers)
