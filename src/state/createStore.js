import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const env = process.env.REACT_APP_STACK

// Export the store creator to the app entry
export default function createStore(history, initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && env !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const storeEnhancer = composeEnhancers(applyMiddleware(thunkMiddleware))
  const store = createReduxStore(rootReducer, initialState, storeEnhancer)
  return store
}
