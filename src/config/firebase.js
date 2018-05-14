import firebase from 'firebase/app'
import 'firebase/database'

// Initalize and export Firebase.
const config = {
  apiKey: 'AIzaSyDauX8tF7OzVUgI5Jba5W4M_pXkJTWyzIU',
  authDomain: 'shoppinglist-ba133.firebaseapp.com',
  databaseURL: 'https://shoppinglist-ba133.firebaseio.com',
  projectId: 'shoppinglist-ba133',
  storageBucket: 'shoppinglist-ba133.appspot.com',
  messagingSenderId: '332598307602'
}

export default firebase
  .initializeApp(config)
  .database()
  .ref('/shoppingList')
