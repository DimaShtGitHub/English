import {userReducer} from './userReducer'
import {soundReducer} from './soundReducer'
import {combineReducers} from 'redux'


export const rootReducer = combineReducers ({
  user: userReducer,
  sound: soundReducer,
})
