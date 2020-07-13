import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCvkR4ZtRAQ29N1NoZ7e45HQi2zaueyU4c",
  authDomain: "crown-db-shablcu.firebaseapp.com",
  databaseURL: "https://crown-db-shablcu.firebaseio.com",
  projectId: "crown-db-shablcu",
  storageBucket: "crown-db-shablcu.appspot.com",
  messagingSenderId: "1027850502910",
  appId: "1:1027850502910:web:c5bfd515e5eeca104d5baf",
  measurementId: "G-WD0PXT1CQV"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

