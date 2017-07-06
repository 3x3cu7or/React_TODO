import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store.js'

import TodoContainer from './containers/TodoContainer.js'

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>
  , document.getElementById('root')
)
