import { createStore, Reducer } from 'redux'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Reducers } from './ducks'

const persistConfig = {
  key: 'Squad Management Tool',
  storage,
  whitelist: ['teamsList'],
}

const persistedReducer: Reducer = persistReducer(persistConfig, Reducers)

export const store: any = createStore(persistedReducer)
export const persistor: Persistor = persistStore(store)
