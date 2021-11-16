import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// ownProps がたった今クリックしたボタンの内容
// つまり、"SHOW_ALL"・"SHOW_ACTIVE"・"SHOW_COMPLETED"のいずれか。
// ownProps の filter と、現在の state の visibilityFilter が等しければ、ボタンを disable にしたい。

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

// mapDispatchToProps では、setVisibilityFilter という Action を引数をもつ dispatch 関数を返す。
// ownProps には、たった今クリックしたボタンの内容が渡される。

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

// Link component に、「active」と「onClick」を渡す。
