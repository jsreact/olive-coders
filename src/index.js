import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

import store from './store/configureStore'
import routes from './routes'


const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>),
  document.getElementById('app'))