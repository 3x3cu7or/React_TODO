import {createAction} from 'redux-actions'
import Immutable from 'seamless-immutable';
import request from 'superagent'


export default function todosReducer(state = Immutable({}), action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([Object.assign(action.payload, {
          id: state.length + 1
        }) || {
          text: 'default text'
        }
      ])
    case "TOGGLE_TODO":
      return state.map(todo => (todo.id === action.payload)
        ? {
          ...todo,
          completed: !todo.completed
        }
        : todo)
    case "FETCH_TODOS":
    
      return action.payload
    default:
      return state

  }
}


export const addTodo = createAction('ADD_TODO')

export const toggleTodo = createAction('TOGGLE_TODO')

export const changeFilter = createAction('CHANGRFILTER')

// export const toggleTodo = id => {
//   return {type: "TOGGLE_TODO", payload: id}
// }

// export const addTodo = (text) => {
//   return {type: "ADD_TODO", payload: text}
// }


export function fetchTodos(){
  return dispatch => {
    request('GET', 'http://localhost:3000/todos')
    .then(response => {dispatch({type: "FETCH_TODOS", payload: response.body })});
  }
}
