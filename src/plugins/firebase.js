import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyD7MY8GJu82plLaz65psC6gfWcekbPxH4o',
  authDomain: 'ac19app.firebaseapp.com',
  databaseURL: 'https://ac19app.firebaseio.com',
  projectId: 'ac19app',
  storageBucket: 'ac19app.appspot.com',
  messagingSenderId: '371296486007',
  appId: '1:371296486007:web:cf30421514995d73a17c72',
  measurementId: 'G-TRDM7FP7LH',
})

export default {
  name: 'firebase',
  module: firebase,
  hasGlobal: true,
}
