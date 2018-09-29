import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../store'
import { Menu, Header } from '../component'
import { Home, Cs } from '../pages'
import styles from '../assets/css/global.scss'

const middlewares = [thunkMiddleware]
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = createStore(reducers, compose(
  applyMiddleware(...middlewares)
))

const AppRouter = () => (
  <BrowserRouter>
    <div className={`flex ${styles.content}`}>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cs" component={Cs}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={`flex ${styles.main}`}>
          <Header />
          <AppRouter />
        </div>
      </Provider>
    )
  }
}