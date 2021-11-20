const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

// todos の state の初期値は空の配列
// Redux Devtools Extension の State を見ると、最初は todos(pin): [] となっている。

// TOGGLE_TODO では、「state 内の todo 全て」と「クリックした todo」の id を比較している。
// 一致すれば、completed の値を反転させる。
// 一致しなければ何もしない。

export default todos
