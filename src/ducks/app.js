import {createAction} from 'redux-actions'
import Immutable from 'seamless-immutable';
import request from 'superagent'
import store from '../store.js';

export default function todosReducer(state = Immutable({}), action) {
  switch (action.type) {
    case "ADD_TODO":
    return state.concat([Object.assign(action.payload, {
      id: state.length + 1
    }) || {
      text: 'default text'
    }
    ])
    case "FETCH_TODOS":
    return action.payload
    default:
    return state

  }
}


// export const toggleTodo = createAction('TOGGLE_TODO')

export const changeFilter = createAction('CHANGRFILTER')

export function toggleTodo(id){
  console.log(store.getState().todos.filter( (todo) => todo.id === id))
  let todo = store.getState().todos.filter( (todo) => todo.id === id)[0]
  console.log(todo.completed)
  return dispatch => {
    request
    .patch('http://localhost:3000/todos/'+id,)
    .send({"completed": !todo.completed})
    .then( ()=> dispatch(fetchTodos()))

  }
}

export function fetchTodos(){
  return dispatch => {
    request('GET', 'http://localhost:3000/todos')
    .then(response => { dispatch({type: "FETCH_TODOS", payload: response.body })});
  }
}

export function addTodo(todo){
  return dispatch => {
    request
      .post('http://localhost:3000/todos')
      .send(todo)
      .then( () => dispatch(fetchTodos()));
  }

}
