import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import App from '../components/App'
import {addTodo, toggleTodo, fetchTodos, deleteTodo } from '../ducks/app'
import {changeFilter} from '../ducks/filter'


function mapStateToProps(state) {
  return {todos: state.todos, filter: state.filter}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addTodo,
      toggleTodo,
      changeFilter,
      fetchTodos,
      deleteTodo,
    }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
