import {createAction} from 'redux-actions'
import Immutable from 'seamless-immutable';

export default function filterReducer(state = Immutable({}), action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      return action.payload
    default:
      return state
  }
}

export const changeFilter = createAction("CHANGE_FILTER")
