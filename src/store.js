import {createStore, combineReducers, applyMiddleware} from 'redux'
import todosReducer from './ducks/app'
import filterReducer from './ducks/filter'
import Immutable from 'seamless-immutable'
import thunk from 'redux-thunk';


const logger = store => next => action => {
  /* eslint no-console: 0*/
  const result = next(action);
  console.groupCollapsed('[ACTION]', action.type);
  console.log('Payload:', action.payload);

  console.log('State:', store.getState());
  console.groupEnd('[ACTION]', action.type);
  return result
}

const initialState = Immutable({
  todos: [
    {
      id: 1,
      text: "first todo",
      completed: false
    }, {
      id: 2,
      text: "second todo",
      completed: false
    }
  ],
  filter: ""//TODO:make it {}
})

let reducer = combineReducers(Object.assign({}, {todos: todosReducer, filter: filterReducer}))

let store = createStore(
  reducer,
  initialState,
  // applyMiddleware(logger)
  applyMiddleware(thunk, logger)
)

export default store
