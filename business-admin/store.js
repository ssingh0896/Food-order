import { applyMiddleware, compose, createStore } from 'redux'
import app from './reducers'
// const app = require('./reducers/index').default;

// Add dev tools in development
const addDevTools = (
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
const composeEnhancers = addDevTools ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose;

const store = () => {
  return createStore(
    app,
    {},
    composeEnhancers(applyMiddleware()) // Add middlewares here
  )
}

module.exports = store;
