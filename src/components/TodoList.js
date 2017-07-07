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
              <Todo toggleTodo={this.props.toggleTodo} text={todo.text} id={todo.id} completed={todo.completed} />
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

  toggleAndColor(){
    this.props.toggleTodo(this.props.id)
  }


  render() {
    let todoStyle
    if(this.props.completed){
        todoStyle = (
            <li onClick={() => this.props.toggleTodo(this.props.id)  } style={{color: "#d3d3d3", display: "inline-block"}}>
              {this.props.text}
              <span >&#x2713;</span>
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
