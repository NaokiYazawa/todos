import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// 初期値は、「"SHOW_ALL"」
// default では、「SHOW_ALL」が返される。

export default visibilityFilter
