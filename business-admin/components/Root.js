import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import routes from '../routes'
import store from '../store'
import App from './App'

const Root = () => {
  return <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
         </Provider>
}

module.exports = Root;
