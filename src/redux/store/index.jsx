import { combineReducers, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'

import contents from '../reducers/content.reducer'

const reducers = combineReducers({
  contents
})

const store = createStore(reducers, applyMiddleware(promise))

export default store
