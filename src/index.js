import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'
import rootReducer from './reducers'


const store = createStore(rootReducer)
window.store = store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>),
  document.getElementById('app'))