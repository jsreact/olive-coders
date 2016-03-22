import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import github from './github'
import error from './error'

const rootReducer = combineReducers({
  github: github,
  error: error,
  routing: routerReducer
})

export default rootReducer