import firebase from 'firebase/app'
import 'firebase/database'

// Initalize and export Firebase.
const config = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-AUTH-DOMAIN>',
  databaseURL: 'https://<YOUR-DATABASE-NAME>.firebaseio.com',
  projectId: '<YOUR-PROJECT-ID>',
  storageBucket: '<YOUR-STORAGE-BUCKET>.appspot.com',
  messagingSenderId: '<YOUR-MESSAGING-SENDER-ID>'
}

export default firebase.initializeApp(config)
