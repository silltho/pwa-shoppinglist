import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/index.jsx'

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('SW and PushAPI supported!')

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
} else {
  console.warn('Well, IE? Push not Supported')
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  )
})
