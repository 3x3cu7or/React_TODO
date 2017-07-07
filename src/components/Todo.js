import React from 'react'
import autoBind from 'react-autobind';

class Todo extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render() {
    let todoStyle
    if (this.props.completed) {
      todoStyle = (
        <li onClick={() => this.props.toggleTodo(this.props.id)} style={{
          color: "#d3d3d3",
          display: "inline-block"
        }}>
          {this.props.text}
          <span >&#x2713;</span>
          <span style={{
            color: "red"
          }} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            this.props.deleteTodo(this.props.id)
          }}>
            x
          </span>
        </li>
      )
    } else {
      todoStyle = (
        <li onClick={() => this.props.toggleTodo(this.props.id)}>
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

export default Todo
