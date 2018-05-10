/* ------------------------------------------
   Application Root Provider
--------------------------------------------- */
import React, { Component } from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createStore from '../../state/createStore'
import AppContainer from '../App/App'

export default class RootContainer extends Component {
  constructor (props) {
    super(props)
    this.history = createBrowserHistory()
    this.store = createStore(this.history, {})
  }
  render () {
    return (
      <Provider history={this.history} store={this.store}>
        <ConnectedRouter history={this.history}>
          <AppContainer history={this.history} />
        </ConnectedRouter>
      </Provider>
    )
  }
}
