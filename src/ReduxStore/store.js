import {createStore,combineReducers} from 'redux'
import {ConStatReducer,NewReducer} from '../Reducers/C_S_Reducer'

const RootReducers= combineReducers({ConStatReducer,NewReducer})

export const Store = createStore(RootReducers);

