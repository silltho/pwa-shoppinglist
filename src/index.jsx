import React from 'react'
import ReactDOM from 'react-dom'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import App from './containers/App/index.jsx'

if ('serviceWorker' in navigator) {
  const registration = runtime.register()
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
