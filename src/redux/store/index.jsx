import { combineReducers, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'

import contents from '../reducers/content.reducer'
import universities from '../reducers/university.reducer'

const reducers = combineReducers({
  contents,
  universities
})

const store = createStore(reducers, applyMiddleware(promise))

export default store
