import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const date = firebase.firestore
    .Timestamp.now()

export default {
    db: firebaseApp.firestore(),
    auth: firebaseApp.auth(),
    date: date
}