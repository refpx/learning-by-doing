// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALBV0cA3k7sMHxdOOvvJFN0sLPXxteRdo',
  authDomain: 'learning-by-doing-c5971.firebaseapp.com',
  projectId: 'learning-by-doing-c5971',
  storageBucket: 'learning-by-doing-c5971.appspot.com',
  messagingSenderId: '757088391790',
  appId: '1:757088391790:web:6cad84e801bb90f6470c7f'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
