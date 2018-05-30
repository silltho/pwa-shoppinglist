import firebase from 'firebase/app'
import 'firebase/messaging'
import 'firebase/database'
import VAPID_KEYS from './vapid'

// Initalize and export Firebase.
const config = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-AUTH-DOMAIN>',
  databaseURL: 'https://<YOUR-DATABASE-NAME>.firebaseio.com',
  projectId: '<YOUR-PROJECT-ID>',
  storageBucket: '<YOUR-STORAGE-BUCKET>.appspot.com',
  messagingSenderId: '<YOUR-MESSAGING-SENDER-ID>'
}

const initializedApp = firebase.initializeApp(config)
const database = initializedApp.database().ref('/shoppingList')
const messaging = firebase.messaging()

messaging.usePublicVapidKey(VAPID_KEYS.keys.p256dh)

messaging
  .requestPermission()
  .then(() => {
    console.log('Notification permission granted.')
  })
  .catch((err) => {
    console.log('Unable to get permission to notify.', err)
  })

messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log('currentToken', currentToken)
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization:
        'key=AAAATXBnaxI:APA91bEaUlGJ-Qu8A9cLLAY81PcFuqnGNlzK8FI-V32icDrAlvxJ9xVxgt1j-L6QBuZWnwyjLNPKOKXC7DsyBXwb-a9oTT4A9YG08knQzad3IrwnD3aLjzQ2MrRyAZjyY2e18-y6vVKs'
    })

    const body = {
      notification: {
        body: 'bodytest123',
        title: 'title123xs'
      }
    }

    fetch(
      'https://fcm.googleapis.com/v1/projects/shoppinglist-ba133/messages:send',
      {
        method: 'post',
        headers,
        body
      }
    )
  }
})

messaging.onMessage((payload) => {
  if (Notification.permission === 'granted') {
    console.log('payload', payload)
    /* navigator.serviceWorker.getRegistration().then((reg) => {
      const options = {
        body,
        icon: Icon,
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      }
      reg.showNotification(title, options)
    }) */
  }
})

export { messaging, database }

export default initializedApp

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
/* messaging.getToken().then(function(currentToken) {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch(function(err) {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
}); */
