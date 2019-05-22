import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

const initialState = {
  songs: [
    {
      title: 'Dont cry for me, Argentina',
      duration: '4:05'
    },
    {
      title: 'My Heart Will Go On',
      duration: '6:10'
    },
    {
      title: 'Asereje',
      duration: '2:32'
    },
    {
      title: 'Mein Teil',
      duration: '5:45'
    }
  ],
  formValues: [{ title: '' }, { duration: '' }]
}

ReactDOM.render(
  <Provider store={createStore(reducers, initialState)}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
