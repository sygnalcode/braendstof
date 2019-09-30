import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './common/GlobalStyles'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  window.root
)

serviceWorker.unregister()
