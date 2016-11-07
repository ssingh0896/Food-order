import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import ReduxPromise from 'redux-promise'

const logger = createLogger();

const store = createStore(rootReducer,
  compose(
    applyMiddleware(ReduxPromise, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

module.exports = store;
