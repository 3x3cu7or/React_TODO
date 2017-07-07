import React from 'react'
import autoBind from 'react-autobind'
import Todo from './Todo.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  render() {
    let { todos, filter }=this.props
    let filteredTodos = todos
    if (filter === "Active") {
      filteredTodos = todos.filter( (todo) => { return todo.completed===false} )
    }
    if(filter === "Completed") {
      filteredTodos = todos.filter( (todo) => { return todo.completed!==false} )
    }
    if (filter === "All") {
      filteredTodos = todos
    }

    return (
      <div>
        <ul>
          {filteredTodos.map((todo, k) => (
            <div key={k}>
              <Todo
                toggleTodo={this.props.toggleTodo}
                text={todo.text} id={todo.id}
                completed={todo.completed}
                deleteTodo={this.props.deleteTodo}
              />
            </div>
            ))}
      </ul>
      </div>
    )
  }
}

export default TodoList
