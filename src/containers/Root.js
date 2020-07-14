import React, {PropTypes} from 'react'

import {Provider} from 'react-redux'
import {Router, Route, IndexRoute} from 'react-router'

import App from './App'
import TimeTracker from '../components/TimeTracker'
import CheckAuth from './CheckAuth'
import Register from './auth/Register'

const Root = ({store, history, requireAuth}) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={TimeTracker} onEnter={requireAuth} />
        <Route path='/check-auth' component={CheckAuth} />
        <Route path='/tracker' component={TimeTracker} onEnter={requireAuth} />
        <Route path='/register' component={Register} />
      </Route>    
    </Router>
  </Provider>
)

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root