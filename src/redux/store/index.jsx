import { combineReducers, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'

import contents from '../reducers/content.reducer'
import universities from '../reducers/university.reducer'
import faculties from '../reducers/faculty.reducer'

const reducers = combineReducers({
  contents,
  universities,
  faculties
})

const store = createStore(reducers, applyMiddleware(promise))

export default store
