import React from 'react'
import autoBind from 'react-autobind'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Filters from './Filters'

class App extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  componentWillMount(){
    this.props.actions.fetchTodos()
  }

  render(){
    let {addTodo, fetchTodos, toggleTodo, changeFilter, deleteTodo} = this.props.actions
    let {todos, filter} = this.props
    return(
      <div>
        <h2>TODO:</h2>
          <AddTodo
            addTodo={addTodo}
            fetchTodos={fetchTodos}
           />
          <TodoList
            filter={filter}
            toggleTodo={toggleTodo}
            todos={todos}
            deleteTodo={deleteTodo}
          />
          <Filters
            selectedFilter={filter}
            changeFilter={changeFilter}
          />

      </div>
    )
  }
}

export default App;
