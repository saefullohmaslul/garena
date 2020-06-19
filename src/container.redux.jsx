import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import '@/index.scss'
import App from '@/app'
import store from '@/redux/store'

const history = createBrowserHistory()

const ContainerRedux = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}

export default ContainerRedux
