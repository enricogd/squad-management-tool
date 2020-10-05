import { combineReducers, Reducer, ReducersMapObject } from 'redux'

import { IStore } from '../types'
import teamsList from './teamsList'
import teamToEdit from './teamToEdit'

const reducers: ReducersMapObject<IStore> = {
  teamsList,
  teamToEdit,
}

export const Reducers: Reducer = combineReducers(reducers)
