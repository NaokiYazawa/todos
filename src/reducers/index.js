import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})

// reducer 関数の中でのみ store に保存されたデータの変更を行うことができる
