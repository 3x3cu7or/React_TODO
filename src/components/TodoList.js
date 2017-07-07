import React from 'react'
import autoBind from 'react-autobind';

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

class Todo extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    let todoStyle
    if(this.props.completed){
        todoStyle = (
            <li onClick={() => this.props.toggleTodo(this.props.id)  } style={{color: "#d3d3d3", display: "inline-block"}}>
              {this.props.text}
              <span >&#x2713;</span>
              <span style={{color:"red"}} onClick={(e)=> {e.stopPropagation(); e.preventDefault(); this.props.deleteTodo(this.props.id)}}>
                x
              </span>
            </li>
        )
    } else {
      todoStyle= (
        <li onClick={() => this.props.toggleTodo(this.props.id) }>
          {this.props.text}
        </li>
      )
    }

    return (
      <div>
        {todoStyle}
      </div>
    )
  }

}
