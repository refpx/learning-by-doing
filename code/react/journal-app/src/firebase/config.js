// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCL8t2BjlqNXfGivxl2KWUkWe103PSZLwo',
  authDomain: 'learning-by-doing-id.firebaseapp.com',
  projectId: 'learning-by-doing-id',
  storageBucket: 'learning-by-doing-id.appspot.com',
  messagingSenderId: '890126411937',
  appId: '1:890126411937:web:e6103c768ab4bc478da8e0'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
