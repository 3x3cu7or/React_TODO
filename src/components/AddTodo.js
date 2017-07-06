import React from 'react'
import autoBind from 'react-autobind'
class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      text: ''
    }
  }

  postTodo() {
    const todo = {
      text: this.state.text,
      completed: false
    }
    this.props.addTodo(todo)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.setState({text: e.target.value})}
          onKeyDown={(e) => {
          if (e.key === 'Enter') {
            this.postTodo()
          }
        }}/>
        <button onClick={this.postTodo}>
          Add
        </button>
      </div>
    )
  }

}

export default AddTodo
