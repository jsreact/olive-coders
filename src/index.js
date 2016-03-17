import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import count from './reducers/count'


const reducer = combineReducers({
  count: count,
  routing: routerReducer
})

const store = createStore(reducer)
window.store = store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
      <Router history={history} routes={routes}>
      </Router>),
  document.getElementById('app'))