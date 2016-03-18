import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const initialState = {}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk))

window.store = store

export default store