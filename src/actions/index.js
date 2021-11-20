let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

// 「let」は「const」と違って再代入が可能
// 今回はidを1ずつ増やしていきたいので、「const」ではなく「let」を使う。

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

// データを操作する時にはidさえ渡せばよい。

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// Action とは type プロパティを持っている JavaScript のオブジェクト。
// Action はオブジェクトなので Action 自体が何かの処理を行うことはない。