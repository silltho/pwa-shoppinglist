import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/index.jsx'
import VAPID_KEYS from 'config/vapid'

// Check SW, Pushmanager compaitibility
// Request for PushNotification permission
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('SW and PushAPI supported!')

  /*Notification.requestPermission((status) => {
    console.log('Notification permission status:', status)
  })*/

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)

        /*const vapidPublicKey = VAPID_KEYS.keys.p256dh
        const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey
        })*/
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

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}
