import { ITeam } from 'interfaces/team'
import { Maybe } from 'utils/interface'

export interface IStore {
  teamsList: ITeam[]
  teamToEdit: ITeam
}

export type SelectorEqualityFn<K extends keyof IStore> = Maybe<
  (left: Pick<IStore, K>, right: Pick<IStore, K>) => boolean
>

export interface IActionsFromCreators<T> {
  Creators: T
  Types: any
}

export interface ITeamListActionCreators {
  addTeam: (team: ITeam) => void
  updateTeam: (team: ITeam) => void
  removeTeam: (team: ITeam) => void
}
