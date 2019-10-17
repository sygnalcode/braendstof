import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyles from './common/GlobalStyles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  window.root
)

serviceWorker.unregister()
