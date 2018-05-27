import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/index.jsx'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}

if ('PushManager' in window) {
  // Web Push is supported, update the UI
  console.log('Web Push notifications are supported!')
} else {
  console.log('Well .. IE? ... ?  ')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
