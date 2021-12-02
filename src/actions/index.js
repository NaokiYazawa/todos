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

// 完了か未完了かを切り替えるアクション
// Todo の id のみを情報として渡す
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

// Filterの種類を定義している。
// この「VisibilityFilters」は、reducerで用いられる。

// Action とは type プロパティを持っている JavaScript のオブジェクト。
// Action はオブジェクトなので Action 自体が何かの処理を行うことはない。