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

    return(
      <div>
        <h2>TODO:</h2>
          <AddTodo
            addTodo={this.props.actions.addTodo}
            fetchTodos={this.props.actions.fetchTodos}
           />
          <TodoList
            filter={this.props.filter}
            toggleTodo={this.props.actions.toggleTodo}
            todos={this.props.todos}
          />
          <Filters
            selectedFilter={this.props.filter}
            changeFilter={this.props.actions.changeFilter}
          />
      </div>
    )
  }
}

export default App;
