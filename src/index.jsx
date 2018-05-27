import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/index.jsx'

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('SW and PushAPI supported!')

  const PUBLIC_VAPID_KEY =
    'BLgIK3YP-tmDz0DinlvZlzUGMeXCS0gJ7X2nkv5jjqSCesb0gR7KWGsjpkNYi8vlDpV8HFFC6xNCQeJJptWUubs'

  Notification.requestPermission((status) => {
    console.log('Notification permission status:', status)
  })

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
